import React from "react"
import "./css/services.css"

class Services extends React.Component {
    constructor(){
        super()
    }


    render(){
        return (
            <div className="services">
                <h1>SERVICES</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="cards">
                    <div className="ecommerce">
                        <h2>E-Commerce</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Minima maxime quam architecto quo inventore harum ex magni, 
                            dicta impedit.</p>
                    </div>
                    <div className="responsive">
                        <h2>Responsive Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Minima maxime quam architecto quo inventore harum ex magni, 
                            dicta impedit.</p>
                    </div>
                    <div className="security">
                        <h2>Web Security</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Minima maxime quam architecto quo inventore harum ex magni, 
                            dicta impedit.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services