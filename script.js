var container=document.getElementById("container");
var cont=document.getElementById("cont");
var btn=document.getElementById('btn');
var audio=document.getElementById('audio');
audio.controls=false;
audio.pause();
var arr= ["Sometimes, you need some rest.",
"Today is good? tomorrow will be better if you smile.",
"Don't be crowd, this world has need fighters more.",
"Learn as if you will live forever, live like you will die tomorrow.",
"When you change your thoughts, remember to also change your world.",
"Success is not final; failure is not fatal: It is the courage to continue that counts.",
"Don't let yesterday take up too much of today.",
"We don't just sit around and wait for other people. We just make, and we do.",
"Life is like a sewer… what you get out of it depends on what you put into it.",
"Opportunities don't happen, you create them.",
"It is never too late to be what you might have been.",
"Show up, show up, show up, and after a while the muse shows up, too.",
"If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
"Do not wait for the perfect time and place to enter, for you are already onstage."];
  let Start=()=> { let newElement=document.createElement("h3");
let text=document.createTextNode("take it");
btn.style.display="none";
audio.play();
setTimeout(()=>{
    container.innerHTML="Count With Us";
},3000);

setTimeout(()=>{
    container.innerHTML="1";
},4000);
setTimeout(()=>{
    container.innerHTML="2";
},5000);
setTimeout(()=>{
    container.innerHTML="3";
},6000);
setTimeout(()=>{
    container.innerHTML="4";
},7000);
setTimeout(()=>{
    container.innerHTML="5";
},8000);
setTimeout(()=>{
    container.innerHTML="6";
},9000);
setTimeout(()=>{
    container.innerHTML="7";
},10000);
setTimeout(()=>{
    container.innerHTML="8";
},11000);
setTimeout(()=>{
    container.innerHTML="9";
},12000);
setTimeout(()=>{
    container.innerHTML="10";
},13000);
setTimeout(()=>{
    container.innerHTML="Take another breath";
},14000);
setTimeout(()=>{
    container.innerHTML="Focus";
},17000);
setTimeout(()=>{
    container.innerHTML="ON";
},18000);
setTimeout(()=>{
    container.innerHTML="The";
},19000);
setTimeout(()=>{
    container.innerHTML="Coming Sentence";
},20000);

setTimeout(()=>{
    container.innerHTML=arr[Math.floor(Math.random()*13)];
},21000);

setTimeout(()=>{
    newElement.appendChild(text);
    cont.appendChild(newElement);
},21500);
setTimeout(()=>{
    alert('THANKS FOR YOUR TIME')
    location.reload();

},28000);
}











