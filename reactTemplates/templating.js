var React = require('react')

module.exports = {
  helloTemplate:helloTemplate,
  weatherTemplate:weatherTemplate
}

function helloTemplate (props) {
  return (
    <div>
    {props.people.map(
      function(person){
        return (
          <p>Hi I am {person.name} and am {person.age}</p>
        )
      })
    }
  </div>
  )
}


function weatherTemplate (forecast) {
  return (
    <div>
      <h1>This weeks weather forecast:</h1>
      {forecast.thisWeek.map(
        function(day){
          return (
            <p><span className='day'>{day.day}'s</span> weather is going to be <span className='weather'>{day.weather}</span></p>
          )
        })
      }
    </div>
  )
}
