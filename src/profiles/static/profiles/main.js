console.log('Hello my profiles')

const avatarBox = document.getElementById('avatar-box')
const alertBox = document.getElementById('alert-box')
const profileForm = document.getElementById('profile-form')
const csrf = document.getElementsByName('csrfmiddlewaretoken')

const bioInput = document.getElementById('id_bio')
const avatarInput = document.getElementById('id_avatar')

profileForm.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('csrfmiddlewaretoken', csrf[0].value)
    formData.append('bio', bioInput.value)
    formData.append('avatar', avatarInput.files[0])

    $.ajax({
        type: 'POST',
        url: '',
        enctype: 'multipart/form-data',
        data: formData,
        success: function(response) {
            console.log(response)
            const avatarImage = document.getElementById('profile-avatar');
            avatarImage.src = response.avatar;

            handleAlerts('success', 'Your profile has been updated successfully!!');
        },
        error: function(error) {
            console.log(error)
        },

        processData: false,
        contentType: false,
        cache: false,
    })
})