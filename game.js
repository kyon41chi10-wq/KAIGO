
const discoveries=[
{id:'001',title:'さっき食べてない',coin:10},
{id:'002',title:'配膳ミス恐怖症',coin:10},
{id:'003',title:'お茶だけ人気',coin:10}
];

let save=JSON.parse(localStorage.getItem('kaigoSave'))||{
coins:0,
discoveries:[]
};

updateUI();

function hideAll(){
document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden'));
}

function showStageSelect(){
hideAll();
document.getElementById('stageSelect').classList.remove('hidden');
updateDictionary();
}

function startStage(){
hideAll();
document.getElementById('gameScreen').classList.remove('hidden');
}

function showDictionary(){
hideAll();
document.getElementById('dictionaryScreen').classList.remove('hidden');
updateDictionary();
}

function discover(index){
const d=discoveries[index];

if(save.discoveries.includes(d.id)){
alert('既に発見済み！');
return;
}

save.discoveries.push(d.id);
save.coins+=d.coin;

localStorage.setItem('kaigoSave',JSON.stringify(save));

alert('発見！ '+d.title+'\nコイン+'+d.coin);

updateUI();
}

function updateUI(){
document.getElementById('coins').textContent=save.coins;
}

function updateDictionary(){
const ul=document.getElementById('dictionary');
ul.innerHTML='';

discoveries.forEach(d=>{
const li=document.createElement('li');
li.textContent=save.discoveries.includes(d.id)
? d.id+' '+d.title
: d.id+' ?????';
ul.appendChild(li);
});
}
