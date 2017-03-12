var React = require('react')
var ReactDOM = require('react-dom')


function helloTemplate (props) {
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

var data = {
  people: [
    { name: 'mix', age: 32},
    { name: 'mikey', age: 24},
    { name: 'piet', age: 33}
  ]
}

var view = helloTemplate(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

