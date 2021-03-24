class Questions{
    constructor(){
        this.title = createElement('h2')
        this.question = createElement('h2')
        this.option1 = createElement('h2')
        this.option2 = createElement('h2')
        this.input = createInput("Input")
        this.button = createButton("play")
    }

    hide(){
        this.title.hide()
        this.question.hide()
        this.option1.hide()
        this.option2.hide()
        this.input.hide()
        this.option1.hide()
    }

    display() {
        this.title.html("My Quiz Game");
        this.title.position(130, 0);

        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter?")
        this.question.position(75, 80)
        this.option1.html("A. Everyone")
        this.option1.position(75, 100)
        this.option2.html("B. Envelope")
        this.option2.position(75, 120)

        this.input1.position(75, 230)


    }


}