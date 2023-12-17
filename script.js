// script.js
function submitForm() {
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const phone = document.getElementById('phone').value;

    // You can perform additional validation here

    const formData = `Email: ${email}\nSubject: ${subject}\nMessage: ${message}\nPhone Number: ${phone}`;
    console.log(formData);
    // Replace with your Telegram bot token and channel ID
    const botToken = '6580613461:AAFFrCbdwwKrF8sXXoSLb3JOJLcrVecAwuY';
    const channelID = '-1002019424375';

    // Send message to Telegram channel
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
