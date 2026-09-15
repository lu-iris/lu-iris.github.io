(function(){

  /* hero entrance on load */
  var hero=['.hero-eyebrow','.hero h1','.hero-role','.hero-art']
    .map(function(s){return document.querySelector(s);}).filter(Boolean);
  hero.forEach(function(el,i){
    el.classList.add('hero-enter');
    el.style.setProperty('--he-delay',(i*110)+'ms');
  });
  function heroReady(){document.documentElement.classList.add('hero-ready');}
  requestAnimationFrame(function(){requestAnimationFrame(heroReady);});
  setTimeout(heroReady,60);
  document.addEventListener('visibilitychange',heroReady);

  /* sticky project title in nav */
  var h1=document.querySelector('.project-hero h1'), nav=document.querySelector('nav');
  if(h1&&nav){
    var t=document.createElement('div');
    t.className='nav-title';
    t.textContent=h1.textContent.trim();
    nav.appendChild(t);
    var brand=nav.querySelector('.brand');
    if(brand&&brand.parentNode===nav){
      var g=document.createElement('div');
      g.className='brand-group';
      nav.insertBefore(g,brand);
      g.appendChild(brand);
      g.appendChild(t);
    }
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(e){
        t.classList.toggle('is-visible',!e[0].isIntersecting);
      },{rootMargin:'-72px 0px 0px 0px'}).observe(h1);
    }
  }

})();