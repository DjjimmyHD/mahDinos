const api = 'https://gclass-server.herokuapp.com'

fetch(api)
  .then(response => response.json())
  .then((response) => {
    var body = document.querySelector('body')

    console.log(body)
    response.data.map((student) => {
      console.log('i ran')
      return body.innerHTML(`<h1>${student.first}</h1>`)
    })
  })
