const form = document.getElementById('contactForm') as HTMLFormElement;
const feedback = document.getElementById('formFeedback') as HTMLElement;
form.addEventListener('submit',function(event:Event){
    event.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const message = (document.getElementById('message') as HTMLTextAreaElement).value.trim();
    if(name==="" || email==="" || message===""){
        feedback.textContent = 'All fields are required';
    }else if(!validateEmail(email)){
        feedback.textContent = 'please enter a email address';
    }else{
        feedback.textContent = "";
        alert('Form submitted successfully!')
        form.reset()
    }
})
function validateEmail(email:string):boolean{
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailPattern.test(email)
}
