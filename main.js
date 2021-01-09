
let form = document.getElementById('form')
let firstName = document.getElementById('first')
let lastName = document.getElementById('last')
let password = document.getElementById ('password');
let email = document.getElementById('email')

function validateInput(){
  //first name
if (firstName.value.trim()=== "" ) {
 onError(firstName, "First name cannot be empty");

}else{
onSuccess(firstName);
}

//last name

if (lastName.value.trim()=== "" ) {
 onError(lastName, "Last name cannot be empty");

}else{
onSuccess(lastName);
}
//email
if (email.value.trim()=== "") {
  onError(email, "Email cannot be empty")
}else{
  if (!isValidEmail(email.value.trim())) {
     onError(email, "Email is not valid")
  }else{
    onSuccess(email);
  }
}
//password

if (password.value.trim()=== "" ) {
 onError(password, "Password cannot be empty");

}else{
onSuccess(password);
}
}

document.querySelector("button").addEventListener("click", (event)=>{
      event.preventDefault();
      validateInput();
});

function onSuccess(input){
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "hidden";
  messageEle.innerText = " ";
  parent.classList.remove("error")
  parent.classList.add("success")

}

function onError(input, message){
  let parent = input.parentElement;;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "visible";
  messageEle.innerText = message;
  parent.classList.add("error")
  parent.classList.remove("success")
}

function isValidEmail(email){
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}