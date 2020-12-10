import React from "react"
class UserIndex extends React.Component{
    constructor() {
        super()
        this.state = {
            users: [], 
            isLoaded: false,
            user: {
                username: "", 
                password: "", 
            }, 
            newChange: false
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.getUsers()
    }
    componentDidUpdate() {
        if (this.state.newChange) this.getUsers()
    }

    getUsers() {
        fetch('http://localhost:3000/users')
        .then((response) => {
            console.log("response", response)
            return response.json()
        })
        .catch((error) => {
            console.log("error", error);
        })
        .then((users) => {
            console.log("users", users)
            setTimeout(()=> {
                this.setState({
                    users, 
                    isLoaded: true,
                    newChange: false
                }) 
            },2000)
        });  
      
    }
    handleUsernameChange(event) {
        this.setState({
            user: Object.assign(
                {}, 
                this.state.user,
                {
                  username: event.target.value  
                }
            )
        })
    }
    handlePasswordChange(event) {
        this.setState({
            user: Object.assign(
                {}, 
                this.state.user,
                {
                  password: event.target.value  
                }
            )
        })
    }    
    handleSubmit() {
        const user = {
            username: this.state.user.username, 
            password: this.state.user.password
        }
        console.log("user", user)
        const url = "http://localhost:3000/users"
        const userResponse = fetch(url, {
           method: "POST", 
           body: JSON.stringify(user) 
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
                    <label> username
                        <input type="text" name="username" value={this.state.user.username} onChange={this.handleUsernameChange} />
                    </label>
                    <label> password
                        <input type="text" name="password" value={this.state.user.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button onClick={this.handleSubmit}> create user </button>
                    {this.state.users.map((user) => <div>{user.username}</div>)}
                </div>
            ) 
        }
        return(
            <div>Loading...</div>
        )
    }
}
export default UserIndex