const form = document.querySelector('form');



function sendEmail(param){
    let tempParams = {
        Name:document.getElementById('Name').value,
        Email:document.getElementById('Email').value,
        Project:document.getElementById('Project').value,
        Message:document.getElementById('Message').value
    };
         

    emailjs.send('service_l4qkuqw', 'template_ekl7ui6', tempParams)
        .then(function(res){
            console.log('success', res.status, res.text);
        }, function(err){
            console.log('FAILED...', err);

        });       
}
