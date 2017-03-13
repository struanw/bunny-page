var React = require('react')

module.exports = beerDetails

function beerDetails (props) {
  return (
    <div>
    {props.beers
      .filter(function (beer) {
        return beer.abv > "5"
      })
      .map(function (beer) {
        return (
          <div>Name: {beer.name}, Above: {beer.abv}</div>
        )
      })
    }
    </div>
  )
}
