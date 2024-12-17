let hrs = document.getElementById('hours')
let min = document.getElementById('minutes')
let sec = document.getElementById('seconds')

setInterval(function () {
  let currentTime = new Date()

  hrs.innerHTML = currentTime.getHours()
  min.innerHTML = currentTime.getMinutes()
  sec.innerHTML = currentTime.getSeconds()
  console.log('sec')
})

console.log('min')
