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

function SayHello (props){
  return (
    <div>Hello {props.aName}</div>
  )
}




function helloFriends (props){
  var friends = props.people

  return(
    <div>
      {friends.map(function(individual){
        return (
          <div>
            {individual.name} who is {individual.age}
          </div>
        )
      })}
    </div>
  )
}


// function HiFriends (person) {
//   return(
//
//   )
// }
