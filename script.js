const words=["Web Developer","AI Enthusiast","Problem Solver"];

let i=0;
let timer;

function typingEffect(){

let word=words[i].split("");

let loopTyping=function(){

if(word.length>0){
document.getElementById("typing").innerHTML+=word.shift();
}else{
deletingEffect();
return false;
}

timer=setTimeout(loopTyping,150);

}

loopTyping();

}

function deletingEffect(){

let word=words[i].split("");

let loopDeleting=function(){

if(word.length>0){

word.pop();

document.getElementById("typing").innerHTML=word.join("");

}else{

if(words.length>(i+1)){
i++;
}else{
i=0;
}

typingEffect();
return false;

}

timer=setTimeout(loopDeleting,100);

}

loopDeleting();

}
const text = ["AI Developer","Web Developer","Tech Enthusiast"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,1000);

})();
const canvas = document.getElementById("cursorCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

document.addEventListener("mousemove", function(e){

for(let i=0;i<5;i++){

particles.push({
x:e.clientX,
y:e.clientY,
size:Math.random()*4+1,
speedX:(Math.random()-0.5)*2,
speedY:(Math.random()-0.5)*2,
life:100
});

}

});

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=0;i<particles.length;i++){

let p = particles[i];

ctx.fillStyle="#00f2ff";
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

p.x += p.speedX;
p.y += p.speedY;
p.life--;

if(p.life<=0){
particles.splice(i,1);
i--;
}

}

requestAnimationFrame(animate);

}

animate();

typingEffect();