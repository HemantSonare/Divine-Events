// app.js — Shared JS for Divine Events multi-page starter
const PHONE = "+917067869093"; // <- change this to your WhatsApp number

// Common data
const SERVICES = [
  {id:'haldi', title:'Haldi Ceremony', img:'https://source.unsplash.com/600x400/?haldi,india', blurb:'Bright floral haldi themes & comfy seating.'},
  {id:'mehndi', title:'Mehndi Ceremony', img:'https://source.unsplash.com/600x400/?mehndi,henna', blurb:'Colorful mehndi setups with traditional props.'},
  {id:'baby', title:'Baby Shower', img:'https://source.unsplash.com/600x400/?baby-shower,decor', blurb:'Soft pastel baby shower themes with props.'},
  {id:'birthday', title:'Birthday Decoration', img:'https://source.unsplash.com/600x400/?birthday,party', blurb:'Theme based birthday décor with balloons & lights.'},
  {id:'marriage', title:'Marriage / Reception', img:'https://source.unsplash.com/600x400/?wedding,decor', blurb:'Elegant reception themes, lighting & florals.'},
  {id:'prewedding', title:'Pre-Wedding / Couple Décor', img:'https://source.unsplash.com/600x400/?prewedding,photoshoot', blurb:'Romantic pre-wedding setups for photos & parties.'},
  {id:'bride', title:'Bride-to-be / Groom-to-be', img:'https://source.unsplash.com/600x400/?bridal,decor', blurb:'Specialised themes celebrating the bride/groom.'},
  {id:'anniversary', title:'Anniversary', img:'https://source.unsplash.com/600x400/?anniversary,decor', blurb:'Anniversary decorations with candlelight & florals.'},
  {id:'kids', title:'Kids Theme Décor', img:'https://source.unsplash.com/600x400/?kids,party', blurb:'Fun themed setups for kids with safe props.'},
  {id:'balloon', title:'Balloon Décor', img:'https://source.unsplash.com/600x400/?balloons,party', blurb:'Balloon arches, garlands & installations.'},
  {id:'other', title:'Other Decorations', img:'https://source.unsplash.com/600x400/?decoration,party', blurb:'Custom decor for unique requests.'}
];

const PACKAGES = [
  {id:'p1', title:'Sunshine Haldi (Basic)', desc:'Simple floral haldi with backdrop & seating', price:'₹2,500', img:'https://source.unsplash.com/600x400/?haldi,decoration'},
  {id:'p2', title:'Mehndi Glam (Standard)', desc:'Vibrant mehndi setup, rugs & props', price:'₹9,999', img:'https://source.unsplash.com/600x400/?mehndi,decor'},
  {id:'p3', title:'Couple Glow (Premium)', desc:'Luxury pre-wedding décor & lighting', price:'₹24,999', img:'https://source.unsplash.com/600x400/?wedding,stage'},
  {id:'p4', title:'Baby Shower Bliss', desc:'Pretty pastel baby shower theme', price:'₹7,499', img:'https://source.unsplash.com/600x400/?baby-shower,decor'},
  {id:'p5', title:'Birthday Spark', desc:'Theme based birthday décor with balloon art', price:'₹4,999', img:'https://source.unsplash.com/600x400/?birthday,decor'}
];

// helpers
function waLink(number, text){
  return 'https://wa.me/' + number.replace('+','') + '?text=' + encodeURIComponent(text);
}
function openWA(message){
  const url = waLink(PHONE, message);
  window.open(url, '_blank');
}

/* Populate home/services/gallery when DOM present */
document.addEventListener('DOMContentLoaded', ()=>{
  const sgrid = document.getElementById('servicesGrid');
  if(sgrid){
    SERVICES.slice(0,6).forEach(s=>{
      const d = document.createElement('div');
      d.className='service-card';
      d.innerHTML = `<img src="${s.img}" alt="${s.title}"><h4>${s.title}</h4><p>${s.blurb}</p>`;
      d.onclick = ()=> openWA('Hi Divine Events! I want to book ' + s.title);
      sgrid.appendChild(d);
    });
  }

  const pList = document.getElementById('packagesList');
  if(pList){
    PACKAGES.forEach(p=>{
      const el = document.createElement('div');
      el.className = 'pkg';
      el.innerHTML = `<img src="${p.img}" alt="${p.title}"><div class="meta"><h4>${p.title}</h4><p>${p.desc}</p></div><div style="text-align:right"><div class="price">${p.price}</div><button class="btn primary" onclick="openWA('Hi Divine Events! I want to book ${p.title}')">Book</button></div>`;
      pList.appendChild(el);
    });
  }

  const sFull = document.getElementById('servicesFull');
  if(sFull){
    SERVICES.forEach(s=>{
      const el = document.createElement('div');
      el.className='services-item';
      el.innerHTML = `<img src="${s.img}" alt="${s.title}"><div><h4>${s.title}</h4><p>${s.blurb}</p><p style="margin-top:8px"><button class="btn primary" onclick="openWA('Hi Divine Events! I want to book ${s.title}')">Book</button></p></div>`;
      sFull.appendChild(el);
    });
  }

  const galleryGrid = document.getElementById('galleryGrid');
  if(galleryGrid){
    const tags = ['decor','wedding','mehndi','haldi','balloon','stage','party','lights'];
    for(let i=0;i<12;i++){
      const img = document.createElement('img');
      img.src = 'https://source.unsplash.com/800x800/?' + tags[i % tags.length];
      img.loading = 'lazy';
      img.onclick = ()=> window.open(img.src, '_blank');
      galleryGrid.appendChild(img);
    }
  }

  // header WhatsApp buttons
  const whButtons = document.querySelectorAll('#whHeader, #whHeader2, #whHeader3, #whHeader4, #ctaWhats, #whContact, #whHeader, #whHeader2');
  whButtons.forEach(btn=>{
    if(btn) btn.onclick = (e)=>{ e.preventDefault(); openWA('Hi Divine Events! I would like to enquire about your decoration services.'); }
  });

  // contact form (simple client-side mock)
  const form = document.getElementById('enquiryForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name') || '';
      const phone = fd.get('phone') || '';
      const service = fd.get('service') || '';
      const date = fd.get('date') || '';
      const msg = fd.get('message') || '';
      const text = `Hello Divine Events! Quick enquiry:\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nMessage: ${msg}`;
      openWA(text);
    });
  }

  // update phone visuals
  const phoneEls = document.querySelectorAll('#phoneText, #phoneText2, #phoneText3, #phoneText4');
  phoneEls.forEach(el => { if(el) el.textContent = PHONE; });
});
