import React from 'react'

const Job = (props) => {
  console.log(props.info.interested.length)
  return (
    <li>
      <h4>{props.info.title}</h4>
      <small>{props.info.pay}</small>
      <p>{props.info.description}</p>
      <small>{props.info.interested.length} dinos are interested in this job</small>
    </li>
  )
}
export default Job
