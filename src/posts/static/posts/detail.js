console.log('Hello World detail')

const backBtn = document.getElementById('back-btn')

backBtn.addEventListener('click',
    e => {
        history.back()
    })