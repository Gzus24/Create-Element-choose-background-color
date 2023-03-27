let myContainer = document.createElement('section');
let mySection = document.createElement('section');
let myHOne = document.createElement('h1');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let div4 = document.createElement('div');
let div5 = document.createElement('div');
let div6 = document.createElement('div');
let div7 = document.createElement('div');
let div8 = document.createElement('div');


myHOne.innerText = "Choose a background color";
myContainer.appendChild(myHOne);
myContainer.appendChild(mySection);
myContainer.classList.add('contain')
mySection.classList.add('group')
myHOne.classList.add('HOne');
mySection.appendChild(div1);
div1.classList.add('div1');
mySection.appendChild(div2);
div2.classList.add('div2');
mySection.appendChild(div3);
div3.classList.add('div3');
mySection.appendChild(div4);
div4.classList.add('div4');
mySection.appendChild(div5);
div5.classList.add('div5');
mySection.appendChild(div6);
div6.classList.add('div6');
mySection.appendChild(div7);
div7.classList.add('div7');
mySection.appendChild(div8);
div8.classList.add('div8')

document.body.appendChild(myContainer);


document.querySelector('.div1').addEventListener('click', () => {
    document.querySelector('.group').style.background = 'blue';
})
document.querySelector('.div2').addEventListener('click', () => {
    document.querySelector('.group').style.background = 'green';
})
document.querySelector('.div3').addEventListener('click', () => {
    document.querySelector('.group').style.background = 'red';
})
document.querySelector('.div4').addEventListener('click', () => {
    document.querySelector('.group').style.background = 'teal';
})
document.querySelector('.div5').addEventListener('click', () => {
    document.querySelector('.group').style.background = 'rgb(188, 99, 114)';
})
document.querySelector('.div6').addEventListener('click', () => {
    document.querySelector('.group').style.background = 'rgb(60, 47, 47)';
})
document.querySelector('.div7').addEventListener('click', () => {
    document.querySelector('.group').style.background = 'rgb(191, 191, 241)';
})
document.querySelector('.div8').addEventListener('click', () => {
    document.querySelector('.group').style.background = 'rgb(227, 166, 52)';
})
