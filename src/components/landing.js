import React from 'react'
import "./css/landing.css"
import asset23 from "./assets/asset 23.jpeg"
class Landing extends React.Component {
    constructor(){
        super()
    }




    render(){
        return (
            <div className="landing">
                <h1>Welcome To Our Studio!</h1>
                <h2>IT'S NICE TO MEET YOU</h2>
                <button>TELL ME MORE</button>
            </div>
        )
    }
}



export default Landing;