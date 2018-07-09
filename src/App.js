import React, {Component} from 'react';
import EnrollPage from './components/enrollPage'
import DataPage from './components/dataPage'
import LoginPage from './components/loginPage';
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

class App extends Component{
    constructor(){
        super();
        this.state={
            route:'loginPage'
        }
    }

    render(){
        return(
            <div className="pa4 App">
                <Particles className="particles"
                    params={particlesOptions}/> 
                {
                    this.state.route === 'loginPage' 
                    ?<LoginPage onLogIn={this.onLogIn}/>
                    :this.state.route === 'enrollPage'
                    ?<EnrollPage onBegin = {this.onBegin}/>
                    :<DataPage />
                }
                
            </div>    
        )
    }


}

export default App;