// Here you can access the colors variable
// have fun

const paintme=document.querySelector('#pallete');
const btn = document.querySelector('#btn');
const input = document.querySelector('#color');

function featurs(color){
    paintme.style.backgroundColor = color;
    input.style.color= color;
    input.value= color;
}

btn.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * colors.length)
    featurs(colors[randomNum]);
})

input.addEventListener('input', e =>{
    const{ value} = e.target;

    const hexCode = value.startsWith('#')? value:`#${value}`;
    if(hexCode.length === 4 || hexCode.length === 7){
        
        featurs(hexCode)
    }

})

