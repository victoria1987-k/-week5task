const firstname=document.getElementById('firstname');
const lastname=document.getElementById('lastname')
const password1=document.getElementById('password1')
const password2=document.getElementById('password2')
const submitbtn=document.querySelector('#submitbtn')

submitbtn.addEventListener('click',function validate (event){
    if(firstname.value===lastname.value){
    alert("first name and last name must not be the same.")
     event.preventDefault();
    }
    if(password1.value !== password2.value){
        alert("password did not match");
    return false; }

    else{alert('form submitted');}
})
