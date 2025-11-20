// app.js — Shared JS for Divine Events multi-page starter
const PHONE = "+917067869093"; // <- change this to your WhatsApp number

// Common data
const SERVICES = [
  {id:'haldi', title:'Haldi Ceremony', img:'https://images.pexels.com/photos/17215160/pexels-photo-17215160/free-photo-of-colorful-decorations-for-haldi-ceremony.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', blurb:'Bright floral haldi themes & comfy seating.'},
  {id:'mehndi', title:'Mehndi Ceremony', img:'https://images.pexels.com/photos/10363248/pexels-photo-10363248.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', blurb:'Colorful mehndi setups with traditional props.'},
  {id:'baby', title:'Baby Shower', img:'https://images.pexels.com/photos/18256515/pexels-photo-18256515/free-photo-of-party-with-decorations-and-food.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', blurb:'Soft pastel baby shower themes with props.'},
  {id:'birthday', title:'Birthday Decoration', img:'https://images.pexels.com/photos/20741270/pexels-photo-20741270/free-photo-of-pink-balloons-decorations.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', blurb:'Theme based birthday décor with balloons & lights.'},
  {id:'marriage', title:'Marriage / Reception', img:'https://images.pexels.com/photos/1691963/pexels-photo-1691963.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', blurb:'Elegant reception themes, lighting & florals.'},
  {id:'prewedding', title:'Pre-Wedding / Couple Décor', img:'https://images.pexels.com/photos/20349886/pexels-photo-20349886/free-photo-of-two-people-posing-in-pre-wedding-photoshoot-setup.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', blurb:'Romantic pre-wedding setups for photos & parties.'},
  {id:'bride', title:'Bride-to-be / Groom-to-be', img:'https://images.pexels.com/photos/1570773/pexels-photo-1570773.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', blurb:'Specialised themes celebrating the bride/groom.'},
  {id:'anniversary', title:'Anniversary', img:'https://images.pexels.com/photos/10363259/pexels-photo-10363259.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', blurb:'Anniversary decorations with candlelight & florals.'},
  {id:'kids', title:'Kids Theme Décor', img:'https://images.pexels.com/photos/7421115/pexels-photo-7421115.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', blurb:'Fun themed setups for kids with safe props.'},
  {id:'balloon', title:'Balloon Décor', img:'https://images.pexels.com/photos/7317351/pexels-photo-7317351.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', blurb:'Balloon arches, garlands & installations.'},
  {id:'other', title:'Other Decorations', img:'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', blurb:'Custom decor for unique requests.'}
];

const PACKAGES = [
  {id:'p1', title:'Sunshine Haldi (Basic)', desc:'Simple floral haldi with backdrop & seating', price:'₹2,500', img:'https://images.pexels.com/photos/20473956/pexels-photo-20473956/free-photo-of-yellow-and-orange-marigold-flowers-on-a-white-backdrop.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'},
  {id:'p2', title:'Mehndi Glam (Standard)', desc:'Vibrant mehndi setup, rugs & props', price:'₹9,999', img:'https://images.pexels.com/photos/10850069/pexels-photo-10850069.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'},
  {id:'p3', title:'Couple Glow (Premium)', desc:'Luxury pre-wedding décor & lighting', price:'₹24,999', img:'https://images.pexels.com/photos/10363261/pexels-photo-10363261.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'},
  {id:'p4', title:'Baby Shower Bliss', desc:'Pretty pastel baby shower theme', price:'₹7,499', img:'https://images.pexels.com/photos/18256488/pexels-photo-18256488/free-photo-of-white-and-pink-baby-shower-decorations.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'},
  {id:'p5', title:'Birthday Spark', desc:'Theme based birthday décor with balloon art', price:'₹4,999', img:'https://images.pexels.com/photos/16840616/pexels-photo-16840616/free-photo-of-golden-balloon-numbers-decor.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'}
];

// helpers
function waLink(number, text){
  return 'https://wa.me/' + number.replace('+','') + '?text=' + encodeURIComponent(text);
}
function openWA(message){
  const url = waLink(PHONE, message);
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split("/").pop();
  document.querySelectorAll(".tab").forEach(tab => {
    if(tab.getAttribute("href") === path){
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
});

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
    const tags = ['indian wedding decor','mehndi ceremony setup','haldi yellow flowers','birthday party balloons','stage decoration lights','anniversary candlelight setup'];
    for(let i=0;i<12;i++){
      const img = document.createElement('img');
      // Using Pexels for more relevant, fixed-size images for the gallery
      img.src = 'https://images.pexels.com/photos/' + (Math.floor(Math.random() * 20000000) + 10000000) + '/pexels-photo-' + (Math.floor(Math.random() * 20000000) + 10000000) + '.jpeg?auto=compress&cs=tinysrgb&h=800&w=800'; // Random Pexels ID for variety
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
