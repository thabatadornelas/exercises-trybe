let cor1 = document.querySelector('#color1');
let cor2 = document.querySelector('#color2');
let cor3 = document.querySelector('#color3');
let cor4 = document.querySelector('#color4');

cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = 'red';
cor3.style.backgroundColor = 'yellow';
cor4.style.backgroundColor = 'green';

cor1.addEventListener("click", function() {
document.querySelector(".selected").classList.remove('selected')
cor1.classList.add('selected')
})

cor2.addEventListener("click", function() {
    document.querySelector(".selected").classList.remove('selected')
    cor2.classList.add('selected')
    })

    cor3.addEventListener("click", function() {
        document.querySelector(".selected").classList.remove('selected')
        cor3.classList.add('selected')
        })

        cor4.addEventListener("click", function() {
            document.querySelector(".selected").classList.remove('selected')
            cor4.classList.add('selected')
            })

let selectPixels = document.querySelectorAll(".pixel");
for (let i = 0; i < selectPixels.length; i ++) {
    selectPixels[i].addEventListener("click", function () {
        selectPixels[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
        })
}