import { generateAdvice } from '/js/services/generateAdvice.js'
import { adviceData as data } from '/js/objects/getAdviceData.js'

const idNumber = document.querySelector('#id');
const adviceText = document.querySelector('.advice-text');
const button = document.querySelector('.button');

button.addEventListener(
    'click', async function() {
        let adviceResponse = await generateAdvice()

        data.setId(adviceResponse)
        data.setAdvice(adviceResponse)

        const id = data.id
        const advice = data.advice

        idNumber.innerHTML = id
        adviceText.innerHTML = `"${advice}"`
    }
)
