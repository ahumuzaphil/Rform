let createDone = document.querySelector('#reg_rst') 
let regUser = document.querySelector('#crt_username')

let regEmail = document.querySelector('#crt_email')
let regPswd = document.querySelector('#crt_pswd')
let boxName = document.querySelector('#name_input')
let boxEmail = document.querySelector('#email_input')
let boxPswd = document.querySelector('#pswd_input')
let boxCon = document.querySelector('#con_input')
let regCon = document.querySelector('#crt_confirm')
let eyeEl = document.querySelector("#eye_show")

let ulEl = document.querySelector("#ul_el")
let gender = document.querySelectorAll("gender")
console.log(gender.value)

let lee =document.querySelector("#lee")

let array = ["Name", "Email", 'Password']
console.log(regCon)

eyeEl.addEventListener('click', show)

function show(){
     
     if(boxPswd.type === "password"){
          boxPswd.type = "text"
          eyeEl.innerHTML = "visibility_off"
     }else{
          boxPswd.type = "password"
          eyeEl.innerHTML = "visibility"

     }
     //console.log("show")
}

createDone.addEventListener('click', Register)

function Register(e){
     e.preventDefault();
     if(!boxName.value){
          regUser.innerHTML = "Create Username"
          setTimeout(() => regUser.remove(), 2000)
     }
     if(!boxEmail.value){
          regEmail.innerHTML = "Create Email"
          setTimeout(() => regEmail.remove(), 2000)
     }
     if(!boxPswd.value){
          regPswd.innerHTML = "Create Password"
          setTimeout(() => regPswd.remove(), 2000)
     }
     if(boxCon.value !== boxPswd.value){
          regCon.innerHTML = "incorrect password"
          setTimeout(() => regCon.remove(), 2000)
     }

     //const forBack = document.querySelector("div")
     //forBack.classList.add("for_back")
     //ulEl.appendChild(forBack)

     const name = document.createElement('li')
     name.innerHTML = array[0] + ': '+boxName.value;
     name.classList.add('li_el')
     ulEl.appendChild(name)

     const email = document.createElement('li')
     email.innerHTML = array[1] + ': '+boxEmail.value;
     email.classList.add('li_el')
     ulEl.appendChild(email)

     const pass = document.createElement('li')
     pass.innerHTML = array[2] + ': '+boxCon.value;
     pass.classList.add('li_el')
     ulEl.appendChild(pass)


     lee.innerHTML = "Details:"

}
