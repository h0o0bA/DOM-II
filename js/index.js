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

window.addEventListener('resize', evt => {
    alert("Why are you resizing me!");
});
