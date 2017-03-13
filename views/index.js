var React = require('react')

module.exports = {
  helloTemplate,
  getContactList,
  todaysDate
}

function helloTemplate (props) {

  return (
    <div>hello {props.name}</div>
  )
}

function getContactList(contactDetails){
  return (
    <div>
      {contactDetails.people.map(function(personInfo){
        return (
          <div>
            What is up! My name is {personInfo.name} and I love {personInfo.hobby}!
          </div>
        )
      })}
    </div>
  )
}

function todaysDate(date){
  console.log(date, typeof date);
  return (
    <div>The date today is {date.toString()}</div>
  )
}
