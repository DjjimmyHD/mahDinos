import React from 'react'

const JobForm = (josh) => {
  console.log(josh)
  return (
    <aside id='side-bar'>
      <h3>Add a Job</h3>
      <form className='job-form' onSubmit={josh.screeps}>
        <label>Title</label>
        <input type='text' name='title' />
        <label>Compensation</label>
        <input type='text' name='pay' />
        <label>Description</label>
        <textarea name='description' rows='8' cols='40' />
        <input type='submit' name='submit' value='Submit' />
      </form>
    </aside>
  )
}
export default JobForm
