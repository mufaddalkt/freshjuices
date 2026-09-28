import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

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

// Asset-free interactive 3D bottle built procedurally with Three.js.
const stage=document.querySelector('#bottleStage'),canvas=document.querySelector('#bottleCanvas');
if(stage&&canvas){
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(28,1,.1,100);camera.position.set(0,.15,7.6);
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;
 const group=new THREE.Group();scene.add(group);
 const profile=[[-1.25,0],[-1.3,.18],[-1.28,2.65],[-1.02,2.82],[-.63,2.96],[-.46,3.18],[-.43,3.9],[-.27,4.08],[.27,4.08],[.43,3.9],[.46,3.18],[.63,2.96],[1.02,2.82],[1.28,2.65],[1.3,.18],[1.25,0]];
 const pts=profile.map(([r,y])=>new THREE.Vector2(r,y));const bottleGeo=new THREE.LatheGeometry(pts,64);bottleGeo.translate(0,-2.04,0);
 const bottle=new THREE.Mesh(bottleGeo,new THREE.MeshPhysicalMaterial({color:0xffa32f,roughness:.22,metalness:.04,transmission:.08,thickness:.35,clearcoat:.5,clearcoatRoughness:.18}));group.add(bottle);
 const cap=new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,.38,48),new THREE.MeshStandardMaterial({color:0x18241c,roughness:.3}));cap.position.y=2.38;group.add(cap);
 const neckRing=new THREE.Mesh(new THREE.TorusGeometry(.49,.055,12,48),new THREE.MeshStandardMaterial({color:0xc9ff45,roughness:.25}));neckRing.position.y=2.17;group.add(neckRing);
 const label=new THREE.Mesh(new THREE.CylinderGeometry(1.265,1.265,.78,64,1,true),new THREE.MeshStandardMaterial({color:0xfff8e9,roughness:.5}));label.rotation.x=Math.PI/2;label.position.y=-.35;group.add(label);
 const labelBand=new THREE.Mesh(new THREE.CylinderGeometry(1.29,1.29,.08,64,1,true),new THREE.MeshStandardMaterial({color:0xff654f,roughness:.35}));labelBand.rotation.x=Math.PI/2;labelBand.position.y=.05;group.add(labelBand);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(1.31,.025,8,64),new THREE.MeshBasicMaterial({color:0x18241c}));ring.rotation.x=Math.PI/2;ring.position.y=-.74;group.add(ring);
 const light1=new THREE.DirectionalLight(0xffffff,3.2);light1.position.set(3,5,5);scene.add(light1);const light2=new THREE.DirectionalLight(0xff654f,1.6);light2.position.set(-4,1,2);scene.add(light2);scene.add(new THREE.AmbientLight(0xffffff,1.3));
 const pointer={x:0,y:0};let targetX=0,targetY=0,dragging=false,lastX=0;
 stage.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;stage.setPointerCapture(e.pointerId)});stage.addEventListener('pointerup',()=>dragging=false);stage.addEventListener('pointercancel',()=>dragging=false);
 stage.addEventListener('pointermove',e=>{if(dragging){group.rotation.y+=(e.clientX-lastX)*.012;lastX=e.clientX}else{const r=stage.getBoundingClientRect();pointer.x=(e.clientX-r.left)/r.width-.5;pointer.y=(e.clientY-r.top)/r.height-.5;targetX=pointer.x*.35;targetY=pointer.y*.18}});
 function resize(){const r=stage.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix()}window.addEventListener('resize',resize);resize();
 const clock=new THREE.Clock();function animate(){const t=clock.getElapsedTime();group.position.y=Math.sin(t*1.25)*.07;group.rotation.x+=(targetY-group.rotation.x)*.035;if(!dragging)group.rotation.y+=(targetX+Math.sin(t*.45)*.025-group.rotation.y)*.035;renderer.render(scene,camera);requestAnimationFrame(animate)}animate();
}
