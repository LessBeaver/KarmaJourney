import React from 'react';
import belier from './zodiacSigns/belier.png';
import cancer from './zodiacSigns/cancer.png';
import capricorne from './zodiacSigns/capricorne.png';
import gemeaux from './zodiacSigns/gemeaux.png';
import lion from './zodiacSigns/lion.png';
import poisson from './zodiacSigns/poisson.png';
import sagittaire from './zodiacSigns/sagittaire.png';
import scorpion from './zodiacSigns/scorpion.png';
import taureau from './zodiacSigns/taureau.png';
import verseau from './zodiacSigns/verseau.png';
import vierge from './zodiacSigns/vierge.png';
import balance from './zodiacSigns/balance.png';
// import sealBg from './bgQuestions/sealBg.jpg';
// import sharkBg from './bgQuestions/sharkBg.jpg';

const quizQuestions = [
    {
        question: "When you eat a pizza, do you prefere :",
        url: "./bgQuestions/sealBg.jpg",
        answers: [
            {
                type: "Pos",
                content: "Tomato based"
            },
            {
                type: "Neg",
                content: "Cream based"
            },
            {
              type: "Positive",
              content: "I hate pizza"
          },
          {
              type: "Negative",
              content: "Nutella base"
          }
        ]
    },
    {
        question: "What is you favorite animal ?",
        url: "./bgQuestions/sharkBg.jpg",
        answers: [
            {
                type: "Neg",
                content: "Giraffe"
            },
            {
                type: "Pos",
                content: "Beaver"
            },
            {
<<<<<<< HEAD
                type: "Positif",
                content: "Pengiun"
            },
            {
                type: "Negatif",
=======
                type: "Positive",
                content: "Pengiun"
            },
            {
                type: "Negative",
>>>>>>> aaea41d3faad2f182cc76094564c62e015d5c97c
                content: "Kagaroo"
            }
        ]
    },
    {
        question: "Where do you see yourself in a few weeks ?",
        answers: [
            {
                type: "Positif",
                content: "Rome"
            },
            {
                type: "Positive",
                content: "Bora Bora"
            },
            {
                type: "Negatif",
                content: "Home, obviously"
            },
            {
                type: "Negative",
                content: "Six feet under"
            }
        ]
    },
    {
        question: "How do you want to work :",
        answers: [
            {
                type: "Positif",
                content: "In a cool start-up"
            },
            {
                type: "Neg",
                content: "In a big international company"
            },
            {
                type: "Positive",
                content: "As a nomad digital"
            },
            {
<<<<<<< HEAD
                type: "Negatif",
=======
                type: "Negative",
>>>>>>> aaea41d3faad2f182cc76094564c62e015d5c97c
                content: "To what ?"
            }
        ]
    },
    {
        question: "What kind of sport do you like ?",
        answers: [
            {
                type: "Pos",
                content: "Indoors sports"
            },
            {
                type: "Negatif",
                content: "Outdoors sports"
            },
            {
<<<<<<< HEAD
                type: "Positif",
=======
                type: "Positive",
>>>>>>> aaea41d3faad2f182cc76094564c62e015d5c97c
                content: "In bed sports"
            },
            {
                type: "Negative",
                content: "None"
            }
        ]
    },
    {
        question: "What is you favorite cocktail ?",
        answers: [
            {
                type: "Positif",
                content: "Caipirinha"
            },
            {
                type: "Neg",
                content: "Dry martini"
            },
            {
                type: "Positive",
                content: "Bloody mary"
            },
            {
<<<<<<< HEAD
                type: "Negatif",
=======
                type: "Negative",
>>>>>>> aaea41d3faad2f182cc76094564c62e015d5c97c
                content: "Virgin Pina Colada"
            }
        ]
    },
    {
        question: "What is you favorite element ?",
        answers: [
            {
                type: "Pos",
                content: "Earth"
            },
            {
                type: "Neg",
                content: "Fire"
            },
            {
                type: "Positif",
                content: "Water"
            },
            {
<<<<<<< HEAD
                type: "Neg",
                content: <img src={cancer} alt="blabla" />
            },
            {
                type: "Pos",
                content: <img src={lion} alt="blabla" />
            },
            {
                type: "Neg",
                content: <img src={vierge} alt="blabla" />
            },
            {
                type: "Pos",
                content: <img src={balance} alt="blabla" />
            },
            {
                type: "Neg",
                content: <img src={scorpion} alt="blabla" />
            },
            {
                type: "Pos",
                content: <img src={sagittaire} alt="blabla" />
            },
            {
                type: "Neg",
                content: <img src={capricorne} alt="blabla" />
            },
            {
                type: "Pos",
                content: <img src={verseau} alt="blabla" />
            },
            {
                type: "Neg",
                content: <img src={poisson} alt="blabla" />
=======
                type: "Negatif",
                content: "Air"
>>>>>>> aaea41d3faad2f182cc76094564c62e015d5c97c
            }
        ]
    }
  ];
  
  export default quizQuestions;