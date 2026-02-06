const lines = []
const button = document.getElementById('button');
const quoteDisplay = document.getElementById('quoteDisplay');

fetch('lines.txt')
    .then(response => response.text())
    .then(text => {
        lines.push(...text.split('\n'))
    })
    .catch(error => console.error('Error loading lines:', error));

button.onclick = () => {
    const randomLine = getRandomLine();
    quoteDisplay.textContent = randomLine;
}

function getRandomLine() {
    const randomIndex = Math.floor(Math.random() * lines.length);
    return lines[randomIndex];
}