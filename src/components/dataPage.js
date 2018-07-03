import React, {Component} from 'react';
import Box from './box'


class DataPage extends Component {
    render(){
        return(
        <div className="pa4">
            <h1 className="f2 fw6 ph0 mh0 tc">ATTENDANCE MONITOR</h1>
            <Box />
           <div> <label inline className ="tr">MOST PUNCTUAL</label><br/>
            <label className ="tl">HIGHEST ATTENDANCE</label> </div>
            <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black"> UPLOAD </button>
            <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black"> DOWNLOAD REPORT</button>
            <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black"> END</button>
        </div>
        )
    }
}

export default DataPage