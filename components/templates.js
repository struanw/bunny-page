var React = require('react')

module.exports = {
  helloTemplate: helloTemplate,
  helloFriends: helloFriends
}

function helloTemplate (props) {
  return (
    <SayHello aName={props.name} />
  )
}

function SayHello (props) {
  return (
    <div>Hello {props.aName}</div>
  )
}




function helloFriends (props) {
  var friends = props.people

  return(
    <div>
      {friends.map(function(individual) {
        return (
          <HiFriend individual={individual} />
        )
      })}
    </div>
  )
}


function HiFriend (props) {
  // var name = props.individual.name
  // var age = props.individual.age
  var { name, age } = props.individual

  return(
    <div>
      {name} who is {age}
    </div>
  )
}
