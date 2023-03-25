/*document.addEventListener('DOMContentLoaded', function () {
    chrome.action.onClicked.addListener(function (tab) {
        alert('Salut');
    });
});*/

/*const searchInput = document.getElementById('search');
const resultsList = document.getElementById('results');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    if (searchTerm.length < 3) {
        resultsList.innerHTML = '';
        return;
    }
    const url = `https://raw.githubusercontent.com/dwyl/french-words/master/words_alpha.txt`;
    fetch(url)
        .then(response => response.text())
        .then(text => {
            alert(text)
            const results = text.split('\n').filter(word => word.includes(searchTerm));
            resultsList.innerHTML = results.map(result => `<li>${result}</li>`).join('');
        })
        .catch(error => {
            console.error('Error fetching word list:', error);
        });
});*/

const searchInput = document.getElementById('search');
const outpout = document.getElementById('outpout');

const dicoPath = 'gutenberg.txt';


searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    if (searchTerm.length < 2) {
        outpout.innerText = "outpout";
        return
    }

    // lire le contenu du fichier texte
    fetch(dicoPath)
        .then(response => response.text())
        .then(data => {
            // séparer le contenu en lignes
            const lines = data.split('\n');

            let longestWord = '';

            // rechercher le premier mot contenant la syllabe saerchedTerm
            //const word = lines.find(line => line.includes(searchTerm));
            lines.forEach(line => {
                if (line.includes(searchTerm)) {
                    const words = line.split(' ');
                    words.forEach(word => {
                        if (word.includes(searchTerm) && word.length > longestWord.length) {
                            longestWord = word;
                        }
                    });
                }
            });

            if (longestWord) {
                outpout.innerText = longestWord;
                copyToClipBoard(longestWord);
            } else {
                outpout.innerText = "outpout";
            }
        })
        .catch(error => console.error(error));
});

function copyToClipBoard(content) {
    navigator.clipboard.writeText(content);
}
