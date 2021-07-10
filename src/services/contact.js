import emailjs from "emailjs-com";

export const submit = () => {
    emailjs.init('user_sq8K9NkzlZ5KKRlWTPaLi');
    emailjs.sendForm('gmail','template_hwW2FeT9', '#myForm')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(err) {
            console.log('FAILED...', err);
        });
}
