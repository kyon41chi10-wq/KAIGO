const data=[
{id:'001',title:'さっき食べてない',coin:10},
{id:'002',title:'配膳ミス恐怖症',coin:10},
{id:'003',title:'お茶だけ人気',coin:10}
];

let save=JSON.parse(localStorage.getItem('kaigoSave'))||{
coins:0,
found:[]
};

update();

function discover(i,obj){

const d=data[i];

if(save.found.includes(d.id)){
alert('既に発見済み');
return;
}

save.found.push(d.id);
save.coins+=d.coin;

obj.classList.add('found');

store();

alert(
'発見！\n\n'+
d.title+
'\n\n+'+
d.coin+
'コイン'
);

if(save.found.length>=3){
setTimeout(()=>{
alert('ステージクリア！');
},300);
}

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
localStorage.setItem(
'kaigoSave',
JSON.stringify(save)
);
}

function showDictionary(){
document
.getElementById('dictionary')
.classList
.remove('hidden');
}

function hideDictionary(){
document
.getElementById('dictionary')
.classList
.add('hidden');
}

function updateDictionary(){

const list=document.getElementById('list');

if(!list)return;

list.innerHTML='';

save.found.forEach(id=>{

const d=data.find(x=>x.id===id);

const li=document.createElement('li');

li.textContent=
id+' '+d.title;

list.appendChild(li);

});

}
