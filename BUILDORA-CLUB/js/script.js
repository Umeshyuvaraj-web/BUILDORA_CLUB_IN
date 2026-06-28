// ==========================
// APPLY BUTTONS
// ==========================

const applyButtons =
document.querySelectorAll(
".apply-btn,.primary-btn,.cta-btn"
);

applyButtons.forEach(button=>{

button.addEventListener("click",(event)=>{

if(button.type === "submit" || button.closest("form")){
return;
}

event.preventDefault();

window.location.href=
"courses.html";

});

});


// ==========================
// EXPLORE TRACKS BUTTON
// ==========================

const exploreBtn=
document.querySelector(".secondary-btn");

if(exploreBtn){

exploreBtn.addEventListener("click",()=>{

document
.querySelector(".skills")
.scrollIntoView({

behavior:"smooth"

});

});

}


// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

window.addEventListener("scroll",()=>{

const nav=
document.querySelector("nav");

if(window.scrollY>50){

nav.style.background=
"rgba(5,8,22,0.98)";

nav.style.boxShadow=
"0 5px 20px rgba(0,0,0,.4)";

}
else{

nav.style.background=
"rgba(5,8,22,0.95)";

nav.style.boxShadow=
"none";

}

});


// ==========================
// SKILL CARD HOVER GLOW
// ==========================

const cards=
document.querySelectorAll(
".skill-card"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow=
"0 0 25px rgba(0,229,255,.25)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow=
"none";

});

});


// ==========================
// CTA BUTTON EFFECT
// ==========================

const cta=
document.querySelector(".cta-btn");

if(cta){

cta.addEventListener("mouseenter",()=>{

cta.style.transform=
"translateY(-5px)";

});

cta.addEventListener("mouseleave",()=>{

cta.style.transform=
"translateY(0px)";

});

}


// ==========================
// SCROLL REVEAL
// ==========================

const revealElements=
document.querySelectorAll(
".skill-card,.why-card,.step"
);

function revealOnScroll(){

revealElements.forEach(el=>{

const top=
el.getBoundingClientRect().top;

const screen=
window.innerHeight;

if(top < screen - 100){

el.style.opacity="1";

el.style.transform=
"translateY(0)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform=
"translateY(40px)";

el.style.transition=
"all .8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// ==========================
// FOOTER YEAR
// ==========================

const copyright=
document.querySelector(
".copyright"
);

if(copyright){

copyright.innerHTML=
`© ${new Date().getFullYear()} Buildora Club.
All Rights Reserved.`;

}