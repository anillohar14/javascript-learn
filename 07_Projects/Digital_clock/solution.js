const clock = document.getElementById('clock')
setInterval(function(){
  date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
},1000)