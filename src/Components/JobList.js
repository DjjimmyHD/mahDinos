import React from 'react'
import Job from './Job'

const JobList = (props) => {
  console.log(props)
  const item = props.posts.map((post, index) => {
    return (<Job key={index} info={post} />)
  })
  return (
    <section>
      <h2>Job Listings</h2>
      <ul id='job-listings'>
        {item}
      </ul>
    </section>
  )
}
export default JobList
