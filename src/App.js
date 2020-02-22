import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      todoitem: '',
      list: []
    }
  }

  //tapking the user input value
  handleUserInput(item){
    this.setState({
      todoitem: item
    });
  }  

  //functionality of button i.e adding todo items
  addToList(item){
    
    let listArray = this.state.list; //creating a list and storing current todoitem values
    listArray.push(item);

    this.setState({
      list: listArray, //storing the todo items in the main list
      todoitem: ''    //Initialising the todoitem in the textbox as empty again
    });
  }
  render(){
    return(

            <Grid
             container
             direction="column"
             justify="center"
             alignItems="center"
            >
             
              <form id="todo-form"> 
                <TextField id="outlined-basic" variant="outlined"
                    value = {this.state.todoitem}
                    onChange={ (e)=>this.handleUserInput(e.target.value)}
                    type="text"
                    placeholder="To Do"
                    required 
                />
                <TextField
                    id="date"
                    label="Due Date"
                    type="date"
                    defaultValue="2020-02-22"
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={ (item)=>this.addToList(this.state.todoitem)} >
                      ADD
                </Button>
                <List>
                  {this.state.list.map( (val)=><li>{val}</li>)}
                </List>
              </form>
            </Grid>        
      );
  }
}

export default App;
