import React from "react"
class DriverIndex extends React.Component{
    constructor() {
        super()
        this.state = {
            drivers: [], 
            isLoaded: false,
            driver: {
                driversLicenseNumber: "", 
                carMakeAndModel: "", 
                carLicensePlateNumber: "", 
                latitude: "", 
                longitude: "", 
                hasManyTrips: "", 
                carMakeAndModel: "", 
            }, 
            newChange: false
        }
        this.handleDriversLicenseNumberChange = this.handleDriversLicenseNumberChange.bind(this)
        this.handleCarMakeAndModelChange = this.handleCarMakeAndModelChange.bind(this)
        this.handleCarLicensePlateNumberChange = this.handleCarLicensePlateNumberChange.bind(this)
        this.handleLatitudeChange = this.handleLatitudeChange.bind(this)
        this.handleLongitudeChange = this.handleLongitudeChange.bind(this)
        this.handleHasManyTripsChange = this.handleHasManyTripsChange.bind(this)
        this.handleHasDrivenManyPassengersChange = this.handleHasDrivenManyPassengersChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.getDrivers()
    }
    componentDidUpdate() {
        if (this.state.newChange) this.getDrivers()
    }

    getDrivers() {
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
    handleDriversLicenseNumberChange(event) {
        this.setState({
            driver: Object.assign(
                {}, 
                this.state.driver,
                {
                  driversLicenseNumber: event.target.value  
                }
            )
        })
    }
    handleCarMakeAndModelChange(event) {
        this.setState({
            driver: Object.assign(
                {}, 
                this.state.driver,
                {
                  carMakeAndModel: event.target.value  
                }
            )
        })
    }
    handleCarLicensePlateNumberChange(event) {
        this.setState({
            driver: Object.assign(
                {}, 
                this.state.driver,
                {
                  carLicensePlateNumber: event.target.value  
                }
            )
        })
    }
    handleLatitudeChange(event) {
        this.setState({
            driver: Object.assign(
                {}, 
                this.state.driver,
                {
                  latitude: event.target.value  
                }
            )
        })
    }
    handleLongitudeChange(event) {
        this.setState({
            driver: Object.assign(
                {}, 
                this.state.driver,
                {
                  longitude: event.target.value  
                }
            )
        })
    }
    handleHasManyTripsChange(event) {
        this.setState({
            driver: Object.assign(
                {}, 
                this.state.driver,
                {
                  hasManyTrips: event.target.value  
                }
            )
        })
    }
    handleHasDrivenManyPassengersChange(event) {
        this.setState({
            driver: Object.assign(
                {}, 
                this.state.driver,
                {
                  hasDriverManyPassengers: event.target.value  
                }
            )
        })
    }    
    handleSubmit() {
        const driver = {
            driversLicenseNumber: this.state.driver.driversLicenseNumber,
            carMakeAndModel: this.state.driver.carMakeAndModel,
            carLicensePlateNumber: this.state.driver.carLicensePlateNumber,
            latitude: this.state.driver.latitude,
            longitude: this.state.driver.longitude,
            hasManyTrips: this.state.driver.hasManyTrips, 
            hasDriverManyPassengers: this.state.driver.hasDriverManyPassengers
        }
        console.log("driver", driver)
        const url = "http://localhost:3000/drivers"
        const driverResponse = fetch(url, {
           method: "POST", 
           body: JSON.stringify(driver) 
        }) .then((response) => {
            const json = response.json()
            return json
        }).then((json) => {
            this.setState({
              newChange: true  
            })
        })
        return driverResponse
    }
    render() {
        if (this.state.isLoaded) {
            return(
                <div>
                    <label> Drivers License Number: 
                        <input type="text" name="Driver's License Number" value={this.state.driver.driversLicenseNumber} onChange={this.handleDriversLicenseNumberChange} />
                    </label>
                    <label> Car Make and Model:
                        <input type="text" name="Car Make and Model" value={this.state.driver.carMakeAndModel} onChange={this.handleCarMakeAndModelChange} />
                    </label>
                    <label> License Plate Number:
                        <input type="text" name="Car License Plate Number" value={this.state.driver.carLicensePlateNumber} onChange={this.handleCarLicensePlateNumberChange} />
                    </label>
                    <label> Latitude:
                        <input type="text" name="Latitude" value={this.state.driver.latitude} onChange={this.handleLatitudeChange} />
                    </label>
                    <label> Longitude:
                        <input type="text" name="Longitude" value={this.state.driver.longitude} onChange={this.handleLongitudeChange} />
                    </label>
                    <label> Has Many Trips (Y/N):
                        <input type="text" name="Has Many Trips" value={this.state.driver.hasManyTrips} onChange={this.handleHasManyTripsChange} />
                    </label>
                    <label> Has Driven Many Passengers (Y/N):
                        <input type="text" name="Has Driven Many Passengers" value={this.state.driver.hasDrivenManyPassengers} onChange={this.handleHasDrivenManyPassengersChange} />
                    </label>
                    <button onClick={this.handleSubmit}> create driver </button>
                    {this.state.drivers.map((driver) => <div>{driver.driversLicenseNumber}</div>)}
                </div>
            ) 
        }
        return(
            <div>Loading...</div>
        )
    }
}
export default DriverIndex