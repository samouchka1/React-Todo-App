import React from "react";
import './App.css';

const titleStyle = {
  fontFamily: 'Permanent Marker, cursive'
}

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

      // "... = copy list. Update list
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
        
      <div className="inputField text-center border pt-6 pb-2 my-16 mx-0 md:mx-20 lg:mx-60 bg-gradient-to-b from-indigo-900 to-blue-300 drop-shadow-lg rounded-md">
        <div className="title caret-transparent text-center mt-10 mb-14 text-2xl text-indigo-50 font-semibold">
          <h1 style={titleStyle}>To-Do App</h1>
            {/* using <span className="text-indigo-900 font-bold">REACT</span></h1> */}
        </div>
          <input
            className="border-2 p-2 rounded-md"
            placeholder="..." 
            value = {this.state.userInput}
            onChange = {item => this.updateInput(item.target.value)}
          />
          <button
            className="ml-8 p-2 border border-black bg-gray-200 hover:bg-gray-100 rounded-md"
            onClick = {()=>this.addItem()}
          > Add 
          </button>

          {this.state.list.map(item => { 
            return (
            <div className="list-items flex justify-center p-2 my-4">
              <p className="p-2 px-6 bg-white border rounded-md">
                {item.value}
              </p>
              <button onClick={ () => this.deleteItem(item.id) }
                className="ml-6 text-gray-100 hover:text-red-700"
              >
                <i className="fa fa-trash text-2xl"></i>
              </button>
            </div>
          )})}
          
          <p id="signature" class="text-xs text-right mt-16 mb-0 mr-0 md:mr-4 lg:mr-6 pr-0 lg:pr-8">&copy; {new Date().getFullYear()} samouchka</p>

        </div>
      </div>
    );
  }
};