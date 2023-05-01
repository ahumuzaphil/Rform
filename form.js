const inputEl = document.querySelectorAll("#input_el")
const messageEl = document.querySelectorAll(".message_error")
const usernameEl =document.querySelector(".username")
const emailEl =document.querySelector(".email")
const passwordEl =document.querySelector(".password")
const msgUsername = document.querySelector("#msg_username")
const msgEmail = document.querySelector("#msg_email")
const msgEl = document.querySelector("#msg_el")
const buttonSign = document.querySelector(".button_sign")
let eyeEl = document.querySelector("#eye_show")



let messages = ["please enter username","please enter email", "please enter password" ]

let nameEl = usernameEl.value
 
console.log(eyeEl)

//console.log(msgEl)

eyeEl.addEventListener('click', show)

function show(){
     
     if(passwordEl.type === "password"){
          passwordEl.type = "text"
          eyeEl.innerHTML = "visibility_off"
     }else{
          passwordEl.type = "password"
          eyeEl.innerHTML = "visibility"

     }
     //console.log("show")
}


buttonSign.addEventListener("click", Login)

function Login(event){
     event.preventDefault();

    if(!usernameEl.value ){
         msgUsername.textContent = messages[0]
         setTimeout(() => msgUsername.remove(), 3000)
         
    }
    if(!emailEl.value ){
         msgEmail.textContent = messages[1]
         setTimeout(() => msgEmail.remove(), 2000)
    }
    if(!passwordEl.value){
        msgEl.textContent = messages[2]
        setTimeout(() => msgEl.remove(), 2000)
    }else{
      //usernameEl.value = " "  
      emailEl.placeholder = "Email "  
      //passwordEl.value = " "  
    }
    
}

