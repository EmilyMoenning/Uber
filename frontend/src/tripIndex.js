import React from "react"
class TripIndex extends React.Component{
    constructor() {
        super()
        this.state = {
            Trip: [], 
            isLoaded: false,
            trip: {
                riderID: "", 
                driverID: "", 
                fromLatitude: "",
                fromLongitude: "",
                toLatitude: "",
                toLongitude: "",
            }, 
            newChange: false
        }
        this.handleRiderIDChange = this.handleRiderIDChange.bind(this)
        this.handleDriverIDChange = this.handleDriverIDChange.bind(this)
        this.handleFromLatitudeChange = this.handleFromLatitudeChange.bind(this)
        this.handleFromLongitudeChange = this.handleFromLongitudeChange.bind(this)
        this.handleToLatitudeChange = this.handleToLatitudeChange.bind(this)
        this.handleToLongitudeChange = this.handleToLongitudeChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.getPassenger()
    }
    componentDidUpdate() {
        if (this.state.newChange) this.getPassenger()
    }

    getPassenger() {
        fetch('http://localhost:3000/trip')
        .then((response) => {
            console.log("response", response)
            return response.json()
        })
        .catch((error) => {
            console.log("error", error);
        })
        .then((trip) => {
            console.log("trip", trip)
            setTimeout(()=> {
                this.setState({
                    trip, 
                    isLoaded: true,
                    newChange: false
                }) 
            },2000)
        });  
      
    }
    handleRiderIDChange(event) {
        this.setState({
            trip: Object.assign(
                {}, 
                this.state.trip,
                {
                  riderID: event.target.value  
                }
            )
        })
    }
    handleDriverIDChange(event) {
        this.setState({
            trip: Object.assign(
                {}, 
                this.state.trip,
                {
                  driverID: event.target.value  
                }
            )
        })
    }   
    handleFromLatitudeChange(event) {
        this.setState({
            trip: Object.assign(
                {}, 
                this.state.trip,
                {
                  fromLatitude: event.target.value  
                }
            )
        })
    }  
    handleFromLongitudeChange(event) {
        this.setState({
            trip: Object.assign(
                {}, 
                this.state.trip,
                {
                    fromLongitude: event.target.value  
                }
            )
        })
    }  
    handleToLatitudeChange(event) {
        this.setState({
            trip: Object.assign(
                {}, 
                this.state.trip,
                {
                  toLatitude: event.target.value  
                }
            )
        })
    }  
    handleToLongitudeChange(event) {
        this.setState({
            trip: Object.assign(
                {}, 
                this.state.trip,
                {
                   toLongitude: event.target.value  
                }
            )
        })
    }  
    handleSubmit() {
        const trip = {
            riderID: this.state.trip.riderID, 
            driverID: this.state.trip.driverID, 
            fromLatitude: this.state.trip.fromLatitude, 
            fromLongitude: this.state.trip.fromLongitude,
            toLatitude: this.state.trip.toLatitude, 
            toLongitude: this.state.trip.toLongitude

        }
        console.log("trip", trip)
        const url = "http://localhost:3000/trip"
        const userResponse = fetch(url, {
           method: "POST", 
           body: JSON.stringify(trip) 
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
                    <label> Rider ID:
                        <input type="text" name="riderID" value={this.state.trip.riderID} onChange={this.handleRiderIDChange} />
                    </label>
                    <label> Driver ID:
                        <input type="text" name="driverID" value={this.state.trip.driverID} onChange={this.handleDriverIDChange} />
                    </label>
                    <label> From Latitude:
                        <input type="text" name="fromLatitude" value={this.state.trip.fromLatitude} onChange={this.handleFromLatitudeChange} />
                    </label>
                    <label> From Longitude:
                        <input type="text" name="fromLongitude" value={this.state.trip.fromLongitude} onChange={this.handleFromLongitudeChange} />
                    </label>
                    <label> To Latitude:
                        <input type="text" name="toLatitude" value={this.state.trip.toLatitude} onChange={this.handleToLatitudeChange} />
                    </label>
                    <label> To Longitude:
                        <input type="text" name="toLongitude" value={this.state.trip.toLongitude} onChange={this.handleToLongitudeChange} />
                    </label>
                    <button onClick={this.handleSubmit}> create trip </button>
                    {this.state.trip.map((trip) => <div>{trip.latitude}</div>)}
                </div>
            ) 
        }
        return(
            <div>Loading...</div>
        )
    }
}
export default TripIndex