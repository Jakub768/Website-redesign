function buttonOn()
{
    if (document.getElementById('name').value == '' ||
        document.getElementById('email').value == '' ||
        document.getElementById('message').value == '')
        alert("one of the fields are empty! Make sure to fill all of them")
    else {
        alert("Message submitted, thank you!")
        clearfields()
    }
}

function clearfields()
{
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('message').value = ''
}