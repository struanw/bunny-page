var React = require('react')

module.exports = Beer

function Beer (props) {
  return (
    <div>
    {props.beers.map(function(beer) {
      return (
        <div>
        {beer.name}
        </div>
      )
    })}
    </div>
  )
}
