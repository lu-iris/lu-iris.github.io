(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var groups=[
    ['.work .grid .card'],
    ['.about-photo','.about-copy > *'],
    ['.project-hero .back-link','.project-hero h1'],
    ['.meta-item'],
    ['.project-desc p'],
    ['.gallery h2','.carousel']
  ];
  var noStagger={'.work .grid .card':true};
  var targets=[];
  groups.forEach(function(sel){
    var flat=sel.some(function(s){return noStagger[s];});
    var found=[];
    sel.forEach(function(s){found=found.concat([].slice.call(document.querySelectorAll(s)));});
    found.forEach(function(el,i){
      if(targets.indexOf(el)>-1) return;
      el.style.setProperty('--rv-delay',(flat?0:Math.min(i,6)*70)+'ms');
      el.classList.add('rv');
      targets.push(el);
    });
  });
  if(!('IntersectionObserver' in window)){
    targets.forEach(function(el){el.classList.add('rv-in');});
    return;
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('rv-in');io.unobserve(e.target);}
    });
  },{rootMargin:'0px 0px -12% 0px',threshold:0.08});
  targets.forEach(function(el){io.observe(el);});
})();