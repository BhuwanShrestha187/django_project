console.log('Hello World detail')

const backBtn = document.getElementById('back-btn')
const url = window.location.href + "data/"
const spinnerBox = document.getElementById('spinner-box')

backBtn.addEventListener('click',
    e => {
        history.back()
    })


$.ajax({
    type: 'GET',
    url: url,
    success: function(response) {
        console.log(response)
        spinnerBox.classList.add('not-visible')
    },
    error: function(error) {
        console.log(error)
    }
})