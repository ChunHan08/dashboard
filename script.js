function loadDate () {
  var currentDate = new Date()
  var dateString = currentDate
    .toString()
    .split(' ') 
    .slice(0, 4)
    .join(' ')
  $('#date').text(dateString)
}
function loadWeather() {
  var weather = $('#weather')
  var url = 'api.openweathermap.org/data/2.5/weather'
  var apiKey = 'YOUR_API_KEY'
function success(position) {
  var latitude = position.coords.latitude
  var longitude = position.coords.longitude
  $.getJSON(
    url +
      '?units=imperial&lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&appid=' +
      apiKey,
    function (data) {
      weather.text(
        'Based on your current location, it is ' + main.temp + '°C right now'
      )
    }
  )
}
function error() {
  console.log('Unable to retrieve your location')
}
navigator.geolocation.getCurrentPosition(success, error)
weather.text('Loading...')
}
function loadNews() {
  var news = $('#news')
  var url = 'https://newsapi.org/v2/top-headlines?soures=the-next-web&apiKey='
  var apiKey = 'YOUR_API_KEY'
  $.getJSON(url + apiKey, function (data) {
    var titles = data.articles.map(function (article) {
      return " <a href='" + article.url + "'>" + article.title + '</a>'
    })
    news.html(titles.join('<br><br>'))
  })
  news.text('Loading...')
}
loadDate()
loadWeather()
loadNews()