function submitForm() {
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const phone = document.getElementById('phone').value;


    const formData = `Email: ${email}\nSubject: ${subject}\nMessage: ${message}\nPhone Number: ${phone}`;
    console.log(formData);
    telegramMessage(formData);
   
}

function telegramMessage(formData){
    const botToken = '6580613461:AAFFrCbdwwKrF8sXXoSLb3JOJLcrVecAwuY';
    const channelID = '-1002019424375';

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${channelID}&text=${encodeURIComponent(formData)}`, {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
            console.error('Error sending message to Telegram:', response.statusText);
            alert('Error sending message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error sending message to Telegram:', error);
        alert('Error sending message. Please try again.');
    });
}

function parseCurrentURL() {
    const currentURL = window.location.href;

    const urlParts = currentURL.split('?');
    if (urlParts.length > 1) {
        const queryString = urlParts[1];
        const queryParams = new URLSearchParams(queryString);

        const name = queryParams.get('Name') || '';
        const email = queryParams.get('email') || '';
        const subject = queryParams.get('subject') || '';
        const message = queryParams.get('message') || '';
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();
        const formData = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\nDate and Time: ${formattedDate}`;

        return formData;
    } else {
        return 'No parameters found in the URL.';
    }
}

const result = parseCurrentURL();
console.log(result);
telegramMessage(result);
