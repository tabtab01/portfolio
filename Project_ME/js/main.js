function validateForm () {
 var name = document.forms ["contactForm"]["name"].value;
 var phone = document.forms ["contactForm"]["phone"].value;
 var email = document.forms ["contactForm"]["email"].value;
    if (name === "" || phone === "" || email === "") {
        alert ("Required Field Set Empty!")
    }
    else ( alert ("Thanks for contacting me!")) 
    
}