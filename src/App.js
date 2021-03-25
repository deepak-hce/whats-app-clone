
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faCircleNotch, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <div className="top-header"></div>
      <div className="main-box">
        <div className="side-nav">
          <div className="header">
            <div className="profile-pic">
              <img src={process.env.PUBLIC_URL + 'assets/img/profile.png'} alt="Profile" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faCircleNotch} color="grey" size="lg" />
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
  );
}

export default App;
