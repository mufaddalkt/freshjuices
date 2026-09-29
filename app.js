const juices=[
{name:'Green Reset',price:149,icon:'🥝',cat:'refresh',desc:'Cucumber, green apple, spinach & lime.',benefit:'Hydration + vitamin C + leafy-green folate',tags:['hydrating','vitamin C'],color:'#78c94a',dark:'#2f7d45',accent:'#c9ff45',fruit:'🥝'},
{name:'Ruby Rush',price:169,icon:'🍓',cat:'energy',desc:'Beetroot, strawberry, apple & lemon.',benefit:'Naturally occurring nitrates + antioxidants',tags:['antioxidants','beetroot'],color:'#d62f4f',dark:'#861f3a',accent:'#ff6b7f',fruit:'🍓'},
{name:'Golden Glow',price:159,icon:'🥕',cat:'glow',desc:'Carrot, orange, turmeric & ginger.',benefit:'Beta-carotene + vitamin C + warming ginger',tags:['vitamin A','vitamin C'],color:'#f6a51d',dark:'#b94e18',accent:'#ffe36b',fruit:'🥕'},
{name:'Pink Splash',price:139,icon:'🍉',cat:'refresh',desc:'Watermelon, mint, lime & a tiny pinch of salt.',benefit:'Water-rich refreshment + potassium',tags:['hydration','potassium'],color:'#f35f78',dark:'#b72e55',accent:'#ffd4d9',fruit:'🍉'},
{name:'Purple Power',price:179,icon:'🫐',cat:'glow',desc:'Blueberry, grape, lemon & blackcurrant.',benefit:'Polyphenol-rich fruit + vitamin C',tags:['polyphenols','vitamin C'],color:'#7651bd',dark:'#402675',accent:'#bda1ff',fruit:'🫐'},
{name:'Mango Lift',price:169,icon:'🥭',cat:'energy',desc:'Mango, orange, passion fruit & lime.',benefit:'Vitamin C + beta-carotene + vibrant flavor',tags:['vitamin A','vitamin C'],color:'#f5a51c',dark:'#d46312',accent:'#fff09b',fruit:'🥭'},
{name:'Pineapple Pop',price:149,icon:'🍍',cat:'refresh',desc:'Pineapple, cucumber, lime & basil.',benefit:'Vitamin C + fluid-rich fruit',tags:['fresh','vitamin C'],color:'#e9c83d',dark:'#8a9f28',accent:'#d8ff62',fruit:'🍍'},
{name:'Tomato Tonic',price:139,icon:'🍅',cat:'energy',desc:'Tomato, celery, lemon & black pepper.',benefit:'Potassium + vitamin C + lycopene',tags:['lycopene','potassium'],color:'#e64c38',dark:'#9d2928',accent:'#ff9d76',fruit:'🍅'},
{name:'Peach Cloud',price:159,icon:'🍑',cat:'glow',desc:'Peach, carrot, orange & ginger.',benefit:'Beta-carotene + vitamin C',tags:['vitamin A','citrus'],color:'#f39b72',dark:'#c65c48',accent:'#ffd1b8',fruit:'🍑'},
{name:'Citrus Spark',price:149,icon:'🍋',cat:'energy',desc:'Grapefruit, orange, lemon & mint.',benefit:'Vitamin C + a bright, refreshing finish',tags:['vitamin C','refresh'],color:'#f7c52e',dark:'#d56b20',accent:'#fff5a5',fruit:'🍋'},
{name:'Cucumber Cooler',price:129,icon:'🥒',cat:'refresh',desc:'Cucumber, pear, lime & mint.',benefit:'High-water produce + a light, crisp taste',tags:['hydrating','light'],color:'#8bcf78',dark:'#3b8c65',accent:'#dcff9c',fruit:'🥒'},
{name:'Berry Beam',price:179,icon:'🫐',cat:'glow',desc:'Raspberry, blueberry, apple & lemon.',benefit:'Vitamin C + colorful plant compounds',tags:['antioxidants','berry'],color:'#9b4c91',dark:'#5d2866',accent:'#f1a6d7',fruit:'🫐'}];
const grid=document.querySelector('#juiceGrid');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function bottleSvg(j){const id='b'+juices.indexOf(j);return `<svg viewBox="0 0 240 520" role="img" aria-label="${esc(j.name)} bottle" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${id}" x1="0" x2="1" y1="0" y2="1"><stop stop-color="${j.accent}"/><stop offset=".3" stop-color="${j.color}"/><stop offset="1" stop-color="${j.dark}"/></linearGradient><linearGradient id="${id}s"><stop stop-color="#fff" stop-opacity=".7"/><stop offset=".4" stop-color="#fff" stop-opacity=".08"/></linearGradient></defs><ellipse cx="120" cy="494" rx="66" ry="13" fill="#18241c" opacity=".16"/><path d="M91 82V48c0-13 7-21 18-25h22c11 4 18 12 18 25v34c0 12 5 21 18 32 18 16 27 36 27 66v239c0 31-16 49-43 57-19 6-39 6-58 0-27-8-43-26-43-57V180c0-30 9-50 27-66 13-11 18-20 18-32Z" fill="url(#${id})" stroke="#18241c" stroke-width="5"/><path d="M101 55h38v31h-38z" fill="#18241c" opacity=".92"/><rect x="96" y="38" width="48" height="20" rx="5" fill="#18241c"/><rect x="64" y="184" width="112" height="180" rx="14" fill="#fff8e9" stroke="#18241c" stroke-width="4"/><rect x="68" y="188" width="104" height="26" rx="9" fill="${j.dark}"/><text x="120" y="207" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" font-weight="800" fill="#fff8e9" letter-spacing="2">FRESHJUICES</text><text x="120" y="248" text-anchor="middle" font-family="Georgia,serif" font-size="21" font-weight="700" fill="#18241c">${esc(j.name)}</text><circle cx="120" cy="287" r="30" fill="${j.color}"/><text x="120" y="299" text-anchor="middle" font-size="31">${j.fruit}</text><text x="120" y="337" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" font-weight="700" fill="#18241c" letter-spacing="1.4">FRESH • SIMPLE • BRIGHT</text><path d="M79 122c-8 43-9 258-2 311" stroke="url(#${id}s)" stroke-width="12" stroke-linecap="round" fill="none"/><path d="M91 95h58" stroke="#fff" stroke-opacity=".3" stroke-width="3" stroke-linecap="round"/></svg>`}
function setHero(j){const hero=document.querySelector('#heroBottle'),caption=document.querySelector('.bottle-caption');if(!hero)return;hero.innerHTML=bottleSvg(j);caption.querySelector('span').textContent=`FEATURED BLEND / ${String(juices.indexOf(j)+1).padStart(2,'0')}`;caption.querySelector('strong').innerHTML=esc(j.name).replace(' ','<br>');caption.querySelector('small').textContent=j.desc.replace(', ',' · ').replace(' & ',' · ');hero.setAttribute('aria-label',`${j.name} juice bottle`);if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)hero.animate([{transform:'scale(.9) rotate(-2deg)'},{transform:'scale(1) rotate(0)'}],{duration:500,easing:'cubic-bezier(.2,.8,.2,1)'})}

