
const discoveries=[
{id:'001',title:'さっき食べてない',coin:10},
{id:'002',title:'おかわり希望',coin:10},
{id:'003',title:'配膳ミス恐怖症',coin:10},
{id:'004',title:'デザート即完売',coin:20},
{id:'005',title:'お茶だけ人気',coin:10}
];

let save=JSON.parse(localStorage.getItem('kaigoSaveV02'))||{
coins:0,discoveries:[]
};

document.querySelectorAll('.obj').forEach(o=>{
o.addEventListener('click',()=>discover(o.dataset.id,o));
});

updateUI();

function hideAll(){
document.querySelectorAll('.screen').forEach(x=>x.classList.add('hidden'));
}

function showStageSelect(){
hideAll();
document.getElementById('stageSelect').classList.remove('hidden');
updateDictionary();
}

function startStage(){
hideAll();
document.getElementById('gameScreen').classList.remove('hidden');
refreshFound();
}

function showDictionary(){
hideAll();
document.getElementById('dictionaryScreen').classList.remove('hidden');
updateDictionary();
}

function discover(id,obj){
let d=discoveries.find(x=>x.id===id);
if(save.discoveries.includes(id)) return;

save.discoveries.push(id);
save.coins+=d.coin;

localStorage.setItem('kaigoSaveV02',JSON.stringify(save));

document.getElementById('popupTitle').textContent=d.title;
document.getElementById('popup').classList.remove('hidden');

updateUI();
refreshFound();
}

function closePopup(){
document.getElementById('popup').classList.add('hidden');
}

function updateDictionary(){
const ul=document.getElementById('dictionary');
ul.innerHTML='';
discoveries.forEach(d=>{
let li=document.createElement('li');
li.textContent=save.discoveries.includes(d.id)?d.title:'?????';
ul.appendChild(li);
});
}

function updateUI(){
document.getElementById('coins').textContent=save.coins;
document.getElementById('rate').textContent=Math.floor(save.discoveries.length/discoveries.length*100);
}

function refreshFound(){
document.querySelectorAll('.obj').forEach(o=>{
if(save.discoveries.includes(o.dataset.id)){
o.classList.add('found');
}
});
}

