var React = require('react')

module.exports = People

// with React, later all templates (components) have to have a Capital letter

function People (props) {
  return (
    <div>
      Here are all the people: 
      {props.people.map(function(personData){
        return (
          <Person person={personData} />
          Person({ person: personData })
        )
      })}
    </div>
  ) 
}

// { name:   age:  }
function Person (props) {
  console.log(props)
  return (
    <div>{props.name} is {props.age} years old</div> 
  )
}

