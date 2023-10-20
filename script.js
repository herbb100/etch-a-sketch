const container = document.querySelector('#container2');
const gameContainer = 640;
let res = 16;



function grid(){
    for(let i = 1; i <= (res * res); i++){
        const divContent = document.createElement('div');
        divContent.classList.add('content');
        divContent.classList.add('colorChange');
            
        divContent.addEventListener('mousemove' ,()=>{
            
            divContent.style.backgroundColor = 'rgb(161, 26, 26)';
        });
        document.querySelector('.restart').addEventListener('click',()=>{
            divContent.style.backgroundColor = 'white';
        });
        container.appendChild(divContent);
    };
};

grid()

