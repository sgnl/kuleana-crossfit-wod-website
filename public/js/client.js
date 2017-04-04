window.onload = function(){

  let form = document.querySelector('.form')

  form.addEventListener('submit', event => {
    event.preventDefault()
    let phoneNumberInput = event.target.querySelector('.form__email').value
    if (!validatePhoneNumber(phoneNumberInput)) {
      // show user feedback
    } else {
      // POST to server
    }
  })

  function validatePhoneNumber (phoneNumberString) {
    let phoneNumberVal = phoneNumberString.split('').filter(char => !isNaN(Number(char)))

    if (phoneNumberVal.length !== 11) {
      return false
    }

    return Number(phoneNumberVal.join(''))
  }
}