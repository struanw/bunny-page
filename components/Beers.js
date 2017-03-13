var React = require('react')

module.exports = Beer

function Beer (props) {
  return (
    <div>
    {props.beers
      .filter( function(beer) {
        return beer.name
      })
      .map(function(beer) {
      return (
        <div>
          <a href="file:///Users/ngakourakupenga/Desktop/react-minimal/beer.html">{beer.name}</a>
        </div>
        )
    })}
    </div>
  )
}
