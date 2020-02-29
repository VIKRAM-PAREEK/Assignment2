import React from 'react';
import { Button, Grid, AppBar, TextField, List, Typography, ListItemText, ListItemIcon, ListButton } from '@material-ui/core';
import Display from './Display';
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

  handleDelete(Itemdelete){

    let newItems = this.state.list.filter((_item)=>{
      return _item !== Itemdelete
    });
    this.setState({
      list: newItems
    });

  }
  render(){
    return(
          
          <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing= {8}
          padding-top= {100}
          >
            <AppBar color="secondary">
              <Typography variant='h7' align='center'>TO DO LIST
              </Typography>
            </AppBar>
          
            <Grid item>
                <TextField id="outlined-basic" variant="outlined"
                    value = {this.state.todoitem}
                    onChange={ (e)=>this.handleUserInput(e.target.value)}
                    type="text"
                    placeholder="To Do"
                    required 
                />
              </Grid>
              <Grid item>
                <TextField
                    id="date"
                    label="Due Date"
                    type="date"
                    defaultValue="2020-02-22"
                />
              </Grid>
              <Grid item>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={ (item)=>this.addToList(this.state.todoitem)} >
                      ADD
                </Button>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                <Display
                  handleDelete={this.handleDelete.bind(this)}
                  list={this.state.list}/>
              </Grid>
            </Grid>
          </Grid>        
      );
  }
}

export default App;
