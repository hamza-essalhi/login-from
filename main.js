

document.querySelector('#btn').addEventListener('click',()=>{

    const i =document.querySelector('#btn')
    const passInput=document.querySelector('#password')
    i.className=i.className==='fa-solid fa-eye-slash'?'fa-solid fa-eye' :'fa-solid fa-eye-slash'
    if(i.className=='fa-solid fa-eye-slash'){
        passInput.type='text'
    }
    else{
        passInput.type='password'
    }
    

})