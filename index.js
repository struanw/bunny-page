var React = require('react')
var ReactDOM = require('react-dom')
var data = require("./animals-data.js")

function zooTemplate (props) {
  return (
    <div>
      <Heading name={props.name}/>
      <AnimalInfo details={props.details}/>
    </div>
  )
}

function Heading (props) {
  var name = props.name

  return (
    <div>
      <h1>{name}'s Zoo!</h1>
      <h2>List of animals:</h2>
    </div>
  )
}

function AnimalInfo (props) {
  var animalDetails = props.details

  return (
    <div>
      {animalDetails.map(function(individual){
        return (
          <li>
            {individual.name} is a {individual.species} and is {individual.age} years old.
          </li>
        )
      })}
    </div>
  )
}

var view = zooTemplate(data.animals)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
