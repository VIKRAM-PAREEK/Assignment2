import React from 'react';
import './App.css';

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
        
        <div className="Todo Container">
          <form id="todo-form"> 
            <input 
              value = {this.state.todoitem}
              onChange={ (e)=>this.handleUserInput(e.target.value)}
              type="text"
              placeholder="To Do"
              required
            />
            <button onClick={ (item)=>this.addToList(this.state.todoitem)} >
              ADD
            </button>
            <ul>
              {this.state.list.map( (val)=><li>{val}</li>)}
            </ul>
          </form>
          
        </div>
      );
  }
}

export default App;
