import React from "react"
class PassengerIndex extends React.Component{
    constructor() {
        super()
        this.state = {
            Passenger: [], 
            isLoaded: false,
            passenger: {
                latitude: "", 
                longitude: "", 
                hasManyTrips: "",
                hasTraveledwithManyDrivers: "",

            }, 
            newChange: false
        }
        this.handleLatitudeChange = this.handleLatitudeChange.bind(this)
        this.handleLongitudeChange = this.handleLongitudeChange.bind(this)
        this.handleHasManyTripsChange = this.handleHasManyTripsChange.bind(this)
        this.handleHasTraveledWithManyDriversChange = this.handleHasTraveledWithManyDriversChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.getPassenger()
    }
    componentDidUpdate() {
        if (this.state.newChange) this.getPassenger()
    }

    getPassenger() {
        fetch('http://localhost:3000/passenger')
        .then((response) => {
            console.log("response", response)
            return response.json()
        })
        .catch((error) => {
            console.log("error", error);
        })
        .then((passenger) => {
            console.log("passenger", passenger)
            setTimeout(()=> {
                this.setState({
                    passenger, 
                    isLoaded: true,
                    newChange: false
                }) 
            },2000)
        });  
      
    }
    handleLatitudeChange(event) {
        this.setState({
            passenger: Object.assign(
                {}, 
                this.state.passenger,
                {
                  latitude: event.target.value  
                }
            )
        })
    }
    handleLongitudeChange(event) {
        this.setState({
            passenger: Object.assign(
                {}, 
                this.state.passenger,
                {
                  longitude: event.target.value  
                }
            )
        })
    }   
    handleHasManyTripsChange(event) {
        this.setState({
            passenger: Object.assign(
                {}, 
                this.state.passenger,
                {
                  hasManyTrips: event.target.value  
                }
            )
        })
    }  
    handleHasTraveledWithManyDriversChange(event) {
        this.setState({
            passenger: Object.assign(
                {}, 
                this.state.passenger,
                {
                    hasTraveledWithManyDriversChange: event.target.value  
                }
            )
        })
    }  
    handleSubmit() {
        const passenger = {
            latitude: this.state.passenger.latitude, 
            longitude: this.state.passenger.longitude, 
            hasManyTrips: this.state.passenger.hasManyTrips, 
            hasTraveledWithManyDrivers: this.state.passenger.hasTraveledWithManyDrivers
        }
        console.log("passenger", passenger)
        const url = "http://localhost:3000/passenger"
        const userResponse = fetch(url, {
           method: "POST", 
           body: JSON.stringify(passenger) 
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
                    <label> Latitude:
                        <input type="text" name="latitude" value={this.state.passenger.latitude} onChange={this.handleLatitudeChange} />
                    </label>
                    <label> Longitude:
                        <input type="text" name="longitude" value={this.state.passenger.longitude} onChange={this.handleLongitudeChange} />
                    </label>
                    <label> Has Many Trips:
                        <input type="text" name="hasManyTrips" value={this.state.passenger.hasManyTrips} onChange={this.handleHasManyTripsChange} />
                    </label>
                    <label> Has Traveled with Many Drivers :
                        <input type="text" name="hasTraveledWithManyDrivers" value={this.state.passenger.hasTraveledWithManyDrivers} onChange={this.handleHasTraveledWithManyDriversChange} />
                    </label>
                    <button onClick={this.handleSubmit}> create passenger </button>
                    {this.state.passenger.map((passenger) => <div>{passenger.latitude}</div>)}
                </div>
            ) 
        }
        return(
            <div>Loading...</div>
        )
    }
}
export default PassengerIndex