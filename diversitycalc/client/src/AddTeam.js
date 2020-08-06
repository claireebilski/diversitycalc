import React, { useState, useEffect } from 'react'

export function AddTeam(){
    const [score, setScore] = useState(0);
    const [emailList, setEmailList] = useState([]);
    const [emailValue, setEmailValue] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // const [submittedState, setSubmitted] = useState(false);
    /* //componentDidMount() {
        //fetch API call
        fetch('https://randomuser.me/api/?results=500')
        .then(results => {
            return results.json();
        //map over data to return    
        }).then(data => {
            let team = data.results.map((email) => {
                return(
                    <div key={email.results}>
                    </div>
                    //<div key={us.results}>
                    //</div>
                    //<div key={overforty.results}>
                    //</div>
                    //Send over the rest of the data for calculation
                )
            })
            this.setState({team: team});
            console.log("state", this.state.team);
        }) 
    } */

    const DrawTable = () => {
        return (
            <div>
            {
                emailList.length > 0 && emailList.map((item) => 
                    <div>
                        { item }
                    </div>
                )
            }
            </div>
        )
    }

    useEffect(() => {
        console.log("update table");
        DrawTable();
    }, [emailList]);

    const handleChange = (e) => {
        // console.log(e);
        setEmailValue(e.target.value);
    }

    const handleAddEmail = (e) => {
        e.preventDefault();
        if (/.+@atlassian.com$/.test(emailValue)) {
            let newList = emailList;
            newList.push(emailValue);
            setEmailList(newList);
            // setSubmitted(true);
            // console.log(email);
            // console.log(submittedState);
        } else {
            console.log("REJECTED");
        }
        console.log(emailList);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const handleReset = (e) => {
        e.preventDefault();
        setScore(0);
        setEmailList([]);
        setEmailValue("");
        setSubmitted(false);
    }

    return (
        <>
            <div style={{display: submitted > 0 ? "none" : "block"}}>
                
                <div>
                    <form onSubmit={e=> {handleAddEmail(e);}}>
                        <label htmlFor="email">Teammate emails:</label>
                        <input type="email" pattern=".+@atlassian.com" id="email" value={emailValue} onChange={e=>handleChange(e)} />
                        <button>Add Email</button>
                    </form>
                </div>
               
                <DrawTable />
                <div class="" style={{display: emailList.length > 0 ? "block" : "none"}}>
                    <button 
                        // type="submit" 
                        onClick={e=> {
                            e.preventDefault();
                            handleSubmit(e);
                        }}
                    >
                        Calculate Score!
                    </button>
                    <button 
                        // type="submit" 
                        onClick={e=> {
                            e.preventDefault();
                            handleReset(e);
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div style={{display: submitted > 0 ? "block" : "none"}}>
                SCORE: {score}
                <div>
                    <button 
                        // type="submit" 
                        onClick={e=> {
                            e.preventDefault();
                            handleReset(e);
                        }}
                    >
                        Retry
                    </button>
                </div>
            </div>
        </>
    )
}

// export default AddTeam;