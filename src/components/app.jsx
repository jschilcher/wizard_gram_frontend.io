import React, {Component} from "react";
import Title from "./Title/title";
import "../components/app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    };

    render() {
        return (
            <div>
                <Title/> 
            </div>
        );
    }
}


export default App;