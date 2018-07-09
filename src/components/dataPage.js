import React, {Component} from 'react';
import Box from './box'
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }


class DataPage extends React.Component{
    render(){
        return(
            <div>
                <Particles className="particles"
                        params={particlesOptions}/> 
                <h1 className="tc header-label">ATTENDANCE MONITOR</h1>
                <Box />
            <div> <label inline className ="tr ph7 rank-label-punctual">MOST PUNCTUAL</label>
                <label className ="tl ph7 rank-label-attendance">HIGHEST ATTENDANCE</label> </div>
                <div className="enrollPageButtonsDiv pv6">
                    <button className="enrollPageButtons ph4 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib">UPLOAD</button>
                    <button className="enrollPageButtons ph3 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib"> SHOW REPORT</button>
                    <Link className ="link" to='/enroll'>
                    <button className="enrollPageButtons ph5 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib">
                        END 
                    </button>
                    </Link>
                </div>  
            
            </div>
        )
    }
}

export default DataPage