var name = document.querySelector('.name-city');
var temp = document.querySelector('.temp-city');
var button= document.querySelector('.submit-button');
var inputvalue = document.querySelector('.inputvalue');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=d61ad641b0ba38a0d9cd7b85f16170dc&units=metric')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  name.innerHTML = nameValue;
  temp.innerHTML = tempValue+"°Celsius";
  

})

.catch(err => alert("Wrong city name!"));
})