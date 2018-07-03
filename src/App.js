import React, {Component} from 'react';
import Button from './components/button';
import EnrollPage from './components/enrollPage'
import DataPage from './components/dataPage'



class App extends Component{

    render(){
        return(
            <div>
                <DataPage/>
            </div>    
        )
    }


}

export default App;