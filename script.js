let Menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');
Menu.onclick = () => {
    Menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    Menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
    
    
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');

}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

