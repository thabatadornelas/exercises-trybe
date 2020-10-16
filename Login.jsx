import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { saveUserEmail } from '../actions/index';

const Login = ({ saveMail }) => {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [email, setEmail] = useState('');

  const checkEmail = (value) => {
    setEmail(value);
    const regexEmail = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;
    return value.match(regexEmail) ? setValidEmail(true) : setValidEmail(false);
  };

  const checkPassword = (pass) => (
    pass.length > 6 ? setValidPassword(true) : setValidPassword(false)
  );

  const handleLogin = () => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    saveMail(email);
  };

  return (
    <div className="container">
      Login
      <input
        type="email"
        data-testid="email-input"
        placeholder="Email"
        onChange={(event) => checkEmail(event.target.value)}
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Senha"
        onChange={(event) => checkPassword(event.target.value)}
      />
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={!validEmail || !validPassword}
          onClick={() => handleLogin()}
        >
          Entrar
        </button>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveMail: (payload) => dispatch(saveUserEmail(payload)),
});

Login.propTypes = {
  saveMail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
