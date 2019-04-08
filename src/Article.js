import React, { Component } from 'react';

export default class Article extends React.Component {
    state = {
        items: ["Ivan","Dorn","Kolya"],
        show: true
    }

    addItem = ()=>{
        this.state.items.push("Dima");
        this.setState({items: this.state.items});
    }

    hiddList = ()=>{
       this.setState({
        show: !this.state.show
    });
    }
    render() {
        
        const cycle = this.state.items.map((item,index)=>{
                    return <li key={index}>{item}</li>
                });
        
        if(this.state.show){

        }
        const shw = this.state.show ? cycle : <div>Nea</div>
        return(
            <div>
                <ul>
                    {shw}
                    <button onClick={this.addItem}>Add</button>
                    <button onClick={this.hiddList}>Hidden</button>
                </ul>
            </div>
        ) 
  
    }
}

class Li extends React.Component {
    render(){
        
        return (
         <div></div>
        )
    }
}
