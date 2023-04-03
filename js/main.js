const name = document.getElementById('.name');
const email = document.getElementById('.email');
const  nameCount= document.getElementById('.nameCount');
const  born= document.getElementById('.born');
const  password= document.getElementById('.password');
const  cPassword= document.getElementById('.confirmPassword');
const  btnCadaster= document.getElementById('.button_cadaster');


btnCadaster.addEventListener('click', showRespost);
const showRespost = () =>{
    console.log(name);
}