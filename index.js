var React = require('react')
var ReactDOM = require('react-dom')
var Lessons = require('./components/Lessons')
var data = require('./data')


// function helloTemplate (props) {
//   return (
//     <div>
//     <div>Hello {props.name}, the date is {props.date}</div>
//     <p> How are you? The lessons for today are:</p>
//     <ul>
//       {props.lessons.map(function (lessons) {
//         return (
//           <li>{lessons.lesson}</li>
//         )
//       })}
//     </ul>
//     </div>
//   )
// }


// var data = { name: 'class', date: Date(), lessons: [
// {lesson: 'React'},
// {lesson: 'Knex'},
// {lesson: 'Express'}
// ] }

var view = Lessons(data)
console.log('hi');

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
