let questions = [
    {
        "question": " Welcher pH-Wert des Wassers ist optimal für den Anbau von Cannabis in Erde?",
        "answer1": "5.0",
        "answer2": "6.5",
        "answer3": "7.5",
        "answer4": "8.0",
        "rightAnswer": 2
    },

    {
        "question": " Was kann passieren, wenn der pH-Wert des Wassers zu niedrig ist?",
        "answer1": "Verbessertes Nährstoffaufnahme",
        "answer2": "Blockade von Nährstoffen",
        "answer3": "Erhöhte Wachstumsgeschwindigkeit",
        "answer4": "Keine Auswirkungen",
        "rightAnswer": 2
    },

    {
        "question": "Was beschreibt der VPD-Wert im Cannabisanbau?",
        "answer1": "Verhältnis von Lichtintensität zu Pflanzenhöhe",
        "answer2": "Differenz zwischen Luftfeuchtigkeit und Sättigungsfeuchtigkeit",
        "answer3": "pH-Wert des Bodens",
        "answer4": "Menge des zugeführten CO2",
        "rightAnswer": 2
    },
    {
        "question": "Welcher VPD-Wert wird für die Blütephase von Cannabis empfohlen?",
        "answer1": "0.2 kPa",
        "answer2": "0.8 kPa",
        "answer3": "1.2 kPa",
        "answer4": "2.5 kPa",
        "rightAnswer": 3
    },

    {
        "question": "Welches Symptom ist typisch für Stickstoffmangel bei Cannabispflanzen?",
        "answer1": "Gelbe Blätter an den unteren Teilen der Pflanze",
        "answer2": "Braun verfärbte Blattspitzen",
        "answer3": "Weiße Flecken auf den Blättern",
        "answer4": "Verwelkte Blüten",
        "rightAnswer": 1
    },

    {
        "question": "Was könnte ein Zeichen für einen Überschuss an Kalium sein?",
        "answer1": "Dunkelgrüne, glänzende Blätter",
        "answer2": "Eingekrümmte Blattspitzen und Ränder",
        "answer3": "Zähe, verdickte Stängel",
        "answer4": "Langsames Wachstum",
        "rightAnswer": 2
    },

    {
        "question": "Welche Lichtfarbe fördert hauptsächlich das vegetative Wachstum von Cannabispflanzen?",
        "answer1": "Rot",
        "answer2": "Blau",
        "answer3": "Grün",
        "answer4": "Gelb",
        "rightAnswer": 2
    },

    {
        "question": "Welches Medium wird oft verwendet, um die Wurzeln von Cannabispflanzen zu belüften?",
        "answer1": "Perlit",
        "answer2": "Sand",
        "answer3": "Ton",
        "answer4": "Lehm",
        "rightAnswer": 1
    },

    {
        "question": "Welche Technik wird angewendet, um Cannabispflanzen in kleinere, handlichere Formen zu zwingen?",
        "answer1": "Topping",
        "answer2": "Flushing",
        "answer3": "Cloning",
        "answer4": "Lollipopping",
        "rightAnswer": 1
    },

    {
        "question": "Was ist ein häufiges Anzeichen für Wurzelfäule?",
        "answer1": "Weiße, gesunde Wurzeln",
        "answer2": "Braun verfärbte und schleimige Wurzeln",
        "answer3": "Schnell wachsendes Wurzelsystem",
        "answer4": "Vermehrtes Blattwachstum",
        "rightAnswer": 1
    }
]

let rightQuestions = 0;
let currentQuestion = 0;


function render() {
    document.getElementById('questionListLength').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    if (currentQuestion >= questions.length) {
        showEndscreen();
    } else {
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;
        console.log('fortschritt', percent)
        let question = questions[currentQuestion];
        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('questionField').innerHTML = question['question'];
        document.getElementById('answer1').innerHTML = question['answer1'];
        document.getElementById('answer2').innerHTML = question['answer2'];
        document.getElementById('answer3').innerHTML = question['answer3'];
        document.getElementById('answer4').innerHTML = question['answer4'];
    }
}


function showEndscreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none;'
    document.getElementById('questionField').style = 'display: none;'
    document.getElementById('cardTitel').style = 'display: none;'
    document.getElementById('quizBackground').style = 'display: none;'
    document.getElementById('questionListLength2').innerHTML = questions.length;
    document.getElementById('rightAnswers').innerHTML = rightQuestions;
}




function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer${question['rightAnswer']}`;
    if (selectedQuestionNumber == question['rightAnswer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
}


function restartGame() {
    document.getElementById('endScreen').style = 'display: none;';
    document.getElementById('questionBody').style = '';
    document.getElementById('questionField').style = '';
    document.getElementById('cardTitel').style = '';
    document.getElementById('quizBackground').style = '';
    rightQuestions = 0;
    currentQuestion = 0;
    render();
}

