let photo = [
 "photo1.jpg",
 "photo2.jpg",
 "photo3.jpg",
 "photo4.jpg",
  "photo5.jpg",
 "photo6.jpg",
 "photo7.jpg",
 "photo8.jpg",
  "photo9.jpg",
 "photo10.jpg",
 "photo11.jpg",
 "photo12.jpg",
  "photo13.jpg",
 "photo14.jpg",
 "photo15.jpg",
 "photo16.jpg",
  "photo17.jpg",
 "photo18.jpg",
 "photo19.jpg",
 "photo20.jpg",
  "photo21.jpg",
 "photo22.jpg"
];

let pIndex = 0;

let text ="You are the most special person in my life ❤️";
let index = 0;

function showMessage(){
    document.getElementById("music").play();
    let speed = 50;

    let typing = setInterval(function(){
        if(index < text.length){
            document.getElementById("msg").innerHTML += text.charAt(index);
            index++;
        }
        else{
            clearInterval(typing);
            createBalloons();
            createFireworks();
            createConfetti();
            showCake();

        }
    },speed)
}

function createBalloons(){
    for(let i = 0; i<20; i++){
        let balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = Math.random()*100+"vw";
        balloon.style.background = "hsl("+Math.random()*360+",70%,60%)";
        balloon.style.animationDuration = (4+Math.random()*4)+"s";

        document.body.appendChild(balloon);
    }
}

function createFireworks(){
    let container = document.getElementById("fireworks");

    for(let i = 0; i<80; i++){
        let fire = document.createElement("div");
        fire.className = "fire";

        let x = (Math.random() -0.5)*400+"px";
        let y = (Math.random() -0.5)*400+"px";

        fire.style.left = Math.random()*100 + "vw";
        fire.style.top = Math.random()*100 + "vh";
        fire.style.background = "hsl("+ Math.random()*360 + ",100%,50%)";

        fire.style.setProperty("--x",x);
        fire.style.setProperty("--y",y);

        container.appendChild(fire);

        setTimeout(()=> fire.remove(), 1000);

    }
}

function createConfetti(){

    let container = document.getElementById("confetti");

    for(let i = 0; i < 100; i++){

        let confetti = document.createElement("div");

        confetti.style.position = "absolute";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.borderRadius = "50%";

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";

        confetti.style.background = "hsl(" + Math.random()*360 + ",100%,50%)";

        confetti.style.animation = "fall 3s linear forwards";

        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

function showCake(){
    document.getElementById("cake").style.display="block";
}

function cutCake(){
    document.querySelector(".layer").classList.add("cut");
    document.querySelector(".icing").classList.add("cut");

    setTimeout(()=>{
        alert("Cake Cut 🎉 Happy Birthday!");
    },1000)
}

function enterSurprise(){
    document.getElementById("superiseMessage").style.display="block";

    document.getElementById("birthdayMusic").play();

    for(let i = 0; i<100; i++){

        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random()*100+"vw";
        confetti.style.background = "hsl("+Math.random()*360+",100%,50%)";
        confetti.style.animationDuration = (Math.random()*3+2)+"s";

        document.getElementById("confetti-container").appendChild(confetti)
    }
}

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createRocket(){
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height;

    let rocket = {
        x:x,
        y:y,
        speed:5,
        exploded:false,
        color:"hsl("+Math.random()*360+",100%,50%)"
    };
    particles.push(rocket);
}
function explode(x,y,color){
    for(let i = 0; i<60; i++){
        particles.push({
            x:x,
            y:y,
            speedX:(Math.random()-0.5)*6,
            speedY:(Math.random()-0.5)*6,
            life:100,
            color:color
        });
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{
        //Rocket Move
        if(!p.exploded && p.speed){
            p.y -= p.speed;

            ctx.fillStyle = p.color;
            ctx.fillRect(p.x,p.y,3,10);

            if(p.y <canvas.height/3){
                p.exploded = true;
                explode(p.x,p.y,p.color);
                particles.splice(index,1);
            }
        }

        //Explosion particles

        else if(p.life){
            p.x += p.speedX;
            p.y += p.speedY;
            p.life--;

            ctx.fillStyle = p.color;
            ctx.fillRect(p.x,p.y,2,2);

            if(p.life<=0){
                particles.splice(index,1);
            }
        }
    });
    requestAnimationFrame(animate);
}

animate();
setInterval(createRocket,800);

function startCelebration(){
    document.getElementById("entryScreen").style.display="none";
    startTypingName();
    startsHeart();
    startCountdown();
    document.getElementById("music").play();

}

let nameText = "Happy Birthday Amod Yadav 🎂";
let nameIndex = 0;

function startTypingName(){
    let typing = setInterval(()=>{
        if(nameIndex < nameText.length){
            document.getElementById("freindName").innerHTML += nameText.charAt(nameIndex);
            nameIndex++;
        }
        else{
            clearInterval(typing);
        }
    },100);
}


function startCountdown(){
    let birthday = new Date("Feb 20,2026 00:00:00").getTime();

    setInterval(()=>{
        let now = new Date().getTime();
        let gap = birthday - now;

        let days = Math.floor(gap/(1000*60*60*24));
        let hour = Math.floor((gap%(1000*60*60*24))/(1000*60*60));
        let minutes = Math.floor((gap%(1000*60*60))/(1000*60));
        let seconds = Math.floor((gap%(1000*60))/1000);

        document.getElementById("countdown").innerHTML = days+"d "+hour+"h "+minutes+"min "+seconds+"sec";

    },1000);
}

let photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg"
];

let slideIndex = 0;

setInterval(()=>{
    document.getElementById("slide").src = photos[slideIndex];
    slideIndex++;
    if(slideIndex>=photos.length) slideIndex = 0;
},2000);

function startsHeart(){
    setInterval(()=>{
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random()*100+"vw";

        document.body.appendChild(heart);

        setTimeout(()=> heart.remove(),5000);
    },300);
}

document.getElementById("birthday-card").onclick = function(){

    this.classList.toggle("open");

    document.getElementById("music").pause();      // old music band
    document.getElementById("cardMusic").play();   // new music start
    createConfetti();
    startSlideshow();

}


function createConfetti(){
    for(let i = 0; i<100; i++){
        let c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random()*100+"vw";
        c.style.background = "hsl("+Math.random()*360+",100%,50%)";

        document.body.appendChild(c);
        setTimeout(()=>c.remove,3000);
    }
}

function startSlideshow(){
    setInterval(function(){
        document.getElementById("photoSlide").src = photo[pIndex];
        pIndex++;
        if(pIndex>=photo.length){
            pIndex = 0;
        }
    },2000);
}
function cutCake(){
document.getElementById("candle").classList.add("off");
createConfetti();
grandFinale();
}


setInterval(()=>{
let s=document.createElement("div");
s.className="stars";
s.style.left=Math.random()*100+"vw";
document.body.appendChild(s);
setTimeout(()=>s.remove(),5000);
},200);

function grandFinale(){

for(let i=0;i<10;i++){
setTimeout(()=>{
createConfetti();
createRocket();   // tumhara firework rocket function
},i*500);
}
}

