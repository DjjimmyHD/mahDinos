import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import JobForm from './Components/JobForm'
import JobList from './Components/JobList'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      jobs: []
    }
  }
addSubmitEvent = (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const newJob = {
    title: formData.get('title'),
    pay: formData.get('pay'),
    description: formData.get('description'),
    interested: []
  }
  this.setState({jobs: [ newJob, ...this.state.jobs ]})
  console.log(newJob)
}

ToDoAThing = () => {
  console.log('i was clicked')
}

componentDidMount () {
  fetch('./listing.json')
    .then(response => response.json())
    .then(data => {
      // data.reverse()
      this.setState({ jobs: data })
    })
}

render () {
  return (
    <div>
      <Header clowns={this.ToDoAThing} />
      <main>
        <JobList posts={this.state.jobs} />
        <JobForm screeps={this.addSubmitEvent} />
      </main>
      <Footer />
    </div>
  )
}
}
ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker();
