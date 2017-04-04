window.onload = function(){

  let form = document.querySelector('.form')

  form.addEventListener('submit', event => {
    event.preventDefault()
    let phoneNumberInput = event.target.querySelector('.form__email').value
    let isValidPhoneNumber = validatePhoneNumber(phoneNumberInput)
    if (!isValidPhoneNumber) {
      // show user feedback
    } else {
      // POST to server
      postToServer(isValidPhoneNumber)
    }
  })

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
        console.log(this.responseText)
        successfulSubsciption()
      }
    })

    xhr.open('POST', '/sub')
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.setRequestHeader('cache-control', 'no-cache')

    xhr.send(data)
  }

  function successfulSubsciption() {

  }
}