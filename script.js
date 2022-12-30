const header = document.querySelector('.header')
const button = document.getElementById('btnHeader')
window.onscroll = function(){
    var top = window.scrollY
    console.log(top.toFixed());
    if(top >= 340){
        header.classList.add('changeMenu')
        button.classList.add('btnColor')
    }else{
        header.classList.remove('changeMenu')
        button.classList.remove('btnColor')
    }
}