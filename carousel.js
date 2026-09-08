document.querySelectorAll('[data-carousel]').forEach(function(root){
  var slides=[].slice.call(root.querySelectorAll('.slide'));
  var cap=root.querySelector('.c-cap'), count=root.querySelector('.c-count');
  var i=0;
  function show(n){
    i=(n+slides.length)%slides.length;
    slides.forEach(function(s,k){s.classList.toggle('is-active',k===i);});
    var img=slides[i].querySelector('img');
    if(img&&!img.src&&img.dataset.src) img.src=img.dataset.src;
    var nxt=slides[i+1]&&slides[i+1].querySelector('img');
    if(nxt&&!nxt.src&&nxt.dataset.src) nxt.src=nxt.dataset.src;
    if(cap) cap.textContent=slides[i].dataset.cap||'';
    if(count) count.textContent=(i+1)+' / '+slides.length;
    slides[i].scrollTop=0;
  }
  root.querySelector('[data-prev]').addEventListener('click',function(){show(i-1);});
  root.querySelector('[data-next]').addEventListener('click',function(){show(i+1);});
  root.setAttribute('tabindex','0');
  root.addEventListener('keydown',function(e){
    if(e.key==='ArrowLeft'){e.preventDefault();show(i-1);}
    if(e.key==='ArrowRight'){e.preventDefault();show(i+1);}
  });
  show(0);
});