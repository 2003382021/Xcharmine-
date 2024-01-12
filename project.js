const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.reg-link');
const btnpopup = document.querySelector('.loginbtn');
const iconClose = document.querySelector('.icon-close');
const payment = document.querySelector('.payment');
const moveBack = document.querySelector('.move-back');
const purchase = document.querySelector('.purchase');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

purchase.addEventListener('click', ()=>{
    payment.classList.add('active');
});

moveBack.addEventListener('click', ()=>{
    payment.classList.remove('active');
});

function nextbutton(){
    document.getElementById('header').style.display='none';
    document.getElementById('input-quantity').style.display='block';
}
function transaction(){
    document.getElementById('order').style.display='none';
    document.getElementById('payment').style.display='flex';
}
