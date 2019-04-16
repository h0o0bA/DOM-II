// Your code goes here
const destinationBtn = document.querySelectorAll('.destination .btn');

for(let i =0;i<destinationBtn.length;i++){
    destinationBtn[i].addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'darkgreen';
    });

    destinationBtn[i].addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'green';
    });

    destinationBtn[i].addEventListener('dblclick', (event) => {
        event.target.style.backgroundColor = 'black';
    });
}

window.addEventListener('resize', (event) => {
    alert("Why are you resizing me!");
});

 const logo = document.querySelector('.logo-heading');
 logo.addEventListener('mouseover', (event) => {
    TweenMax.to(logo, 3, {x:300});
 });

 const header2 = document.querySelector('.intro h2');
 header2.addEventListener('mouseover', (event) => {
    TweenMax.to(header2, 3, {rotation:360, scale:0.5});
        event.stopPropagation();
 });

 const header3 = document.querySelector('.text-content h2');
 header3.addEventListener('mouseover', (event) => {
        TweenMax.to(header3, 3, {rotationX:360});
        event.stopPropagation();
 });

 header3.addEventListener('mouseout', (event) => {
    TweenMax.to(header3, 3, {rotationY:360});
        event.stopPropagation();
 });

 const aTag = document.querySelector('a');
 aTag.addEventListener('click', function(event){
  alert("Click on something else...");
   event.preventDefault();
 }); 

 const paragraph = document.querySelector('.text-content');
 paragraph.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '3rem';
        event.stopPropagation();
 });

 const desheader = document.querySelectorAll('img');
 paragraph.addEventListener('mouseover', (event) => {
    TweenMax.to(desheader, 3, {rotationY:360});
 });



console.log(destinationBtn);