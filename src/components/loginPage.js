import React from 'react';
import {Link} from 'react-router-dom'

class LoginPage extends React.Component{
  render(){
    return(
      <div className="pa4 pv7">
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 tc fw6 ph0 mh0">ATTENDANCE MONITOR</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
                  <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" 
                    name="email-address"  
                    id="email-address"
                    />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password"
                  />
                </div>
              </fieldset>
              <div className="button-signin">
              <Link className ="link" to='/enroll'>
                <button className="ph3 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib ">
                  Log In
                  </button> 
              </Link>
              </div>
            </div>
          </main>
        </article>
      </div>

    )
  }
}




export default LoginPage