const fruitParticles={
  '🥒':['🥒','🥒','🌿'],'🍓':['🍓','🍓','❤️'],'🥕':['🥕','🥕','✨'],'🍉':['🍉','🍉','🌿'],'🫐':['🫐','🫐','💜'],'🥭':['🥭','🥭','✨'],'🍍':['🍍','🍍','🌿'],'🍅':['🍅','🍅','🌿'],'🍑':['🍑','🍑','✨'],'🍋':['🍋','🍋','🍃'],'🥝':['🥝','🥝','🌿']
};
let activeBurst=null;
function clearParticles(){if(!activeBurst)return;activeBurst.forEach(p=>p.remove());activeBurst=null}
function burstParticles(card,j){
  clearParticles();
  const symbols=fruitParticles[j.fruit]||[j.fruit];
  const rect=card.getBoundingClientRect();
  const particles=[];
  const count=32;
  for(let n=0;n<count;n++){
    const p=document.createElement('span');
    p.className='fall-particle';
    p.textContent=symbols[n%symbols.length];
    p.style.position='fixed';
    p.style.zIndex='99999';
    p.style.pointerEvents='none';
    p.style.left='0';
    p.style.top='0';
    p.style.fontSize=(20+Math.random()*16)+'px';
    p.style.lineHeight='1';
    p.style.willChange='transform,opacity';
    document.body.appendChild(p);
    const side=n%4;
    let sx,sy,dx,dy;
    if(side===0){sx=rect.left+Math.random()*rect.width*.18;sy=rect.top+Math.random()*rect.height;dx=-(90+Math.random()*190);dy=Math.random()*220-110}
    else if(side===1){sx=rect.right-Math.random()*rect.width*.18;sy=rect.top+Math.random()*rect.height;dx=90+Math.random()*190;dy=Math.random()*220-110}
    else if(side===2){sx=rect.left+Math.random()*rect.width;sy=rect.top+Math.random()*rect.height*.18;dx=Math.random()*220-110;dy=-(90+Math.random()*190)}
    else{sx=rect.left+Math.random()*rect.width;sy=rect.bottom-Math.random()*rect.height*.18;dx=Math.random()*220-110;dy=90+Math.random()*190}
    particles.push({el:p,sx,sy,dx,dy,rot:Math.random()*720-360,delay:Math.random()*120,start:performance.now()});
  }
  activeBurst=particles.map(x=>x.el);
  const start=performance.now();
  function frame(now){
    if(!activeBurst)return;
    let alive=false;
    particles.forEach(q=>{
      const t=Math.max(0,Math.min(1,(now-start-q.delay)/850));
      if(t<1){
        alive=true;
        const ease=1-Math.pow(1-t,3);
        q.el.style.transform=`translate3d(${q.sx+q.dx*ease}px,${q.sy+q.dy*ease}px,0) rotate(${q.rot*ease}deg) scale(${.7+ease*.45})`;
        q.el.style.opacity=String(t<.08?t/.08:1-t);
      }
    });
    if(alive)requestAnimationFrame(frame);else clearParticles();
  }
  requestAnimationFrame(frame);
}

