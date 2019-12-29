import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import 'antd/dist/antd.css';
import './App.css';
import Slider from './Slider';

const App = (props) => {

  const recaptchaRef = React.createRef();

  return (
    <div className="App">
      <Slider />
      <div className="finger-container flex-row">
        <div className="left">
          <h4 className="title">Left Thumb</h4>
          <div className="image-wrapper">
            <img src={require('./finger-print.png')} alt="finger print left" />
          </div>
        </div>
        <div className="right">
          <h4 className="title">Right Thumb</h4>
          <div className="image-wrapper">
            <img src={require('./finger-print.png')} alt="finger print left" />
          </div>
        </div>
      </div>
      <div className="captcha-container">
        <form onSubmit={() => { recaptchaRef.current.execute(); }} >
          <ReCAPTCHA
            ref={recaptchaRef}
            theme="dark"
            sitekey="Your client site key"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
