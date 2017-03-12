module.exports = {
  getData:getData,
  getWeather:getWeather
}

function getData(){
  return{
    people: [
      {name: 'Dan', age: 33},
      {name: 'Hannah', age: 27},
      {name: 'Drew', age: 28}
    ]
  }
}

function getWeather(){
  return{
    thisWeek: [
      {day: 'Monday', weather: 'rain'},
      {day: 'Tuesday', weather: 'rain'},
      {day: 'Wednesday', weather: 'overcast'},
      {day: 'Thursday', weather: 'sunny'},
      {day: 'Friday', weather: 'sunny'},
      {day: 'Saturday', weather: 'snow'},
      {day: 'Sunday', weather: 'thunderstroms'},
    ]
  }
}
