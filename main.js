document.addEventListener('DOMContentLoaded', function() { 
    document.getElementById('email-form').addEventListener('submit', function(e) {
        e.preventDefault(); 

        const email = document.querySelector('input[type="email"]').value;
        const errorMessage = document.getElementById('error-message');
        const errorImg = document.getElementById('error-img');

        const checkEmail = (email) => {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            
            if(emailPattern.test(email)) {
                errorMessage.style.display = 'none';
                errorImg.style.display = 'none';
                document.querySelector('input[type="email"]').value = '';
            } else {
                errorMessage.style.display = 'block';
                errorImg.style.display = 'block';
            }
        }
        checkEmail(email);
    });

});