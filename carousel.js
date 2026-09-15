document.querySelectorAll('[data-carousel]').forEach(function(root){
  var stage=root.querySelector('.stage');
  var prev=root.querySelector('[data-prev]'), next=root.querySelector('[data-next]');
  function page(){return Math.max(stage.clientWidth*0.8,240);}
  function update(){
    var max=stage.scrollWidth-stage.clientWidth-2;
    root.classList.toggle('at-start',stage.scrollLeft<=2);
    root.classList.toggle('at-end',stage.scrollLeft>=max);
  }
  prev.addEventListener('click',function(){stage.scrollBy({left:-page(),behavior:'smooth'});});
  next.addEventListener('click',function(){stage.scrollBy({left:page(),behavior:'smooth'});});
  stage.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);
  root.setAttribute('tabindex','0');
  root.addEventListener('keydown',function(e){
    if(e.key==='ArrowLeft'){e.preventDefault();stage.scrollBy({left:-page(),behavior:'smooth'});}
    if(e.key==='ArrowRight'){e.preventDefault();stage.scrollBy({left:page(),behavior:'smooth'});}
  });
  root.querySelectorAll('img').forEach(function(im){
    im.addEventListener('load',update);
  });
  setTimeout(update,80);
  setTimeout(update,600);
});