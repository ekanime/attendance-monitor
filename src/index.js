import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'tachyons';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import EnrollPage from './components/enrollPage';
import DataPage from './components/dataPage';
import Popup from 'react-popup';
import Modal from 'react-modal';



ReactDOM.render(
    <div>
        <Popup
            className="mm-popup"
            btnClass="mm-popup__btn"
            closeBtn={true}
            closeHtml={null}
            defaultOk="Ok"
            defaultCancel="Cancel"
            wildClasses={false}
            escToClose={true} />
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={App} />
                <Route path='/enroll' component={EnrollPage} />
                <Route path='/data' component={DataPage} />
            </Switch>
        </BrowserRouter>
    </div>,
  document.getElementById('root')
)