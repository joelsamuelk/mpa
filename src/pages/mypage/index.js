import './style.css'
const messageTemplate = require('./Message.template')

module.exports = {
  greet: function() {
    console.log(`hello world`)
  }
}

$((function(host) {
  const html = messageTemplate({
    author: 'j-sparrowssss'
  })

  $('#message').html(html)


})(window))
