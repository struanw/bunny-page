var React = require('react')

module.exports = App


function App (props) {
  return (
    <div>
      {Greeting(props)}
      {Lessons(props)}
      {Tutors(props)}
    </div>
  )
}


function Greeting (props) {
  return (
    <section>
    <h1> Hello {props.name} how are you today?</h1>
    <p> The date is {props.date}</p>
    </section>
  )
}

function Lessons (props) {
  return (
    <section>
    <p> The lessons this week are: </p>
    <ul>
        {props.lessons.map(function (lessons) {
          return (
            <li>{lessons.lesson} on {lessons.day}</li>
            )
          })}
    </ul>
    </section>
  )
}

function Tutors (props) {
  return (
    <div>
    <p> Your tutors are:</p>
    <ul>
      {props.tutors.map(function (tutors) {
        return (
          <li>{tutors.name}</li>
          )
        })}
      </ul>
    </div>
  )
}
