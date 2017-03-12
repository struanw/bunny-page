var React = require('react')

module.exports = Lessons

function Lessons (props) {
  return (
    <div>
    <div>Hello {props.name}, the date is {props.date}</div>
    <p> How are you? The lessons for today are:</p>
    <ul>
      {props.lessons.map(function (lessons) {
        return (
          <li>{lessons.lesson}</li>
        )
      })}
    </ul>
    </div>
  )
}
