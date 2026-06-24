const data=[
{id:'001',title:'さっき食べてない',coin:10},
{id:'002',title:'配膳ミス恐怖症',coin:10},
{id:'003',title:'お茶だけ人気',coin:10}
];

let save=JSON.parse(localStorage.getItem('kaigoSave'))||{
coins:0,found:[]
};

update();

function discover(i){
const d=data[i];
if(save.found.includes(d.id)){
alert('既に発見済み');
return;
}
save.found.push(d.id);
save.coins+=d.coin;
store();
alert('発見！ '+d.title+'\n+'+d.coin+'コイン');
update();
}

function miss(){
alert('特に変わった様子はない');
}

function update(){
document.getElementById('coins').textContent=save.coins;
updateDictionary();
}

function store(){
localStorage.setItem('kaigoSave',JSON.stringify(save));
}

function showDictionary(){
document.getElementById('dictionary').classList.remove('hidden');
}

function hideDictionary(){
document.getElementById('dictionary').classList.add('hidden');
}

function updateDictionary(){
const list=document.getElementById('list');
if(!list)return;
list.innerHTML='';
save.found.forEach(id=>{
const d=data.find(x=>x.id===id);
const li=document.createElement('li');
li.textContent=id+' '+d.title;
list.appendChild(li);
});
}
