import React from 'react';
import { Button, Grid, AppBar, TextField, List, Typography, ListItemText, ListItemIcon, ListButton } from '@material-ui/core';
import Display from './Display';
class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      todoitem: '',
      description: '',
      list: []
    }
  }

  //tapking the user input value
  handleUserInput(item){
    this.setState({
      todoitem: item
    });
  }  
  handleDescription(item){
    this.setState({
      description: item
    });
  }  
  //functionality of button i.e adding todo items
  addToList(todo, des){
    
    if(todo!=='' && des!==''){
    var item= todo+" ["+des+"]";
    let listArray = this.state.list; //creating a list and storing current todoitem values
    listArray.push(item);

    this.setState({
      list: listArray, //storing the todo items in the main list
      todoitem: '',
      description: ''    //Initialising the todoitem in the textbox as empty again
    });
  }
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
          <Grid Item>
            <Typography variant='h7' align='center'><br/><br/><br/><br/>Welcome ,Here you can manage your Daily To-Do's. 
              Just enter your To Do items and add them, once you complete them Delete your list items by clicking on them.
            </Typography>
          </Grid>
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
                <TextField id="outlined-basic" variant="outlined"
                    value = {this.state.description}
                    onChange={ (e)=>this.handleDescription(e.target.value)}
                    type="text"
                    placeholder="Description"
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
                    onClick={ (item)=>this.addToList(this.state.todoitem, this.state.description)} >
                      ADD
                </Button>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                  <List>
                    <ListItemText>
                      <Display
                        handleDelete={this.handleDelete.bind(this)}
                        list={this.state.list}/>
                    </ListItemText>
                  </List>
                </Grid>
                </Grid>
      );
  }
}

export default App;
