import React from 'react'
import "./civil.css"
// import Competition from "./competition"

const Civil = () => {
  return (
    
    <civil id="Civil">

      <div className="container">

        <div className="content">

            <h1>
                <span>C</span>ivil Engineering
            </h1>

            <h2>Research Thesis</h2>

            <div className="civil_column">

                <div className="civil_box">
                    <div className="civil_name">
                        Drive-by Inspection: Fourier Neural Operator for Damage Detection (In progress)
                    </div>
                    <div className="civil_skill">
                        SHM, FNO
                    </div>
                    <div className="civil_prof">
                        Professor Kim, Dr Jiaji Wang
                    </div>
                    <div className="civil_period">
                        August 2022 - Present
                    </div>
                </div>

                <div className="civil_box">
                    <div className="civil_name">
                        Machine Learnings in Damage Detection (In progress)
                    </div>
                    <div className="civil_skill">
                        VBI, MLP, SVM, DT
                    </div>
                    <div className="civil_prof">
                        Professor Kim
                    </div>
                    <div className="civil_period">
                        June 2022 - Present
                    </div>
                </div>
            </div>

            <h2>Experiences</h2>

            <div className="civil_column">

                <div className="civil_box">
                    <div className="civil_name">
                        Civil Engineer Intern
                    </div>
                    <div className="civil_skill">
                        
                    </div>
                    <div className="civil_prof">
                        NiX Co., Ltd.
                    </div>
                    <div className="civil_period">
                        Aug - Sep 2022
                    </div>
                </div>

                <div className="civil_box">
                    <div className="civil_name">
                        Civil Engineer Intern (Hydro)
                    </div>
                    <div className="civil_skill">
                        Simulation Model of Inflow and Outflow at Phru- Toh Daeng, Narathiwat
                    </div>
                    <div className="civil_prof">
                       Asst. Prof. Payom Ratanamanee, Prince of Songkhla University
                    </div>
                    <div className="civil_period">
                        Mar - Apr 2020
                    </div>
                </div>

            </div>

            <h2>Skils</h2>

            <div className="civil_column">

                <div className="civil_box">
                    <div className="civil_name">
                        Civil Engineering Tools
                    </div>
                    <div className="civil_skill">
                        <div className="civil_subskills">
                            <li> QGIS </li>
                            <li> AutoCAD </li>
                            <li> SketchUp </li>
                            <li> Microsoft Excel </li>
                            <li> Rhinos </li>
                            <li> V-ray </li>
                            <li> MIKE11</li>
                        </div>
                    </div>
                </div>

                <div className="civil_box">
                    <div className="civil_name">
                        Civil Engineering Tools
                    </div>
                    <div className="civil_skill">
                        <div className="civil_subskills">
                            <li> MATLAB </li>
                            <li> Python </li>
                            <li> Fortran </li>
                            <li> R Language</li>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Competitons and Awards</h2>

            <div className="civil_compete_column">

                <div className="civil_box2">
                    <div className="civil_compete_box">
                        <div className="compete_prize">
                            First Place Award
                        </div>
                        <div className="compete_name">
                            International Student Challenge, A Tribe Called Transportation
                        </div>
                    </div>
                    {/* < Competition 
                    award = "The First Place Award"
                    name = "International Student Challenge, A Tribe Called Transportation"
                    highlight ="集い Tsudoi is a decentralisation of university facilities with automated robots to deliver items from central production."
                    description = "The main aims are to reduce unnecessary transportation time within the campus, to mitigate the overcrowding at main cafeterias, library and cooperative shops, and to improve university landscape by renovating the unused spaces. My responsibility in this project was on the technical part that finds the feasibility of technological applications, the presentation with the support of 3D generative models, and the stakeholder analysis. Our project with the team of 5 won the first place in the International Student Challenge under A Tribe Called Transportation (Online) where we had opportunities to talk to the people with similar interests and great ideas around the world. A tiring but fun thing was that we had to make a presentation at around 2 A.M. because of the differences in time zone."
                    /> */}
                </div>

                <div className="civil_box2">
                    <div className="civil_compete_box"> 
                        <div className="compete_prize">
                            University Representative
                        </div>
                        <div className="compete_name">
                            Hult Prize, Kyoto University (Management and Business)
                        </div>
                    </div>
                </div>

                <div className="civil_box2">
                    <div className="civil_compete_box">
                        <div className="compete_prize">
                            Participation
                        </div>
                        <div className="compete_name">
                            Work From Home Competition 2020 (Architecture)
                        </div>
                    </div>
                </div>

                <div className="civil_box2">
                    <div className="civil_compete_box">
                        <div className="compete_prize">
                            Participation
                        </div>
                        <div className="compete_name">
                            Study-Kyoto Movie Contest 2021 (Video Edition)
                        </div>
                    </div>
                </div>

            </div>

        </div>

      </div>

    </civil>

  )
}

export default Civil