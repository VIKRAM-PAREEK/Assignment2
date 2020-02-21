import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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
             direction="row"
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
              </form>
              <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={ (item)=>this.addToList(this.state.todoitem)} >
                    ADD
                </Button>
                <ul>
                  {this.state.list.map( (val)=><li>{val}</li>)}
                </ul>

            </Grid>        
      );
  }
}

export default App;
