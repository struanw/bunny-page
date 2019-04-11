const React = require('react')
const ReactDOM = require('react-dom')

const data = { name: 'Bunny' }

function helloTemplate (props) {
  return (
    <div>{props.name}</div>
  )
}

const view = helloTemplate(data)

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
