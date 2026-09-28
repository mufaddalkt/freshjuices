const juices=[
{name:'Green Reset',icon:'🥝',cat:'refresh',desc:'Cucumber, green apple, spinach & lime.',benefit:'Hydration + vitamin C + leafy-green folate',tags:['hydrating','vitamin C']},
{name:'Ruby Rush',icon:'🍓',cat:'energy',desc:'Beetroot, strawberry, apple & lemon.',benefit:'Naturally occurring nitrates + antioxidants',tags:['antioxidants','beetroot']},
{name:'Golden Glow',icon:'🥕',cat:'glow',desc:'Carrot, orange, turmeric & ginger.',benefit:'Beta-carotene + vitamin C + warming ginger',tags:['vitamin A','vitamin C']},
{name:'Pink Splash',icon:'🍉',cat:'refresh',desc:'Watermelon, mint, lime & a tiny pinch of salt.',benefit:'Water-rich refreshment + potassium',tags:['hydration','potassium']},
{name:'Purple Power',icon:'🫐',cat:'glow',desc:'Blueberry, grape, lemon & blackcurrant.',benefit:'Polyphenol-rich fruit + vitamin C',tags:['polyphenols','vitamin C']},
{name:'Mango Lift',icon:'🥭',cat:'energy',desc:'Mango, orange, passion fruit & lime.',benefit:'Vitamin C + beta-carotene + vibrant flavor',tags:['vitamin A','vitamin C']},
{name:'Pineapple Pop',icon:'🍍',cat:'refresh',desc:'Pineapple, cucumber, lime & basil.',benefit:'Vitamin C + fluid-rich fruit',tags:['fresh','vitamin C']},
{name:'Tomato Tonic',icon:'🍅',cat:'energy',desc:'Tomato, celery, lemon & black pepper.',benefit:'Potassium + vitamin C + lycopene',tags:['lycopene','potassium']},
{name:'Peach Cloud',icon:'🍑',cat:'glow',desc:'Peach, carrot, orange & ginger.',benefit:'Beta-carotene + vitamin C',tags:['vitamin A','citrus']},
{name:'Citrus Spark',icon:'🍋',cat:'energy',desc:'Grapefruit, orange, lemon & mint.',benefit:'Vitamin C + a bright, refreshing finish',tags:['vitamin C','refresh']},
{name:'Cucumber Cooler',icon:'🥒',cat:'refresh',desc:'Cucumber, pear, lime & mint.',benefit:'High-water produce + a light, crisp taste',tags:['hydrating','light']},
{name:'Berry Beam',icon:'🫐',cat:'glow',desc:'Raspberry, blueberry, apple & lemon.',benefit:'Vitamin C + colorful plant compounds',tags:['antioxidants','berry']}
];
const grid=document.querySelector('#juiceGrid');
function render(filter='all'){grid.innerHTML=juices.filter(j=>filter==='all'||j.cat===filter).map(j=>`<article class="juice"><div><div class="juice-icon">${j.icon}</div><h3>${j.name}</h3><p>${j.desc}</p><div class="tags">${j.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div><div class="benefit">✦ ${j.benefit}</div></article>`).join('')}
render();
document.querySelector('#filters').addEventListener('click',e=>{if(!e.target.matches('button'))return;document.querySelectorAll('#filters button').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');render(e.target.dataset.filter)});
document.querySelector('#shuffleBtn').addEventListener('click',()=>{const j=juices[Math.floor(Math.random()*juices.length)];const toast=document.querySelector('#toast');toast.textContent=`Try ${j.name} — ${j.benefit}`;toast.classList.add('show');document.querySelector('#juices').scrollIntoView({behavior:'smooth'});setTimeout(()=>toast.classList.remove('show'),3200)});