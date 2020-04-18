import React from 'react';
import PropTypes from 'prop-types';

const login = ({ login, userInfo, history }) => {
  const isUserLoggedIn = localStorage.getItem("authToken")
  if (isUserLoggedIn) {
    history.push('/home');
  }
  return (
    <section className="ag-section ">
      <div className="container  center_div">
        <div className="row justify-content-center">
          <div className="login-form col-12 p-3 d-flex align-items-center justify-content-center">
            <div className="middle-card px-lg-5 py-lg-5 ">
              <div className="text-center mb-4">
                <strong> USER LOGIN </strong>
              </div>
              <form role="form">
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <input className="form-control" placeholder="Email" type="email" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <input className="form-control" placeholder="Password" type="password" />
                  </div>
                </div>
                <div className="text-center">
                  <a> <button type="button" className="btn btn-dark login-btn my-4 btn-lg" onClick={login}> Login </button></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

login.propTypes = {
  login: PropTypes.func.isRequired
}
export default login;
