window.onload = function(){

  let form = document.querySelector('.form')
  let errorDisplay = document.querySelector('.error-message')
  let resetInput = false;

  form.addEventListener('submit', event => {
    event.preventDefault()
    let phoneNumberInput = event.target.querySelector('.form__email').value
    let isValidPhoneNumber = validatePhoneNumber(phoneNumberInput)
    if (!isValidPhoneNumber) {
      // show user feedback
      resetInput = true;
      errorDisplay.classList.remove('hidden')
    } else {
      // POST to server
      postToServer(isValidPhoneNumber)
    }
  })

  let input = form.querySelector('input')

  input.addEventListener('focus', event => {
    errorDisplay.classList.add('hidden')
    if (resetInput) {
      event.target.value = ''
    }
  });

  function validatePhoneNumber (phoneNumberString) {
    let phoneNumberVal = phoneNumberString.split('').filter(char => !isNaN(Number(char)))

    if (phoneNumberVal.length !== 11) {
      return false
    }

    return Number(phoneNumberVal.join(''))
  }

  function postToServer(phoneNumber) {
    const data = `phone-number=${phoneNumber}`

    const xhr = new XMLHttpRequest()
    xhr.withCredentials = true

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        window.location.href = '/thank-you'
      }
    })

    xhr.open('POST', '/sub')
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.setRequestHeader('cache-control', 'no-cache')

    xhr.send(data)
  }
}