import React from 'react'
import Box from './box'
import EnrollBox from './enrollBox';
import {Link} from 'react-router-dom'
import Particles from 'react-particles-js';


class EnrollPage extends React.Component{
    render(){
        return(
            <div className="pa3">
            <Particles className="particles"
            params={particlesOptions}/>
                <Link className ="link" to='/login'>
                    <button className="enrollPageButtons ph3 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib">
                        Log Out
                    </button>
                </Link>
                <h1 className="tc header-label">ATTENDANCE MONITOR</h1>
                <Box />
                <div className= "enrollPageButtonsDiv">
                    <button 
                        className="enrollPageButtons ph3 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    > 
                            UPLOAD 
                    </button>
                   <div className="enrollPageButtons ph3 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib"><EnrollBox /></div>       
                    <Link className ="link" to='/data'>
                        <button className="enrollPageButtons ph4 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib"> 
                                BEGIN 
                        </button>
                    </Link>
                
                </div>
                
                
            </div>
        )
    }
}

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


export default EnrollPage;