import React from 'react'

const Competition = (props) => {
  return (
    <competition>
        <div className="competition_pop_card">
          <div className="competition_pop_award">{props.award}</div>
          <div className="competition_pop_name">{props.name}</div>
          <div className="competition_pop_highlight"> {props.highlight} </div>
          <div className="competition_pop_describe">{ props.description }</div>
        </div>
    </competition>
  )
}

export default Competition