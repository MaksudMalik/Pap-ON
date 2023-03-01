const btn = document.querySelector('.btn')
const img = document.querySelector('.img')
btn.addEventListener('click',function(){
    if (btn.style.backgroundColor==''){
        btn.style.backgroundColor='#04c624'
        img.src=img.src.replace('pap-off','pap-on')
        btn.innerText = "papON"
    }
    else{
        btn.style.backgroundColor=''
        btn.innerText = "papOFF"
        img.src=img.src.replace('pap-on','pap-off')
    }
})