
const imgs = document.querySelectorAll('.gallery img');
for(let index = 0; index < imgs.length; index++){
  const img = imgs[index];
  console.log(img);
  img.addEventListener('click', showLightbox);
}

function showLightbox(ev){
  const lightbox = document.querySelectorAll('.lightbox');
  const img = document.querySelector('.lightbox img');
  const imgUrl = ev.target.src;
  img.scr = imgUrl;

  lightbox.classList.add('visible');
  console.log(ev.target.src);
}
