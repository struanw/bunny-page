var React = require('react')

function helloTemplate (props) {
  return (
  <div>
  {props.people.map(function(person){
    return (
      <div> {person.name} is {person.age}</div>
    )
  })}
  </div>
)}


module.exports = helloTemplate
