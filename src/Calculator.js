import React from "react";
import './calculator.css'

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            total: 0
        }
    }
     addTwo =()=>{
        this.setState((prevState)=>{
            return {
                total: prevState.total + 2
            }
        },()=>{
            console.log("this.state",this.state);
        });
     }

     square =()=>{
        this.setState((prevState)=>{
            return{
                total: prevState.total * prevState.total
            }
        },()=>{
            console.log("this.state",this.state);
        });
     }

     double =()=>{
        this.setState((prevState)=>{
            return{
                total : prevState.total * 2
            }
        },()=>{
            console.log("this.state",this.state);
        });
     }
     divideTwo =()=>{
        this.setState((prevState)=>{
            return{
                total: prevState.total / 2
            }
        }, ()=>{
            console.log("this.state",this.state);
        })
     }
     subtractTwo =()=>{
        this.setState((prevState)=>{
            return{
                total: prevState.total - 2
            }
        },()=>{
            console.log("this.state",this.state);
        })
     }
    render() {
        return (
            <div className="calculator">
                <div className="total">{this.state.total}</div>
                <div className="buttons">
                    <button className="add" onClick={this.addTwo}>Add2!</button>
                    <button className="sqaure" onClick={this.square}>Square!</button>
                    <button className="double" onClick={this.double}>Double!</button>
                    <button className="divide" onClick={this.divideTwo}>DivideBy2!</button>
                    <button className="subtract" onClick={this.subtractTwo}>Subtract2!</button>
                </div>
            </div>
        );
    }
}

export default Calculator;