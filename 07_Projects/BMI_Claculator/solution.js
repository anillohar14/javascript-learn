const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  let bmi
  if(height === '' || height < 0 || isNaN(height)){
      results.innerHTML = `Please enter a valid height ${height}`
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
      results.innerHTML = `Please enter a valid weight ${weight}`
  }
  else{
     bmi =  (weight / ((height * height) / 10000)).toFixed(2);
     if(bmi < 18.6){
       results.innerHTML = `<span>Your are Under Weight ${bmi}</span>`
     }
     else if(bmi > 24.9){
       results.innerHTML = `<span>Your are Over Weight ${bmi}</span>`
     }
     else{
       results.innerHTML = `<span>You are in Normal Range ${bmi}</span>`
     }
  }
}
)
