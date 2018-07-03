import React, {Component} from 'react'
import Button from './button'
import Box from './box'

class EnrollPage extends Component{
    render(){
        return(
        
            <div className="pa4">
                <h1 className="f2 fw6 ph0 mh0 tc">ATTENDANCE MONITOR</h1>
                <Box />
                <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black"> UPLOAD </button>
                <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black"> ENROLL</button>
                <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black"> BEGIN </button>
            </div>
        )
    }
}

export default EnrollPage;