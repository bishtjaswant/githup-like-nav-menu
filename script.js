let btn= document.querySelector('.avatar-profile');
let navigationMenu=document.querySelector(".navigation-menu");
let closeBtn= document.querySelector(".avatar-close-btn");

btn.addEventListener('click',function ( ) {
    navigationMenu.classList.remove('none')
    navigationMenu.classList.remove('hide')
}, false);

closeBtn.addEventListener('click',function (e) {
    console.log(this)
    navigationMenu.classList.toggle('hide')
    navigationMenu.classList.remove('none')
    
},false);
