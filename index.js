var React = require('react')
var ReactDOM = require('react-dom')

var data = {
  name: 'mix',
  people: [
    { name: 'mix', age: 32},
    { name: 'mikey', age: 24},
    { name: 'piet', age: 33}
  ]
}

function App (props) {
  return (
    <div>
      {Heading(props)}
      {Friends(props)}
    </div>
  )
}

function Heading (props) {
  return (
    <h1>Hello {props.name}</h1>
  )
}

function Friends (props) {
  var people = props.people

  return ( 
    <div>
      <h2>Your friends</h2>
      {people.map(function(individual) {
        return (
          <div>
            {individual.name} who is {individual.age}
          </div>
        )
      })}
    </div>
  )
}

var view = App(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

