const menu=document.querySelector('#menu');
const menuShow=document.querySelector('#menuShow');
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const main=document.querySelector('#main');
const nav2=document.querySelector('#nav2');
const close=document.querySelector('#close');
const mainNav=document.querySelector('#mainNav');


menu.addEventListener('click',() => {
    console.log('Click Menu'); 
    menuShow.classList.toggle('hidden');
    // main.classList.add('hidden');
    nav2.classList.add('hidden');
    mainNav.classList.add('bg-[--var(--)]')

    
})

close.addEventListener('click',() => {
    menuShow.classList.toggle('hidden','slide-out'); 
})

document.addEventListener('DOMContentLoaded', function() {
    let faq = document.getElementById('faq').children;
    for(let i=0; i<faq.length; i++){
        if(faq[i].tagName == 'DD') {
            faq[i].style.backgroundColor = 'blue';
        }
    }
    let faqList = document.getElementById('faq');
    const descriptionList = document.querySelectorAll(".faqTitle");
    descriptionList.forEach(node => {
        node.addEventListener('click', () => {
            node.nextElementSibling.classList.toggle('hidden');
            
  })
})
})
