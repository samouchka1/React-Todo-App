import React from "react";
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: "",
      list: []
    };
  }
  //UPDATE INPUT
  updateInput(value) {
    this.setState({
      userInput: value
    });
  }

  //ADD ITEM
  addItem(){
    if(this.state.userInput !== '' ){
      const userInput = {
        // Add a random id which is used to delete
        id :  Math.random(),
        // Add a user value to list
        value : this.state.userInput
      };

      // Update list
      const list = [...this.state.list];
      list.push(userInput);
      // reset state
      this.setState({
        list,
        userInput:""
      });
    }
  }

  //DELETE ITEM
  deleteItem(key){
    const list = [...this.state.list];

    // Filter values and leave value which we need to delete
    const updateList = list.filter(item => item.id !== key);

    // Update list in state
    this.setState({
      list:updateList
    });
  }

  render() {
    return (
      <div className="App">
        <div className="title text-center my-10 text-xl">
          <h1>TO-DO LIST using <span className="text-indigo-500 font-bold">REACT</span></h1>
        </div>
        <div className="inputField text-center border py-10 mx-0 md:mx-20 lg:mx-60 bg-indigo-400 drop-shadow-lg">
          <input
            className="border-2 p-2"
            placeholder="add task ..." 
            value = {this.state.userInput}
            onChange = {item => this.updateInput(item.target.value)}
          />
          <button
            className="ml-8 p-2 border border-black bg-gray-200 hover:bg-gray-100"
            onClick = {()=>this.addItem()}
          > Add 
          </button>

          {this.state.list.map(item => { 
            return (
            <div className="list-items flex justify-center p-2 my-4">
              <p className="p-2 px-6 bg-white border">
                {item.value}
              </p>
              <button onClick={ () => this.deleteItem(item.id) }
                className="ml-8 p-2 px-4 border border-black hover:border-red-700 bg-gray-200 hover:bg-red-100 text-black hover:text-red-700"
              >
                <p>Delete</p>
              </button>
            </div>
          )})}

        </div>
      </div>
    );
  }
};