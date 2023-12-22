
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zakoronaldo77@gmail.com', // use your gmail
        pass: 'rjvc vjwn bdle wkpu'

    }
});

const emailSending = (name, email) => {

console.log('TRY TO SENDING THE EMAIL')
    const mailOptions = {
        from: 'zakoronaldo77@gmail.com', //use your email
        to: email,
        subject: "Confirmation: You're In for the Flutter DASH Event!",
        text: mailText(name)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

}



module.exports = {emailSending}


const mailText = (name) => {
    return `Dear ${name},

    Congratulations! 🎉 You've successfully registered for the Flutter DASH Event, and we're thrilled to have you on board.
    
    Event Details:
    
    Date: 31 December 2023
    Time: AT 20PM
    Location: Online
    Get ready for an exciting day filled with Flutter magic, insightful sessions, and opportunities to connect with fellow Flutter enthusiasts. DASH, our fluttering mascot, can't wait to welcome you to this extraordinary event!
    
    Please make sure to mark your calendar for 31 December, and keep an eye on your inbox for any updates or additional information leading up to the big day.
    
    If you have any questions or require further assistance, feel free to reach out to our event organizers at GDG community.
    
    Thank you for being a part of the Flutter community, and we look forward to seeing you at the event!
    
    Flutteringly Yours,
    
    TEAM 10 GIP
    
    P.S. Follow us on social media @gdgalgiers for sneak peeks and event highlights! #FlutterDASHEvent 🚀`
}