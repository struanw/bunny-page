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
      {Heading({ name: props.name })}
      {Friends({ people: props.people })}
    </div>
  )
}

function Heading (props) {
  var name = props.name

  return (
    <h1>Hello {name}</h1>
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

