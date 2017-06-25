/**
 * Created by wathmal on 6/11/16.
 */

var site = {
  title: "wathmal's",
  tagline: "howdy, here lives ..",
  // only 3 allows in index.jade
  typedtext: ["a student", "an undergrad", "just another human"],
  social: {
    twitter: "https://twitter.com/wathmal",
    github: "https://github.com/wathmal",
    linkedin: "https://lk.linkedin.com/in/wathmal",
    facebook: "https://facebook.com/wathmal.iloveyou",
    phone: "tel:+94-71-9968892"
  },
  blog: "http://wathmal.me/blog/",
  // use your own screens hot server or use manet.herokuapp.com (if u don't have a screenshot API)
  blogScreenShotURL: "https://manet.herokuapp.com/?url=wathmal.me/blog/&width=480&height=800&clipRect=0,0,542,850",
  //blogScreenShotURL: "http://ec2.wathmal.me/api/manet/?url=wathmal.me/blog&width=480&height=800&clipRect=0,0,542,850",
  name: "SASITHA WATHMAL SONNADARA",
  email: "sasithawathmal@gmail.com",
  website: {
    url: "http://wathmal.me",
    name: "wathmal.me"
  },

  projects: [

    {
      id: 6,
      title: "a personal digital assistant app to track day to day events",
      image: "project-006.png",
      technologies: ["android", "sqlite"],
      url: "#"
    },
    {
      id: 7,
      title: "a social networking website with basic functionalities",
      image: "project-007.png",
      technologies: ["symfony 2", "mysql", "bootstrap"],
      url: "#"
    },
    {
      id: 8,
      title: "an image processing ide with advanced processing functionalities",
      image: "project-008.png",
      technologies: ["c++", "qt 5"],
      url: "#"
    },
    {
      id: 9,
      title: "smart shoe to measure steps / speed / distance, ran / walked",
      image: "project-009.png",
      technologies: ["arduino", "android"],
      url: "#"
    },
    {
      id: 10,
      title: "placing the eye on elephant (aliyata asa thabima) awrudu game @ cake labs",
      image: "project-010.png",
      technologies: ["android", "nodejs"],
      url: "#"
    },


  ],
  repos:[
    {
      user: 'wathmal',
      name: 'react-es6-webpack-boilerplate'
    },
    {
      user: 'wathmal',
      name: 'sinhala-ocr'
    },
    {
      user: 'wathmal',
      name: 'sms-gateway'
    },
    {
      user: 'wathmal',
      name: 'my-portfolio'
    },
    {
      user: 'wathmal',
      name: 'eye-elephant'
    },
    {
      user: 'wathmal',
      name: 'pda-android'
    }
  ],

  meta: [
    {name: "description", content: "sasitha wathmal sonnadara's personal web space."},
    {name: "keywords", content: "wathmal, sasitha wathmal, sonnadara, sasitha sonnadara, sasitha wathmal sonnadara, cse"},
    {name: "author", content: "sasitha sonnadara"}
  ]

};

module.exports = site;
