import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Ishmael',
  lastName: 'Williams',
  initials: 'IW', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a recent KSU Comp Sci Grad',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      text: 'based in the McDonough, Georgia',
    },

    {
      emoji: '📧',  
      text: 'ishmaelwilliams777@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://drive.google.com/file/d/1Z5dsmzVmYgzq_em8c5JHuUykLh6llsC0/view', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    {
      link: 'https://github.com/Ishmael-Williams',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/ishmael-williams/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: "Hello! I'm Ishmael Williams. I'm a recent KSU computer science graduate, I enjoy learning new technologies and building simple web apps.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['JavaScript', 'Java', 'C++', 'HTML/CSS'],
    frameworks: [
      'React'
    ],
        cloudServices: ['Google Analytics', 'Heroku'],
    tools: [
      'Git',
      'npm',
    ],
  },
  hobbies: [
    {
      label: 'PC Building',
      emoji: '🖥️',
    },
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'Biking',
      emoji: '🚴',
    },,
    {
      label: 'Cooking',
      emoji: '🍳',
    }
  ],
  portfolio: [
    // // This is where your portfolio projects will be detailed
    // //   for the null ones, the button will not show up
    // {
    //   title: 'Dynrank.js - High-performance dynamic bar chart visualization library',
    //   live: null,
    //   source: 'https://github.com/Andy8647/dynrank',
    //   image: 'https://i.ibb.co/HFkMKtH/02.jpg',
    // },
  ],
};