function render(filter='all'){const list=juices.filter(j=>filter==='all'||j.cat===filter);grid.innerHTML=list.map(j=>`<article class="juice" role="button" tabindex="0" aria-label="Explore ${esc(j.name)}" data-name="${esc(j.name)}" style="--juice-bg:${j.color};--juice-border:${j.dark};--juice-accent:${j.accent};"><div class="juice-bottle">${bottleSvg(j)}</div><div class="juice-copy"><div class="juice-number">BLEND / ${String(juices.indexOf(j)+1).padStart(2,'0')}</div><h3>${esc(j.name)}</h3><p>${esc(j.desc)}</p><div class="tags">${j.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><div class="benefit">✦ ${esc(j.benefit)}</div><div class="card-buy"><strong>₹${j.price}</strong><button class="add-button" type="button" data-add="${esc(j.name)}">Add to cart <span>+</span></button></div></div></article>`).join('');list.forEach(j=>{const card=grid.querySelector(`[data-name="${CSS.escape(j.name)}"]`);if(!card)return;const explore=()=>{setHero(j);document.querySelector('#top').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})};card.addEventListener('mouseenter',()=>burstParticles(card,j));card.addEventListener('mouseleave',()=>clearParticles(card));card.addEventListener('click',e=>{if(e.target.closest('.add-button'))return;explore()});card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();explore()}})})}
render();
document.querySelector('#filters').addEventListener('click',e=>{if(!e.target.matches('button'))return;document.querySelectorAll('#filters button').forEach(b=>{const active=b===e.target;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});render(e.target.dataset.filter)});
document.querySelector('#shuffleBtn').addEventListener('click',()=>{const j=juices[Math.floor(Math.random()*juices.length)];setHero(j);const toast=document.querySelector('#toast');toast.textContent=`Featured: ${j.name}`;toast.classList.add('show');document.querySelector('#juices').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});setTimeout(()=>toast.classList.remove('show'),2600)});
setHero(juices[5]);
const cart=[];
const cartOverlay=document.querySelector('#cartOverlay'),checkoutOverlay=document.querySelector('#checkoutOverlay');
const cartItems=document.querySelector('#cartItems'),cartTotal=document.querySelector('#cartTotal'),cartCount=document.querySelector('#cartCount');
const checkoutTotal=document.querySelector('#checkoutTotal'),checkoutSummary=document.querySelector('#checkoutSummary');
const money=n=>`₹${n.toLocaleString('en-IN')}`;
const cartQuantity=()=>cart.reduce((s,i)=>s+i.qty,0),cartAmount=()=>cart.reduce((s,i)=>s+i.price*i.qty,0);
function updateCartUI(){const count=cartQuantity(),total=cartAmount();cartCount.textContent=count;cartTotal.textContent=money(total);checkoutTotal.textContent=money(total);checkoutSummary.textContent=`${count} blend${count===1?'':'s'} · fresh to your door`;document.querySelectorAll('.add-button').forEach(b=>{const item=cart.find(i=>i.name===b.dataset.add);const qty=item?item.qty:0;b.innerHTML=qty?'Add to cart <span>'+qty+'</span>':'Add to cart <span>+</span>';});cartItems.innerHTML=cart.length?cart.map(i=>`<div class="cart-item"><div class="mini-bottle" style="--mini-bg:${i.color};--mini-dark:${i.dark};"><span>${i.fruit}</span></div><div class="cart-item-info"><strong>${esc(i.name)}</strong><small>${money(i.price)} each</small><div class="qty"><button type="button" data-cart-action="minus" data-name="${esc(i.name)}">−</button><span>${i.qty}</span><button type="button" data-cart-action="plus" data-name="${esc(i.name)}">+</button><button class="remove" type="button" data-cart-action="remove" data-name="${esc(i.name)}">Remove</button></div></div><strong class="line-total">${money(i.price*i.qty)}</strong></div>`).join(''):`<div class="empty-cart"><span>🥤</span><h3>Your cart is still bright.</h3><p>Pick a blend from the juice bar and it will appear here.</p><button class="checkout-button secondary" type="button" id="emptyBrowse">Browse blends <span>↓</span></button></div>`;}
function addToCart(name,card){const j=juices.find(x=>x.name===name);if(!j)return;const item=cart.find(x=>x.name===name);if(item)item.qty++;else cart.push({...j,qty:1});updateCartUI();if(card)burstParticles(card,j);});updateCartUI();const t=document.querySelector('#toast');t.textContent=`${j.name} added to cart`;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200);}
function openCart(){updateCartUI();cartOverlay.hidden=false;document.body.classList.add('modal-open')}function closeCart(){cartOverlay.hidden=true;if(checkoutOverlay.hidden)document.body.classList.remove('modal-open')}function openCheckout(){if(!cart.length){openCart();return}updateCartUI();cartOverlay.hidden=true;checkoutOverlay.hidden=false;document.body.classList.add('modal-open')}function closeCheckout(){checkoutOverlay.hidden=true;document.body.classList.remove('modal-open')}
document.querySelector('#juiceGrid').addEventListener('click',e=>{const b=e.target.closest('.add-button');if(b){const card=b.closest('.juice');addToCart(b.dataset.add,card)}});
document.querySelector('#cartBtn').addEventListener('click',openCart);document.querySelector('#closeCart').addEventListener('click',closeCart);document.querySelector('#checkoutBtn').addEventListener('click',openCheckout);document.querySelector('#closeCheckout').addEventListener('click',closeCheckout);
cartItems.addEventListener('click',e=>{if(e.target.id==='emptyBrowse'){closeCart();document.querySelector('#juices').scrollIntoView({behavior:'smooth'});return}const b=e.target.closest('[data-cart-action]');if(!b)return;const item=cart.find(x=>x.name===b.dataset.name);if(!item)return;if(b.dataset.cartAction==='plus')item.qty++;if(b.dataset.cartAction==='minus'){item.qty--;if(item.qty<=0)cart.splice(cart.indexOf(item),1)}if(b.dataset.cartAction==='remove')cart.splice(cart.indexOf(item),1);updateCartUI()});
document.querySelector('#checkoutForm').addEventListener('submit',e=>{e.preventDefault();if(!cart.length)return;const id='FJ-'+Math.random().toString(36).slice(2,8).toUpperCase();checkoutOverlay.querySelector('.checkout-card').innerHTML=`<div class="order-success"><div class="success-mark">✓</div><p class="eyebrow">ORDER RECEIVED</p><h2>Fresh choice,<br><em>coming up.</em></h2><p>Your demo order <strong>#${id}</strong> has been placed. Nothing has been charged.</p><button class="checkout-button" type="button" id="doneOrder">Back to FreshJuices <span>↗</span></button></div>`;cart.length=0;updateCartUI();document.querySelector('#doneOrder').addEventListener('click',closeCheckout)});
[cartOverlay,checkoutOverlay].forEach(o=>o.addEventListener('click',e=>{if(e.target===o)(o===cartOverlay?closeCart():closeCheckout())}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!cartOverlay.hidden)closeCart();if(!checkoutOverlay.hidden)closeCheckout()}});updateCartUI();
