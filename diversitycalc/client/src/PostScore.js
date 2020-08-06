import React, { Component } from 'react';

class PostScore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://wd5-impl-services1.workday.com/ccx/service/customreport2/atlassian/ISU_DiversityIndex/CR_Diversity_Index?Email_IDs=emailID1,emailID2,emailID3&format=json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items:json
                })
            })
    }
  
    render(){

        var { isLoaded, items } = this.state;

        if(!isLoaded){
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="App">
                    Data has been loaded
                </div>
            );
        }
    }
  
}

export default App;