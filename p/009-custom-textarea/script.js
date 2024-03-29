const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);

const wrap = document.getElementsByClassName('wrap');
const textSize = document.getElementsByClassName('text-size');
const close = document.getElementsByClassName('close');

// for (let i = 0; i < wrap.length; i++) {
//   wrap[i].addEventListener('mouseover', function() {
//     console.log('Hello');
//   });
// };

// for (let box of wrap) {
//   box.addEventListener('mouseover', function() {
//     console.log('Hi');
//   });
// };

for (let i = 0; i < wrap.length; i++) {
  if (isMobile) {
    wrap[i].addEventListener('touchend', function() {
      wrap[i].classList.add('over');
    });
    close[i].addEventListener('click', function() {
      wrap[i].classList.remove('over');
    });
  } else {
    wrap[i].addEventListener('mouseover', function() {
      wrap[i].classList.add('over');
    });
    wrap[i].addEventListener('mouseout', function() {
      wrap[i].classList.remove('over');
    });
    close[i].style.display = 'none';
  };
  textSize[i].addEventListener('change', function() {
    textarea[i].style.fontSize = textSize[i].value + 'px';
  });
};