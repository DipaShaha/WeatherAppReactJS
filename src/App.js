import React, { Component } from 'react';
import './App.css';

export class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      buyItems:['milk','bread','fruit'],
      message:''
    }
  }

  onAddItem=(event)=>{
    event.preventDefault();
    const {buyItems}=this.state;
    const newItem=this.newItem.value;
    const isOnTheList=buyItems.includes(newItem);
    if(isOnTheList){
        this.setState({message:'this item is already on the list'})
    }else{
       newItem!=='' && this.setState({
        buyItems:[...this.state.buyItems,newItem],
        message:''
      })

    }
   
    this.addForm.reset();

  }

  onRemoveItem(){
    
  }


  render(){
    const {buyItems,message}=this.state; //return r baire
    return (
      <div className="App">
        <h1>Shopping List</h1>

          <form className="form-inline"
           onSubmit={this.onAddItem} ref={input=>this.addForm=input}
          >
            <div className="form-group mb-2"></div>
            <div className="form-group mb-2">
              <label for="inputPassword2" className="sr-only">Add New Item</label>
              <input type="text" className="form-control" id="cartItem" placeholder="Add Item"

              ref={input=>this.newItem=input}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-1">Add</button>
          </form>

        <div className="content">
           {

            message!=='' && <p className="message text-danger">{message}</p>
          }
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {buyItems.map(item=>{
                return(
                <tr key={item}>
                  <th scope="row">1</th>
                  <td>{item}</td>
                  <td>Otto</td>
                </tr>
                );
             })
            }
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
