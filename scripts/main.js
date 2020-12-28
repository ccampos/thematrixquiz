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


function renderQuestionContent(question_index) {
    let questionNumber = question_index + 1;
    $('#score span:first-child').text(STORE.score);
    $('#score span:nth-child(2)').text(STORE.questions.length);

    $('#question_number span').text(questionNumber);
    $('main h3').html(STORE.questions[question_index].question);

    $('input[type=radio]').each(function(answers_index) {
        $(this).val(STORE.questions[question_index].answers[answers_index]);
        $(this).siblings().text(STORE.questions[question_index].answers[answers_index]);
    });
}
function generateQuestionTemplate() {
    return `
    <p id="score">Score: <span></span> out of <span></span></p>
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