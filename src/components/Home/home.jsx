import React from 'react'
import "./home.css"

const Home = () => {
  return (

    <home id="Home">

<div className="container">
        <div className="content">

          <div className="dev_title">
            <div className="dev_title_first">
              <span>B </span>
              <span>O </span>
              <span>O </span>
              <span>M </span>
            </div>
            <div className="dev_title_last">
              <span>C </span>
              <span>H </span>
              <span>A </span>
              <span>W </span>
              <span>I </span>
              <span>T </span>
            </div>
          </div>

          <div class="dev">
            <div class="dev__container">
              <p class="dev__container__text">
                I'm a 
              </p>
              
              <ul class="dev__container__list">
                <li class="dev__container__list__item"> Student !</li>
                <li class="dev__container__list__item"> Civil Engineer !</li>
                <li class="dev__container__list__item"> Data Scientist !</li>
                <li class="dev__container__list__item"> Developer !</li>
              </ul>
              
            </div>
          </div>

          <div className="dev_terminal">
            <div id="terminal-1" className="terminal">
              <span className="standard">BoomChawit@current:~ </span>
              <span className="type">NLP Intern, Big Data Team, TDRI</span>
              <span className="blink">_</span>
            </div>
          </div>

        </div>
      </div>
      
    </home>
  )
}

export default Home