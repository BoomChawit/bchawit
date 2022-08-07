import React from 'react'
import "./education.css"
import Academic from "./academic"

import { useState } from "react"

const Education = () => {
  const [activeEdu, setActiveEdu] = useState("undergraduate")

  return (
    
    <education id="Education">

        <div className="container">

            <div className="content">

              <h1>
                  <span>E</span>ducation
              </h1>

              <h2>Official Educations</h2>

              <div className="education">

                <div className = "education_box" >
                  <button onClick={()=> setActiveEdu("undergraduate")} className={ activeEdu === "undergraduate" ? "education_level active": "education_level"}> Undergraduate </button>

                  <div className={ activeEdu === "undergraduate" ? "active": ""} > 
                    
                    <h3>B.Eng in Civil Engineering <span className="education_place"> Kyoto University (MEXT)</span></h3>
                    <h5>Apr 2019 – Present</h5>

                    <span className="education_detail">
                      <ul>
                        <li>Infrastructure Innovation Engineering Laboratory, Professor Chul-Woo Kim </li>
                        <li>Obtained A+ in 4 Data and AI courses (Basic Data Analysis, 
                        Data Analysis II, Probability and Statistical Analysis and Exercises and Fundamental of AI) </li>
                      </ul>
                    </span>
                  </div>
                </div>

                <div className = "education_box" >
                  <button onClick={()=> setActiveEdu("highschool")} className={ activeEdu === "highschool" ? "education_level active": "education_level"}> High School </button>

                  <div className={ activeEdu === "highschool" ? "active": ""} > 
                    <h3>STEM <span className="education_place"> Kamnoetvidya Science Academy</span></h3>
                    <h5>May 2016 – Mar 2019</h5>
                    <span className="education_detail">
                      <ul>
                        <li>One of 72 selected out of 7000 applicants to study STEM in
                        Thailand's leading science school on a full scholarship. Conducted 4 research projects </li>
                        <li>SAT II Physics: 800 Math level 2: 800 Chemistry: 790, IELTS Overall band: 7</li>
                      </ul>
                    </span>
                    </div>
                </div>

                <div className = "education_box" >
                  <button onClick={()=> setActiveEdu("middleschool")} className={ activeEdu === "middleschool" ? "education_level active": "education_level"}> Middle School </button>

                  <div className={ activeEdu === "middleschool" ? "active": ""} > 
                    <h3>Science Math English Program<span className="education_place"> Saengthong Vittaya School</span> </h3>
                    <h5>May 2013 – Mar 2016</h5>
                    <span className="education_detail">
                      <ul>
                        <li>The second place in the admissions exam</li>
                        <li>Salesian’s Science, Math and English program for gifted students </li>
                      </ul>
                    </span>
                    </div>
                </div>
                
              </div>

              <h2>Academic Achievements</h2>

              <div className="academic">

                <div className="academic_box">
                  <div className="academic_image1"></div>
                  < Academic 
                    award = "The First Place"
                    name = "International Student Challenge, A Tribe Called Transportation"
                    />
                </div>

                <div className="academic_box">
                  <div className="academic_image5"></div>
                  < Academic 
                    award = "The First Place"
                    name = "TSAJ Festival Idea Competition"
                    />
                </div>

                <div className="academic_box">
                  <div className="academic_image2"></div>
                  < Academic 
                    award = "The Best of Physical Science"
                    name = "Prime Minister’s Science Award"
                    />
                </div>
                
                <div className="academic_box">
                  <div className="academic_image3"></div>
                    < Academic 
                      award = "Reach Oxford scholarship on a conditional offer"
                      name = "Engineering Science at St. Peter’s college, University of Oxford"
                    />
                </div>

                <div className="academic_box">
                  <div className="academic_image4"></div>
                  < Academic 
                    award = "Honourable Mention, Special Award"
                    name = "Intel International Science and Engineering Fair 2019"
                    />
                </div>

                <div className="academic_box">
                  <div className="academic_image6"></div>
                  < Academic 
                    award = "Best Presentation Award"
                    name = "ICESB and ICABT 2018"
                  />
                </div>

              </div>
              
            </div>

        </div>

    </education>

  )
}

export default Education