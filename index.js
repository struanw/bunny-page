var React = require('react')
var ReactDOM = require('react-dom')
var data = require("./animals-data.js")
console.log(data);

function animalsTemplate (props) {
  return (
    <div>
      {props.details.map(function(detail){
        return (
          <div>{detail.name} is a {detail.species} and is {detail.age} years old.</div>
        )
      })}
    </div>
  )
}

// function Heading (props) {
//   return (
//     <h1>Animal Information!</h1>
//   )
// }
//
// function animalInfo (props) {
//   return (
//
//   )
// }

var view = animalsTemplate(data.animals)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
