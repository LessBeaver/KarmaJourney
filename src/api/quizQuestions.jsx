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

const quizQuestions = [
    {
        question: "When you eat a pizza, do you prefere :",
        answers: [
            {
                type: "Pos",
                content: "Tomato based"
            },
            {
                type: "Neg",
                content: "Cream based"
            }
        ]
    },
    {
        question: "What is you favorite animal ?",
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
                type: "Pos",
                content: "Pengiun"
            },
            {
                type: "Neg",
                content: "Kagaroo"
            }
        ]
    },
    {
        question: "Where do you see yourself in a few weeks ?",
        answers: [
            {
                type: "Pos",
                content: "Rome"
            },
            {
                type: "Pos",
                content: "Bora Bora"
            },
            {
                type: "Neg",
                content: "Home, obviously"
            },
            {
                type: "Neg",
                content: "Six feet under"
            }
        ]
    },
    {
        question: "How do you want to work :",
        answers: [
            {
                type: "Pos",
                content: "In a cool start-up"
            },
            {
                type: "Neg",
                content: "In a big international company"
            },
            {
                type: "Pos",
                content: "As a nomad digital"
            },
            {
                type: "Neg",
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
                type: "Neg",
                content: "Outdoors sports"
            },
            {
                type: "Pos",
                content: "In bed sports"
            },
            {
                type: "Neg",
                content: "None"
            }
        ]
    },
    {
        question: "What is you favorite cocktail ?",
        answers: [
            {
                type: "Pos",
                content: "Caipirinha"
            },
            {
                type: "Neg",
                content: "Dry martini"
            },
            {
                type: "Pos",
                content: "Bloody mary"
            },
            {
                type: "Neg",
                content: "Virgin Pina Colada"
            }
        ]
    },
    {
        question: "And finally, what is your Zodiac symbol ?",
        answers: [
            {
                type: "Pos",
                content: <img src={belier} alt="blabla" />
            },
            {
                type: "Neg",
                content: <img src={taureau} alt="blabla" />
            },
            {
                type: "Pos",
                content: <img src={gemeaux} alt="blabla" />
            },
            {
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
            }
        ]
    }
  ];
  
  export default quizQuestions;