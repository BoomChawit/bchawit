import React from 'react'

const Highschool = (props) => {
  return (
    <highschool>
        <div className="highschool_box">
            <div className="highschool_name"> {props.name} </div>
            <div className="highschool_topic">  

              { props.topic.map((a) => {
                return <span> { a } </span>
              })}

            </div>
            <div className="highschool_skills">  

              { props.skill.map((a) => {
                return <span> { a } &emsp; </span>
              })}
            
            </div>
        </div>
    </highschool>
  )
}

export default Highschool