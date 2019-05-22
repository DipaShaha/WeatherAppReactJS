import React, { Component } from 'react';
import './App.css';

export class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      buyItems:['milk','bread','fruit']
    }
  }


  render(){
    const {buyItems}=this.state; //return r baire
    return (
      <div className="App">
        <h1>Shopping List</h1>
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
    );
  }
}
