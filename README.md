# React Portfolio Component

React Portfolio Component is a readymade component to create your portfolio.

## Installation

Use the package manager [npm](https://npmjs.com/) to install foobar.

```bash
npm install react-portfolio-component
```

## Usage

```react
import App from 'react-portfolio-component';
<App demo = {props}/>
```

## Props Data
```
props : {
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
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[ISC]()