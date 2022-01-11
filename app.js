class App {
    constructor() {
        this.arr = [];
    }

    createArr(length = 10) {
        for ( let i = 0; i < length; i++) {
            this.arr.push(i);
        }
    }

    showArr() {
        console.log(this.arr);
    }

    changeArr(func) {
        this.arr = func(this.arr);
    }
}

module.exports = new App();