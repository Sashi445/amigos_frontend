var container = document.getElementById("container");
var signin = document.getElementById("signin-button");
var signup = document.getElementById("signup-button");

signup.addEventListener('click',()=>{
    container.classList.add("signup-active");
    container.classList.remove("signin-active")
});

signin.addEventListener('click', ()=>{
    container.classList.remove("signup-active");
    container.classList.add("signin-active");
});

