const adviceData = {
    id: 0,
    advice: '',
    setId(advice) {
        this.id = advice.id
    },
    setAdvice(advice) {
        this.advice = advice.advice
    }
}

export { adviceData }