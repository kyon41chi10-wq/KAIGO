const discoveries = [
{
id:“001”,
title:“さっき食べてない”,
text:”『まだ食べてないよ』と数分前の食事を忘れてしまうことも。”,
coin:10
},
{
id:“002”,
title:“配膳ミス恐怖症”,
text:“配膳直前は職員みんなで最終確認。”,
coin:10
},
{
id:“003”,
title:“お茶だけ人気”,
text:“お茶だけ先になくなることがある。”,
coin:10
}
];

localStorage.removeItem(“kaigoSave”);

let saveData = {
coins:0,
found:[]
};

updateUI();

function discover(index,obj){

const item = discoveries[index];

if(saveData.found.includes(item.id)){
return;
}

saveData.found.push(item.id);

saveData.coins += item.coin;

obj.classList.add(“found”);

updateUI();

document.getElementById(
“popupTitle”
).textContent = item.title;

document.getElementById(
“popupText”
).textContent =
item.text + “ +” + item.coin + “コイン”;

document.getElementById(
“popup”
).classList.remove(“hidden”);

checkClear();

}

function miss(){
alert(“特に変わった様子はない”);
}

function closePopup(){
document.getElementById(“popup”).classList.add(“hidden”);
}

function showDictionary(){

updateDictionary();

document.getElementById(
“dictionaryModal”
).classList.remove(“hidden”);

}

function hideDictionary(){

document.getElementById(
“dictionaryModal”
).classList.add(“hidden”);

}

function updateDictionary(){

const list =
document.getElementById(
“dictionaryList”
);

list.innerHTML = “”;

discoveries.forEach(item=>{

const li =
document.createElement(“li”);

if(saveData.found.includes(item.id)){
li.textContent =
item.id + “ “ + item.title;
}else{
li.textContent =
item.id + “ ?????”;
}

list.appendChild(li);

});

}

function updateUI(){

document.getElementById(
“coinDisplay”
).textContent =
saveData.coins;

document.getElementById(
“foundDisplay”
).textContent =
saveData.found.length;

}

function checkClear(){

if(
saveData.found.length >=
discoveries.length
){

document.getElementById(
“clearModal”
).classList.remove(“hidden”);

}

}

function closeClear(){

document.getElementById(
“clearModal”
).classList.add(“hidden”);

}
