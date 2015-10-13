var React = require('react');
var ReactDOM = require('react-dom');
var ScrollUp = require('react-scroll-up');

var App = React.createClass({
    render: function() {

        return (
            <ScrollUp showUnder={20}
                      easing={'easeOutCubic'}
                      duration={500}>
                <img src='img/up_arrow_round.png'/>
            </ScrollUp>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('scroll-component'));