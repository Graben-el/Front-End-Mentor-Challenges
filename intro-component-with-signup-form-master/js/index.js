const nome = document.querySelector('.name');
const sobreNome = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorPacks = document.querySelectorAll('.hidden');
const form = document.querySelector('.form');

nome.addEventListener('focus', () => {
    hideError(0)
    nome.setAttribute('placeholder', 'First Name')
    nome.value=''
})

sobreNome.addEventListener('focus', () => {
    hideError(1)
    sobreNome.setAttribute('placeholder', 'Last Name')
    sobreNome.value=''
})

email.addEventListener('focus', () => {
    hideError(2)
    email.setAttribute('placeholder', 'E-mail')
    email.value=''
    
})

password.addEventListener('focus', () => {
    hideError(3)
    password.setAttribute('placeholder', 'Password')
    password.value=''
})


form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (nome.value.length === 0) {
        showError(0, nome)
    } else {
        hideError(0)
        cleanForm(nome)
    }

    if (sobreNome.value.length === 0) {
        showError(1, sobreNome)
    } else {
        hideError(1)
        cleanForm(sobreNome)
    }

    if (email.value.length === 0 || email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
        showError(2, email) 
    } else {
        hideError(2)
        cleanForm(email)
    }

    if (password.value.length === 0) {
        showError(3, password)
    } else {
        hideError(3)
        cleanForm(password)

    }
    
})


function hideError(index) {
    return errorPacks[index].style.display = 'none'
}

function showError(index, input) {
    errorPacks[index].style.display = 'flex';
    input.value = ''
    input.setAttribute('placeholder', '')
    form.style.height = '118%'; 
}

function cleanForm(input) {
    input.value = ''
    input.setAttribute('placeholder', '')
    form.style.height = '100%'
}
