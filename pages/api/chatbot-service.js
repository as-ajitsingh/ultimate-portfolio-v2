export const sendMessage = (message) =>
    fetch("https://us-central1-ultimate-portfolio.cloudfunctions.net/message", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({apiVersion: '1.0', request: {message}})
    }).then(async response => (await response.json()).response);
