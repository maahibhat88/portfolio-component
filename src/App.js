import React from 'react';
import './App.scss';

function App(props) {
    const demoData = {
      profileImage : `https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg`,
      name: "Muzaffar Ahmad",
      nickname: 'Maahi Bhat',
      profile: "Software Engineer",
      email: "demo@demomail.com",
      phone: "(+91)-9876543210",
      year: 2020,
      company: "Bajaj Capital Ltd",
      companyUrl: "https://www.xyz.com",
      topSkills: ['NodeJs','ReactJs','AWS'],
      intro : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tellus cursus, scelerisque erat at, pharetra lacus. Maecenas elementum sem id magna aliquet, gravida tempor enim lobortis. Fusce suscipit tincidunt erat, sit amet volutpat elit fermentum a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tellus cursus, scelerisque erat at, pharetra lacus. Maecenas elementum sem id magna aliquet, gravida tempor enim lobortis. Fusce suscipit tincidunt erat, sit amet volutpat elit fermentum a.",
      skillsLevel :[
        { name : 'NodeJs', strength : '70' },
        { name : 'ReactJs', strength : '90' },
        { name : 'AWS', strength : '50' },
        { name : 'AngularJs', strength : '75' },
        { name : 'PHP', strength : '80' }
      ],
      projects: [
        {
          name: 'Project 1', 
          description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tellus cursus, scelerisque erat at, pharetra lacus. Maecenas elementum sem id magna aliquet, gravida tempor enim lobortis. Fusce suscipit tincidunt erat, sit amet volutpat elit fermentum a.",
          url: 'https://www.lipsum.com/feed',
        },
        {
          name: 'Project 2', 
          description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tellus cursus, scelerisque erat at, pharetra lacus. Maecenas elementum sem id magna aliquet, gravida tempor enim lobortis. Fusce suscipit tincidunt erat, sit amet volutpat elit fermentum a.",
          url: 'https://www.lipsum.com/feed',
        },
        {
          name: 'Project N', 
          description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tellus cursus, scelerisque erat at, pharetra lacus. Maecenas elementum sem id magna aliquet, gravida tempor enim lobortis. Fusce suscipit tincidunt erat, sit amet volutpat elit fermentum a.",
          url: 'https://www.lipsum.com/feed',
        }
      ],
      clients: [
        {
          name : 'Client 1',
          clientUrl : 'https://www.lipsum.com/feed'
        },
        {
          name : 'Client 2',
          clientUrl : 'https://www.lipsum.com/feed'
        }
      ],
      testimonials : [
        {
          name : 'Testimonial1',
          clientUrl : 'https://www.lipsum.com/feed'
        },
        {
          name : 'Testimonial2',
          clientUrl : 'https://www.lipsum.com/feed'
        },
        {
          name : 'Testimonial3',
          clientUrl : 'https://www.lipsum.com/feed'
        }
      ]
    }
  return (
    <div className="App">
      <div className="top-section">
        <div className="profile-image-outer">
          <div className="profile-image">
            <img src={demoData.profileImage} />
          </div>
        </div>
        <div className="profile-text">
            <h3 className="name"> { demoData.name } <span className="nick-name">{demoData.nickname ? `(${demoData.nickname})` : ''}</span> </h3>
            <h4 className="company" > { demoData.profile} at <a href={demoData.companyUrl} target="_blank">{ demoData.company }</a></h4>
            <h5 className="top-skills"> Top Skills: 
                  { demoData.topSkills.map((data,i) => {
                     return(
                       <span key={i}>{ demoData.topSkills.length === i+1 ? data : ` ${data}, `  }</span>
                     );
                    })
                  }
            </h5>
        </div>
      </div>
      <div className="mid-section">
        <div className="mid-grid">
          <div className="intro">
            <p>
                { demoData.intro }
            </p>
          </div>
          <div className="skills">
            <ul>
              {
                 Object.keys(demoData.skillsLevel).map((key)=>{
                  return(
                      <li>
                        <span className="li">{demoData.skillsLevel[key].name}</span> 
                        <div id="progress">
                            <span id="percent">{demoData.skillsLevel[key].strength}%</span>
                            <div id="bar" style={{width : `${demoData.skillsLevel[key].strength}%`}}></div>
                        </div>
                      </li>
                    )
                  })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-section">
          <div className="contact-details">
            <h4>Contact Details</h4>
            <p>Email: <span> { demoData.email } </span></p>
            <p>Phone: <span> { demoData.phone } </span></p>
          </div>
          <div className="site-info">
              <p>&copy;{demoData.year} {demoData.name.toUpperCase()}. All rights reserved. </p>
          </div>
      </div>
    </div>
  );
}

export default App;
