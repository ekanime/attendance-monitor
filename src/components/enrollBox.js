import React, {Component} from 'react'
import Modal from 'react-modal'


class EnrollBox extends Component {
    constructor(){
        super();
        this.state={
            isActive:false

        }
    }
    componentWillMount(){
        Modal.setAppElement('body');
    }
    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })

    }
    render(){
        return(
            <section >
                <button className = "enroll-box-button" onClick={this.toggleModal}> ENROLL </button>
                <Modal isOpen={this.state.isActive}
                        onRequestClose = {this.toggleModal}
                        className ="Modal"
                        >
                    <h4   className="enroll-box-close"onClick={this.toggleModal}>X</h4>
                     <div>
                             <main className="pa4 black-80">
                                 <div className="measure">
                                     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                     <legend className="f2 fw6 ph0 mh0 tc">ENROLL</legend>
                                     <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="email-address">NAME</label>
                                        <input 
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="name" 
                                        name="name"  
                                        id="name"
                                        />
                                    </div>
                                    <div className="mv3">
                                        <label className="db fw6 lh-copy f6" htmlFor="password">STUDENT ID</label>
                                        <input 
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="student-id" 
                                        name="student-id"  
                                        id="student-id"
                                        />
                                    </div>
                                    </fieldset>
                                    <div className="button-signin">
                                        <button className = "ph3 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib"> ENROLL </button>
                                    </div>
                                </div>
                            </main>
                    </div>
                </Modal>
            </section>
            
        )
    }
}

export default EnrollBox;