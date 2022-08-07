import React from 'react'

const Academic = (props) => {
  return (
    <academic>
        <div className="academic_box_card">
          <div className="academic_award">{props.award}</div>
          <div className="academic_name">{props.name}</div>
        </div>
    </academic>
  )
}

export default Academic