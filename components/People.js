var React = require('react')


module.exports = People

function People (props) {
  return (
    <div>
    {props.people
      .filter(function(person){
        return person.age > 18
      })
        .map(function(person){
          return (<div> My name is {person.name} and I am over 18</div>)
      })}
      </div>
    )
}
