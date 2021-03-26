import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faCircleNotch,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <>
      {loginStatus ? (
        <>
          <div className="top-header"></div>

          <div className="main-box">
            <div className="side-nav">
              <div className="header">
                <div className="profile-pic">
                  <img
                    src={process.env.PUBLIC_URL + "assets/img/profile.png"}
                    alt="Profile"
                  />
                </div>
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faCircleNotch}
                    color="grey"
                    size="lg"
                  />
                  <FontAwesomeIcon icon={faCommentAlt} color="grey" size="lg" />
                  <FontAwesomeIcon icon={faEllipsisV} color="grey" size="lg" />
                </div>
              </div>
            </div>
            <div className="chat-box">
              <div className="header">
                <h1> Chat Window </h1>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="top-header">
            <div className="logo">
              <h4> WHATSAPP WEB </h4>
            </div>
          </div>
          <div className="main-box">
            <div className="side-nav">
              <h2> To use WhatsApp on your computer: </h2>

              <ol>
                <li> Open WhatsApp on you phone </li>
                <li>
                  Tap <strong> Menu </strong> or <strong> Settings </strong> and
                  select <strong> WhatsApp Web </strong>
                </li>
                <li> Point your phone to this screen to capture the code </li>
              </ol>

              <a href="https://google.com"> Need help to get started? </a>
            </div>
            <div className="chat-box">
              <div className="qr-code">
                <img
                  src={process.env.PUBLIC_URL + "assets/img/qr.png"}
                  alt="Profile"
                />
                <div className="signed-checkbox">
                  <input type="checkbox" />
                  <label> Keep me signed in </label>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
