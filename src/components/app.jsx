import React, {Component} from "react";
import axios from "axios";
import Title from "./Title/title";
import "../components/app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mediaData: {},
        };
    };

    componentDidMount() {
        this.fetchMediaData();
    }

    async fetchMediaData() {
        let response = await axios.get(
            "http://localhost:5000/api/collections/user"
        );
        this.setState({
            mediaData: response.data
        });
    }

    render() {
        if(this.state.mediaData[0] === undefined) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Title/> 
            </div>
        );
    }
}


export default App;