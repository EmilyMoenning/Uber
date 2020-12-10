import React from "react"
class MessageIndex extends React.Component{
    constructor() {
        super()
        this.state = {
            Message: [], 
            isLoaded: false,
            message: {
                body: "", 
                rideID: "", 
                isDriver: "",
            }, 
            newChange: false
        }
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleRideIDChange = this.handleRideIDChange.bind(this)
        this.handleIsDriverChange = this.handleIsDriverChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.getMessage()
    }
    componentDidUpdate() {
        if (this.state.newChange) this.getMessage()
    }

    getMessage() {
        fetch('http://localhost:3000/message')
        .then((response) => {
            console.log("response", response)
            return response.json()
        })
        .catch((error) => {
            console.log("error", error);
        })
        .then((message) => {
            console.log("message", message)
            setTimeout(()=> {
                this.setState({
                    message, 
                    isLoaded: true,
                    newChange: false
                }) 
            },2000)
        });  
      
    }
    handleBodyChange(event) {
        this.setState({
            message: Object.assign(
                {}, 
                this.state.message,
                {
                  body: event.target.value  
                }
            )
        })
    }
    handleRideIDChange(event) {
        this.setState({
            message: Object.assign(
                {}, 
                this.state.message,
                {
                  rideID: event.target.value  
                }
            )
        })
    }    
    handleIsDriverChange(event) {
        this.setState({
            message: Object.assign(
                {}, 
                this.state.message,
                {
                  rideID: event.target.value  
                }
            )
        })
    }    
    handleSubmit() {
        const message = {
            body: this.state.message.body, 
            rideID: this.state.message.rideID,
            isDriver: this.state.message.isDriver
        }
        console.log("message", message)
        const url = "http://localhost:3000/message"
        const userResponse = fetch(url, {
           method: "POST", 
           body: JSON.stringify(message) 
        }) .then((response) => {
            const json = response.json()
            return json
        }).then((json) => {
            this.setState({
              newChange: true  
            })
        })
        return userResponse
    }
    render() {
        if (this.state.isLoaded) {
            return(
                <div>
                    <label> Body: 
                        <input type="text" name="body" value={this.state.message.body} onChange={this.handleBodyChange} />
                    </label>
                    <label> Ride ID: 
                        <input type="text" name="Ride ID" value={this.state.message.rideID} onChange={this.handleRideIDChange} />
                    </label>
                    <label> Is Driver (Y/N):
                        <input type="text" name="Is Driver" value={this.state.message.isDriver} onChange={this.handleIsDriverChange} />
                    </label>
                    <button onClick={this.handleSubmit}> create message </button>
                    {this.state.message.map((message) => <div>{message.body}</div>)}
                </div>
            ) 
        }
        return(
            <div>Loading...</div>
        )
    }
}
export default MessageIndex