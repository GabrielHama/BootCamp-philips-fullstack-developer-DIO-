const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
var pontos = 0;
function handleKeyDown(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}

function jump(){
    isJumping = true;
    let upInterval = setInterval(() => {
        // descendo
        if (position >= 150){
            clearInterval(upInterval);
            let downInterval = setInterval(( ) =>{
                if (position <=0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                else{
                position -=20;
                dino.style.bottom = position+'px';
                }
            },20)
        }
        // subindo 
        position +=20;
        dino.style.bottom = position+'px';
    },20)
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 2000;
    let randomTime = Math.random() * 6000;
    cactus.classList.add('cactus');
    cactus.style.left = 2000 + 'px';
    background.appendChild(cactus);
    let leftInterval = setInterval(() => {
        pontos += 10;
        document.getElementById('pontos').innerText = pontos;
        if (cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }
        else if (cactusPosition > 0 && cactusPosition< 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1> <h2 class="game-over"> Pontuação: '+pontos;
            
        }
            else{ cactusPosition -= 10;
                cactus.style.left = cactusPosition + 'px';}
           
        
    },20)

    setTimeout(createCactus,randomTime);

}
createCactus();
document.addEventListener('keydown', handleKeyDown);