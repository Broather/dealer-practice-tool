export const test = {
    BLACKJACK: 1
}
const column = {
    KEY: 1,
    QUESTION: 2,
    ANSWER: 3,
}
export class Generator {
    constructor(type, count) {
        this.count = count
        this.cursor = 0
        switch (type) {
            case test.BLACKJACK:
                this.data = { "Blackjack": column.KEY, "Bet": column.QUESTION, "Payout": column.ANSWER }
                this.questions = Array.from({ length: count }, (_, index) => index + 1)
                this.answers = Array.from(this.questions, a => a * 1.5)
                break;

            default:
                this.data = { "null": null }
                break;
        }

    }
    get_headers() {
        return Object.keys(this.data)
    }

    get_next() {
        if (this.cursor < this.count * this.get_headers().length) {
            const key = this.get_headers()[this.cursor % this.get_headers().length]

            let result
            switch (this.data[key]) {
                case column.KEY:
                    result = key
                    break;

                case column.QUESTION:
                    result = this.questions[Math.floor(this.cursor / this.get_headers().length)]
                    break;

                case column.ANSWER:
                    result = this.answers[Math.floor(this.cursor / this.get_headers().length)]
                    break;
                default:
                    console.assert(false, "ERROR, unrecognies column type")
                    break;
            }
            this.cursor++
            return result
        } else {
            return null
        }
    }
    next_is_input() {
        if (this.cursor < this.count * this.get_headers().length) {
            const key = this.get_headers()[this.cursor % this.get_headers().length]
            return this.data[key] == column.ANSWER
        } else {
            return null
        }
    }
}