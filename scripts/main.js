requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'jquery.min',
        store: 'store'
    }
})

requirejs(['store', 'jquery'], () => {
    renderQuestionTemplate(STORE.index);
    renderQuestionContent(STORE.index);
});


function renderQuestionContent(index) {
    let questionNumber = index + 1;
    $('#score span:first-child').text(STORE.score);
    $('#score span:nth-child(2)').text(STORE.questions.length);

    $('#question_number span').text(questionNumber);
    $('main h3').html(STORE.questions[index].question);

    $('#first_answer').text(STORE.questions[index].answers[0]);
    $('#first_answer').val(STORE.questions[index].answers[0]);
    $('label[for=first_answer]').text(STORE.questions[index].answers[0]);
    $('#second_answer').text(STORE.questions[index].answers[1]);
    $('#second_answer').val(STORE.questions[index].answers[1]);
    $('label[for=second_answer]').text(STORE.questions[index].answers[1]);
    $('#third_answer').text(STORE.questions[index].answers[2]);
    $('#third_answer').val(STORE.questions[index].answers[2]);
    $('label[for=third_answer]').text(STORE.questions[index].answers[2]);
    $('#fourth_answer').text(STORE.questions[index].answers[3]);
    $('#fourth_answer').val(STORE.questions[index].answers[3]);
    $('label[for=fourth_answer]').text(STORE.questions[index].answers[3]);
}
function generateQuestionTemplate() {
    return `
    <p id="score">Score: <span>0</span> out of <span></span></p>
    <h2 id="question_number">Question <span></span></h2>
    <h3></h3>
    <form>
        <div>
            <div>
                <input type="radio" id="first_answer" name="answer" value="">
                <label for="first_answer"></label>
            </div>
            <div>Correct</div>
        </div>
        <div>
            <div>
                <input type="radio" id="second_answer" name="answer" value="">
                <label for="second_answer"></label>
            </div>
            <div>Incorrect</div>
        </div>
        <div>
            <div>
                <input type="radio" id="third_answer" name="answer" value="">
                <label for="third_answer"></label>
            </div>
            <div>Incorrect</div>
        </div>
        <div>
            <div>
                <input type="radio" id="fourth_answer" name="answer" value="">
                <label for="fourth_answer"></label>
            </div>
            <div>Incorrect</div>
        </div>
        <input type="submit" value="Submit">
    </form>
    `
}

function renderQuestionTemplate(index) {
    let questionTemplate = generateQuestionTemplate(index);
    $('main').html(questionTemplate);
}