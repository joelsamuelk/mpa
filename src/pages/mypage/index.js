import './style.css'
const messageTemplate = require('./Message.template')

const BasicInfo = require('../../components/BasicInfoComponent/index.js')

module.exports = {
  greet: function() {
    console.log(`hello world`)
  }
}

$((function(host) {
  const html = messageTemplate({
    author: 'j-sparrow'
  })

  let html2 = BasicInfo.render()
  console.log(html2)

  $('#mypage').html(html)
  $('#mypage').append(html2)

})(window))
