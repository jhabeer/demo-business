(function(){
  var WA='https://wa.me/2348163325675?text=';
  document.documentElement.classList.add('js');
  function link(m){return WA+encodeURIComponent(m)}
  document.querySelectorAll('[data-wa]').forEach(function(a){a.href=link(a.getAttribute('data-wa'))});
  function txt(id){var s=document.getElementById(id);return s.options[s.selectedIndex].text}
  document.getElementById('quote').addEventListener('submit',function(e){
    e.preventDefault();
    var m='Hi Jab Studio, I saw the business demo (Zestara Facility Care) and tried the quote form: '+txt('qService')+', '+txt('qSize')+', '+txt('qArea')+'. I want a site like this with WhatsApp quote requests.';
    window.open(link(m),'_blank','noopener');
  });
  // open now, Africa/Lagos (Mon-Sat 7-18)
  var p=new Intl.DateTimeFormat('en-GB',{timeZone:'Africa/Lagos',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date()),o={};
  p.forEach(function(x){o[x.type]=x.value});
  var t=(+o.hour%24)+(+o.minute)/60,open=o.weekday!=='Sun'&&t>=7&&t<18,el=document.getElementById('open');
  el.textContent=open?'Open now':'Closed now';el.classList.toggle('closed',!open);
  var nav=document.querySelector('.nav');
  function sc(){nav.classList.toggle('solid',scrollY>30)}sc();addEventListener('scroll',sc,{passive:true});
  nav.querySelector('.burger').onclick=function(){var x=nav.classList.toggle('open');this.setAttribute('aria-expanded',x)};
  nav.querySelectorAll('.links a').forEach(function(a){a.onclick=function(){nav.classList.remove('open')}});
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});els.forEach(function(x){io.observe(x)})}
  else els.forEach(function(x){x.classList.add('in')});
})();
