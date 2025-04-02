function calculateScore() {
    let score = 0;
    let answers = {
        q1: "Paris",
        q2: "4",
        q3: "Jupiter",
        q4: "Shakespeare",
        q5: "100"
    };

    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    document.getElementById("result").innerText = `Your score: ${score}/5`;
}
