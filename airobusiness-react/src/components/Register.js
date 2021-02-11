import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';  

class Register extends Component {

      constructor(props) {
        super(props);
        
        this.state = {
          
            name: '',
            email: '',
            password: '',
            confirmpassword: '',

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
      }


      handleSubmit(e) {
        // Form submission logic
        e.preventDefault();

        const form_data = new FormData(e.target);

        // Display the key/value pairs
        // for (var pair of form_data.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]); 
        // }


        axios.post(`https://jsonplaceholder.typicode.com/users`, form_data)
        .then( (response) => {
          
          if (response.data.Status === 'Invalid') 
          {
            alert('Invalid User');  
          }  
          else 
          {
              //history.push('/Dashboard') 
          } 
           
        })
        .catch( error => {
          console.log(error);
        });

      }

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }

      componentDidMount() {
        
      }

	render() {
		return (
            <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 register-image-bg"/>
            <div className="col-lg-5 register-second-half">
              <div className="row">
                <div className="col text-end">
                   <img src="images/logo/airopay.svg" alt="RegImage" class="register-logo-image" width="39.6px" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="p-5">
                    <h2 className="mb-5 create-account-header"> Create an Account</h2>
                    <form className="needs-validation" noValidate onSubmit={this.handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label tag-label">YOUR NAME</label>
                        <input type="email" className="form-control" value={this.state.name} onChange={this.handleChange} id="name" name="name" aria-describedby="name" required />
                        <div className="invalid-feedback">
                          Looks good!
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label tag-label">EMAIL</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} id="email" name="email" required />
                        <div className="invalid-feedback">
                          Email required!
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label tag-label">PASSWORD</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} id="password" name="password"  required />
                        <div className="invalid-feedback">
                          Password required!
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="confirmpassword" className="form-label tag-label">CONFIRM PASSWORD</label>
                        <input type="password" className="form-control" value={this.state.confirmpassword} onChange={this.handleChange} id="confirmpassword" name="confirmpassword" required />
                        <div className="invalid-feedback">
                          Confirm Password required!
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary sign-up-button mt-4">Sign Up</button>
                    </form>
                    <div className="mt-5 p-3 text-center terms-section" style={{width: '80%'}}>
                      <p>By clicking Sign Up, you agree to our <br />
                        <a href className="link-color"> Terms and conditions</a> and <a href className="link-color" style={{}}> Private Policy</a> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

		);
	}
}

export default Register;