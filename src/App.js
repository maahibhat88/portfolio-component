import React from 'react';
import './App.scss';

function App(props) {
  if(!props){
    return (
      <div>
        Please pass props to this component, else it will not work.
        Profile picture: props.picture
        Basic Details: props.name , props.profile, props.company, props.companyUrl, props.topSkills
      </div>
    );
  }
  return (
    <div className="App">
      <div className="top-section">
        <div className="profile-image-outer">
          <div className="profile-image">
            <img src={`https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg`} />
          </div>
        </div>
        <div className="profile-text">
            <h3>Muzaffar Ahmad <span>(Maahi)</span> </h3>
            <h4>Software Developer at <a href="">Bajaj Capital Ltd</a></h4>
            <h5>Top Skills: NodeJs, ReactJs, AWS</h5>
        </div>
      </div>
      <div className="mid-section">
        <div className="mid-grid">
          <div className="intro">
            <blockquote>

            </blockquote>
          </div>
          <div className="skills">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-section">
          <div className="contact-details">

          </div>
      </div>
    </div>
  );
}

export default App;
