import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';  

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    
        email: '',
        password: '',

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
                <div className="col-lg-7 login-image-bg"/>
                <div className="col-lg-5 login-second-half">
                  <div className="row">
                    <div className="col" style={{paddingTop: '3rem'}}>
                      <div className="p-5">
                        <div className="col mt-5 mb-5">
                        <img src="images/logo/airopay.svg" alt="loginImage" width="39.6px" />
                        </div>
                        <h2 className="mb-4 creadte-account-header"> Welcome Back!</h2>
                        <form className="needs-validation" noValidate onSubmit={this.handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label tag-label" >EMAIL</label>
                            <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} name="email" required />
                            <div className="invalid-feedback">
                              Email required!
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="password" className="form-label tag-label">PASSWORD</label>
                            <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} name="password" required />
                            <div className="invalid-feedback">
                              Password required!
                            </div>
                          </div>
                          <div class="forgot-label">Forgot Password?</div>
                          <button type="submit" className="btn btn-primary sign-up-button mt-3">Sign In</button>
                        </form>
                        <div className="mt-5 form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                          <label className="form-check-label remember-me-label" htmlFor="flexCheckChecked">
                            Remember me
                          </label>
                        </div>
                        <div className="text-center terms-section" style={{marginTop: '6rem', width: '80%'}}>
                            <p class="no-account-label">Don't have an account? <Link to={"/signup"}> Create One </Link>
                            </p>
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

export default Login;