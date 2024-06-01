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

let currentQuestion = 0;

function render() {
    document.getElementById('questionListLength').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionField').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selected Questionnumber is', selectedQuestionNumber)
    console.log('right Answer is', question['rightAnswer']);

    if (selectedQuestionNumber == question['rightAnswer']) {
        console.log('richtige Antwort');
    } else {
        console.log('falsche Antwort')
    }
}
