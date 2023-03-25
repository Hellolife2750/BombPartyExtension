/*chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1] // Remplacez "rule1" par 1
}, () => {
    chrome.declarativeNetRequest.addRules([{
        id: "rule1",
        priority: 1,
        action: {
            type: "modifyHeaders",
            responseHeaders: [{
                header: "content-security-policy",
                value: "script-src 'self' 'unsafe-eval'; object-src 'self'"
            }]
        },
        condition: {
            urlFilter: {
                schemes: ["http", "https"],
                hostEquals: "ent.u-bordeaux.fr",
                pathPrefix: "/"
            }
        }
    }]);
});


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.startsWith("https://ent.u-bordeaux.fr")) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: () => {
                const h1 = document.querySelector("h1");
                if (h1) {
                    alert(h1.textContent);
                }
            }
        });
    }
});*/

/*const searchInput = document.getElementById('input');
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
            const results = text.split('\n').filter(word => word.includes(searchTerm));
            resultsList.innerHTML = results.map(result => `<li>${result}</li>`).join('');
        })
        .catch(error => {
            console.error('Error fetching word list:', error);
        });
});*/

/*chrome.commands.onCommand.addListener(function (command) {
    if (command === "ouvrir_menu_extension") {
        // Ouvre le menu de l'extension
        chrome.runtime.openOptionsPage();
    }
});*/

// Ajoute un listener pour créer le menu contextuel
/*chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "ouvrir_options", //ouvrir_options
        title: "Ouvrir les options de l'extension",
        contexts: ["browser_action"]
    });
});

// Ajoute un listener pour détecter le clic sur le menu contextuel
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "ouvrir_options") {
        // Ouvre la page d'options de l'extension
        chrome.runtime.openOptionsPage();
    }
});

chrome.commands.onCommand.addListener(function (command) {
    if (command === "ouvrir_menu_extension_party") {
        chrome.runtime.openOptionsPage();
    }
});*/
