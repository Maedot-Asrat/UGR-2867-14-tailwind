const burger=document.querySelector('#burger');
const menu=document.querySelector('#menu');
const menuholder=document.querySelector('#menuholder');


burger.addEventListener('click', ()=>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.classList.add('grid')
        menu.classList.add('grid-start')
    }else{
        menu.classList.add('hidden');
    }
})

function sendMessage(event) { 
    event.preventDefault();  
   
    var name = document.getElementById("fullname").value; 
    var email = document.getElementById("email").value; 
    var phone= document.getElementById("phone").value;
    var message = document.getElementById("message").value; 
   
    var subject = encodeURIComponent("Contact Me"); 
    var body = encodeURIComponent("Name: " + name + "\nEmail: " + email+ "\nPhone: " + phone + "\nMessage: " + message); 
    var mailtoURL = "mailto:asratmaedot@gmail.com?subject=" + subject + "&body=" + body; 
   
     
    window.location.href = mailtoURL; 
  }

  function redirect() {
    window.location.href = "contact.html";
  }