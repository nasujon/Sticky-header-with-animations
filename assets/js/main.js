 const header = document.querySelector('.header');

function myScroll(){
  if(window.scrollY > header.offsetHeight + 150){
    header.classList.add('header_sticky')
  }
  else{
    header.classList.remove('header_sticky')
  }
}


 window.addEventListener('scroll', myScroll);