import React from "react"
class ReviewIndex extends React.Component{
    constructor() {
        super()
        this.state = {
            Review: [], 
            isLoaded: false,
            review: {
                star: "", 
                rideID: "", 
                isDriver: "",
            }, 
            newChange: false
        }
        this.handleStarChange = this.handleStarChange.bind(this)
        this.handleRideIDChange = this.handleRideIDChange.bind(this)
        this.handleIsDriverChange = this.handleIsDriverChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.getReview()
    }
    componentDidUpdate() {
        if (this.state.newChange) this.getReview()
    }

    getReview() {
        fetch('http://localhost:3000/review')
        .then((response) => {
            console.log("response", response)
            return response.json()
        })
        .catch((error) => {
            console.log("error", error);
        })
        .then((review) => {
            console.log("review", review)
            setTimeout(()=> {
                this.setState({
                    review, 
                    isLoaded: true,
                    newChange: false
                }) 
            },2000)
        });  
      
    }
    handleStarChange(event) {
        this.setState({
            review: Object.assign(
                {}, 
                this.state.review,
                {
                  star: event.target.value  
                }
            )
        })
    }
    handleRideIDChange(event) {
        this.setState({
            review: Object.assign(
                {}, 
                this.state.review,
                {
                  rideID: event.target.value  
                }
            )
        })
    }    
    handleIsDriverChange(event) {
        this.setState({
            review: Object.assign(
                {}, 
                this.state.review,
                {
                  rideID: event.target.value  
                }
            )
        })
    }    
    handleSubmit() {
        const review = {
            star: this.state.review.star, 
            rideID: this.state.review.rideID,
            isDriver: this.state.review.isDriver
        }
        console.log("review", review)
        const url = "http://localhost:3000/review"
        const userResponse = fetch(url, {
           method: "POST", 
           star: JSON.stringify(review) 
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
                    <label> Star: 
                        <input type="text" name="star" value={this.state.review.star} onChange={this.handleStarChange} />
                    </label>
                    <label> Ride ID: 
                        <input type="text" name="Ride ID" value={this.state.review.rideID} onChange={this.handleRideIDChange} />
                    </label>
                    <label> Is Driver (Y/N):
                        <input type="text" name="Is Driver" value={this.state.review.isDriver} onChange={this.handleIsDriverChange} />
                    </label>
                    <button onClick={this.handleSubmit}> create review </button>
                    {this.state.review.map((review) => <div>{review.star}</div>)}
                </div>
            ) 
        }
        return(
            <div>Loading...</div>
        )
    }
}
export default ReviewIndex