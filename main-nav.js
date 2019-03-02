
  var a = document.getElementById('toggle');
  var b = document.getElementById('main-nav');

  a.addEventListener('click', function() {
   if (b.classList.contains('main-nav--closed')) {
   	b.classList.remove('main-nav--closed');
   	b.classList.add('main-nav--opened');
   } else {
   	b.classList.add('main-nav--closed');
   	b.classList.remove('main-nav--opened');
   }
})



