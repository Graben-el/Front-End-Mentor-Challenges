const nome = document.querySelector('.name');
const sobreNome = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorPacks = document.querySelectorAll('.hidden');
const form = document.querySelector('.form');

addFocus(nome, 0, 'First Name')
addFocus(sobreNome, 1, 'Last Name')
addFocus(email, 2, 'E-mail')
addFocus(password, 3, 'Password')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (nome.value.length === 0) {
        showError(0, nome)
    } else {
        hideNClean(0, nome)
    }

    if (sobreNome.value.length === 0) {
        showError(1, sobreNome)
    } else {
        hideNClean(1, sobreNome)
    }

    if (email.value.length === 0 || email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
        showError(2, email) 
    } else {
        hideNClean(2, email)
    }

    if (password.value.length === 0) {
        showError(3, password)
    } else {
        hideNClean(3, password)
    }
})



function addFocus(input, errorIndex, placeholder){
    input.addEventListener('focus', () => {
        hideError(errorIndex)
        input.setAttribute('placeholder', `${placeholder}`)
        input.value=''
    })
}

function hideError(index) {
    return errorPacks[index].style.display = 'none'
}

function showError(index, input) {
    errorPacks[index].style.display = 'flex'
    input.value = ''
    input.setAttribute('placeholder', '')
    form.style.height = '118%'
}

function hideNClean(index, input) {
    hideError(index)
    cleanForm(input)
}

function cleanForm(input) {
    input.value = ''
    input.setAttribute('placeholder', '')
    form.style.height = '100%'
}
