// Incrementer And Decrementer

import { Component } from "react";

class App extends Component {
    // currVal = 0 ; // it is used to print  in console
    // state is used because value of taskCount is constantly changing and we need to keep track of it and display it on screen
    state = {
        currVal : 0 ,
    }
    render(){
        return(
            <div className="screen"> 
                 <h1 className="ui heading center" >Incrementer And Decrementer</h1>
                 <div>
                    <button onClick={(e) => {
                        this.setState({
                            ...this.state,
                            currVal : this.state.currVal +1 ,
                        });
                        console.log(this.state.currVal);
                        
                        
                    }} className="ui secondary button">
                        Increment
                    </button>
                    <button onClick={(e) => {
                        this.setState({
                            ...this.state,
                            currVal : this.state.currVal - 1 ,
                        });
                        console.log(this.state.currVal);
                        
                        
                    }} className="ui secondary button">
                        Decrement
                    </button>
                    <p>Current Value : {this.state.currVal}</p>

                 </div>
            </div>
        );
    }
}

export default App ;
