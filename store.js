const DATA = [
    {
        question: 'Где больше всего в мире пьют чая?',
        answers: [
            {
                id: '1',
                value: 'Турция',
                correct: true,
            },
            {
                id: '2',
                value: 'Россия',
                correct: false,
            },
            {
                id: '3',
                value: 'Китай',
                correct: false,
            },
            {
                id: '4',
                value: 'Индия',
                correct: false,
            },
        ]
    },
    {
        question: 'Как вы думаете, сколько чашек чая выпивается за одну секунду в мире?',
        answers: [
            {
                id: '5',
                value: '500 тыс',
                correct: false,
            },
            {
                id: '6',
                value: '2 млн',
                correct: true,
            },
            {
                id: '7',
                value: '5 млн',
                correct: false,
            },
            {
                id: '8',
                value: '10 млн',
                correct: false,
            },

        ]
    },
    {
        question: 'Кто самый крупный производитель чая в мире?',
        answers: [
            {
                id: '9',
                value: 'Англия',
                correct: false,
            },
            {
                id: '10',
                value: 'Индия',
                correct: false,
            },
            {
                id: '11',
                value: 'Китай',
                correct: true,
            },
            {
                id: '12',
                value: 'Австралия',
                correct: false,
            },

        ]
    },
    {
        question: 'Какая страна является родиной холодного чая?',
        answers: [
            {
                id: '13',
                value: 'США',
                correct: false,
            },
            {
                id: '14',
                value: 'Мексика',
                correct: false,
            },
            {
                id: '15',
                value: 'Швейцария',
                correct: true,
            },
            {
                id: '16',
                value: 'Франция',
                correct: false,
            },

        ]
    },
    {
        question: 'Какой чай является самым полезным?',
        answers: [
            {
                id: '17',
                value: 'Белый',
                correct: true,
            },
            {
                id: '18',
                value: 'Жёлтый',
                correct: false,
            },
            {
                id: '19',
                value: 'Чёрный',
                correct: false,
            },
            {
                id: '20',
                value: 'Зеленый',
                correct: false,
            },

        ]
    },
    {
        question: 'А вы знаете, когда отмечается международный день чая?',
        answers: [
            {
                id: '21',
                value: '13 февраля',
                correct: false,
            },
            {
                id: '22',
                value: '27 апреля',
                correct: false,
            },
            {
                id: '23',
                value: '19 июня',
                correct: false,
            },
            {
                id: '24',
                value: '15 декабря',
                correct: true,
            },

        ]
    },
    {
        question: 'Где больше кофеина?',
        answers: [
            {
                id: '25',
                value: 'В чае',
                correct: true,
            },
            {
                id: '26',
                value: 'В кофе',
                correct: false,
            },
            
        ]
    },
    {
        question: 'Какой чай самый распространенный в мире?',
        answers: [
            {
                id: '27',
                value: 'Чёрный',
                correct: true,
            },
            {
                id: '28',
                value: 'Белый',
                correct: false,
            },
            {
                id: '29',
                value: 'Улун',
                correct: false,
            },
            {
                id: '30',
                value: 'Зелёный',
                correct: false,
            },

        ]
    },
    {
        question: 'Что в западных странах называют русским чаем?',
        answers: [
            {
                id: '31',
                value: 'Чай с сахаром',
                correct: false,
            },
            {
                id: '32',
                value: 'Чай с молоком',
                correct: false,
            },
            {
                id: '33',
                value: 'Чай с имбирем',
                correct: false,
            },
            {
                id: '34',
                value: 'Чай с лимоном',
                correct: true,
            },

        ]
    },
    {
        question: 'Сколько стоит килограмм самого дорогого чая в мире?',
        answers: [
            {
                id: '35',
                value: '200 000 $',
                correct: false,
            },
            {
                id: '36',
                value: '500 000 $',
                correct: false,
            },
            {
                id: '37',
                value: '1 000 000 $',
                correct: true,
            },
            {
                id: '38',
                value: '3 000 000 $',
                correct: false,
            },

        ]
    },
    {
        question: 'Когда был изобретен чайный пакетик?',
        answers: [
            {
                id: '39',
                value: '1756',
                correct: false,
            },
            {
                id: '40',
                value: '1891',
                correct: false,
            },
            {
                id: '41',
                value: '1904',
                correct: true,
            },
            {
                id: '42',
                value: '2001',
                correct: false,
            },

        ]
    },
    {
        question: 'Сколько видов чая существует в мире?',
        answers: [
            {
                id: '43',
                value: '800',
                correct: false,
            },
            {
                id: '44',
                value: '1500',
                correct: true,
            },
            {
                id: '45',
                value: '3000',
                correct: false,
            },
            {
                id: '46',
                value: '5000',
                correct: false,
            },

        ]
    },
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
                <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                ${answer.value}
                </label>
                </li>
                `)
        .join('');

    questions.innerHTML = `
    <div class="quiz-questions-item">
    <div class="quiz-questions-item__question">${DATA[index].question}</div>
    <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
  </div>
    `;
};

const renderResults = () => {
    let content = '';

    const getClassname = (answer, questionIndex) => {
        let classname = '';

        if (!answer.correct && answer.id === localResults[questionIndex]) {
            classname = 'answer--invalid';
        } else if (answer.correct) {
            classname = 'answer--valid';
        }

        return classname;
    };

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class =${getClassname(answer, questionIndex)}>${answer.value}</li>`)
        .join('');


    DATA.forEach((question, index) => {
        content += `
            <div class="quiz-results-item">
            <div class="quiz-results-item__question">${question.question}</div>
            <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
        </div>
        `;
    });

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        console.log('input');
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
});

quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;


        if (DATA.length === nextQuestionIndex) {
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');

            renderResults();
        } else {
            renderQestions(nextQuestionIndex);
        }

        btnNext.disabled = true;
    }

    if (event.target.classList.contains('btn-restart')) {
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('results--visible');
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');

        renderQestions(0);
    }
});

renderQestions(0);

