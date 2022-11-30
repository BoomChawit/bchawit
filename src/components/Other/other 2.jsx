import React from 'react'
import "./other.css"
import Highschool from "./highschool"

import { useState } from "react"

const Other = () => {
  const [activeAct, setActiveAct] = useState("tsaj")

  return (
    
    <other id="Other">

        <div className="container">

            <div className="content">

              <h1>
                  <span>E</span>xtracurricular Activities
              </h1>

              <h2>Experiences</h2>

              <div className="extraexp">

                <div className = "extraexp_box" >
                  <button onClick={()=> setActiveAct("ycp")} className={ activeAct === "ycp" ? "extraexp_place active": "extraexp_place"}> YCP</button>

                  <div className={ activeAct === "ycp" ? "extraexp_card active": "extraexp_card"} > 
                    
                    <h3>Consultant Intern </h3>
                    <h4>YCP Solidiance</h4>
                    <h5>Oct 2021 — Oct 2021</h5>

                    <span className="extraexp_detail">
                    (Early Termination)
                    
                      <ul>
                        <li>Project 1: Financial Portfolio management and research</li>
                        <li>Project 2: Thailand's Supply-chain of Logistic</li>
                      </ul>
                    </span>
                  </div>
                </div>

                <div className = "extraexp_box" >
                  <button onClick={()=> setActiveAct("tsaj")} className={ activeAct === "tsaj" ? "extraexp_place active": "extraexp_place"}> TSAJ </button>

                  <div className={ activeAct === "tsaj" ? "extraexp_card active": "extraexp_card"} > 
                    
                    <h3>Vice President</h3>
                    <h4>Thai Students' Association in Japan Under Royal Patronage, Japan</h4>
                    <h5>Apr 2020 — Mar 2021</h5>

                    <span className="extraexp_detail">
                      <ul>
                        <li>Oversaw all Thai students in the Kansai region to the central section </li>
                        <li>Connect Thai to international students association in Japan </li>
                      </ul>
                    </span>
                  </div>
                </div>

                <div className = "extraexp_box" >
                  <button onClick={()=> setActiveAct("wre")} className={ activeAct === "wre" ? "extraexp_place active": "extraexp_place"}> WTR</button>

                  <div className={ activeAct === "wre" ? "extraexp_card active": "extraexp_card"} > 
                    
                    <h3>The Charity Camp Director</h3>
                    <h4>The White Room Enterprise Co., Ltd</h4>
                    <h5>Apr 2017 — Mar 2020</h5>

                    <span className="extraexp_detail">
                      <ul>
                        <li>Organised 4 charitable camps for unprivileged students in Thailand</li>
                        <li>Designed and managed physics-based and mathematics-based activities. </li>
                      </ul>
                    </span>
                  </div>
                </div>
                
              </div>

              <h2>High School Research</h2>

              <div className="highschool_column">

                < Highschool
                name = "Innovative Seawater Electric Generator with Water Circulation to be an Alternative Energy in the First Perpetual Ship "
                topic = { ["Energy", "Electrochem", "Engineering" ] }
                skill = { ["SolidWork", "3D Printing", "Circuit" ]}
                />

                < Highschool
                name = "Green and Sustainable Energy for Tomorrow – From Oil to Iron Nanoparticles Embedded Carbon as Catalyst in Fuel Cell "
                topic = { ["Material", "Nanoparticle"] }
                skill = { [ "Solution Plasma Process", "SEM", "XRD", "CV", "Raman"]}
                />

                < Highschool
                name = "Effects of Storage Time and Temperature on Recovery Rate of Dehydrated Bacillus subtilis Spores for Degradation of Oil Spill "
                topic = { ["Microorganism", "Degradation"] }
                skill = { ["Cell culture", "Centrifuge" ]}
                />

                < Highschool
                name = "Plastic-eating Capability of Invertebrates Larvae: Tenebrio molitor and Galleria mellonella"
                topic = { ["Invertebrates", "Bio Statistics"] }
                skill = { ["Animal culture", "Excel" ]}
                />

                

              </div>

            </div>

        </div>

    </other>

  )
}

export default Other