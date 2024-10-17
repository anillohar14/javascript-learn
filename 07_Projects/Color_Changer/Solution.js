const buttons = document.querySelectorAll('.button')
const body = document.body

buttons.forEach((button) => {
    button.addEventListener('click', function(click) {
      switch(click.target){
      case  grey:
        body.style.backgroundColor = click.target.id
        break;
      case white:
        body.style.backgroundColor = click.target.id
        break;
      case blue:
        body.style.backgroundColor = click.target.id
          break;
      case yellow:
        body.style.backgroundColor = click.target.id
          break;
      default:
        console.log(`Please click on the button for changing the BG color`)
      
      }
    })
})