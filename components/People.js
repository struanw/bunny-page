var React = require('react')

module.exports = People

// with React, later all templates (components) have to have a Capital letter

function People (props) {
  return (
    <div>
      {props.people.map(function(person){
        return (
          <div>{person.name} is {person.age} years old</div>
        )
      })}
    </div>
  ) 
}

