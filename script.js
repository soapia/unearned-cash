$('document').ready(function(){
  
  $('.to-reveal').hide()
  
});

$('.btn1').click(function(){
    event.preventDefault()
    var hours = $('#hours').val()
    var weeks = $('#weeks').val()
    var dollars = $('#dollars').val()
    if (isNaN(hours) || isNaN(weeks) || isNaN(dollars) || hours == "" || weeks == "" || dollars == "") {
      alert("whoops! all inputs must be numbers! please try again :)")
    } else if (hours > 168 || weeks > 52) {
      alert("whoops! looks like you've tried to transcend time here. there's a maximum of 168 hours in a week and 52 weeks in a year. make sure to stay within those bounds!")
    } else {
      var oneYear = hours * weeks * dollars
      var finalTime = 240000000000 / oneYear
    
      finalTime = Math.ceil(finalTime)
$('.years').text(`${String(finalTime).replace(/(.)(?=(\d{3})+$)/g,'$1,')}`)
      var tweet = `No one earns a billion dollars, let alone Elon Musk's net worth of $240 billion. If you worked ${hours} hours a week for ${weeks} weeks at $${dollars}/hour, it would take you ${String(finalTime).replace(/(.)(?=(\d{3})+$)/g,'$1,')} years to make that much. calculated by:`
      var tweetText = encodeURIComponent(tweet)
      var tweetLink = `https://twitter.com/intent/tweet?&text=${tweetText}&url=https://unearned.cash`
      $('#tweettweet').attr("href", tweetLink)
      $('.to-reveal').show()
      
    }
    
})
  
$('.btn2').click(function(){
    event.preventDefault()
    $('#hours').val(40)
    $('#weeks').val(52)
    $('#dollars').val(24.04)
    
    
})

$('.btn3').click(function(){
    event.preventDefault()
    $('#hours').val(40)
    $('#weeks').val(52)
    $('#dollars').val(36.06)
    
    
})