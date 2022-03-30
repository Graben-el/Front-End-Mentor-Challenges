async function generateAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const objectResponse = await response.json()
    return objectResponse.slip
}

export { generateAdvice }