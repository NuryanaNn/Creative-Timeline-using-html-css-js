let timeline = document.getElementById('timeline');

let prev = document.getElementById('prev')
let next = document.getElementById('next');
let circle = document.querySelectorAll('.circle');

let active = 1;
next.addEventListener('click', () => {
    active++
    if(active > circle.length){
        active = circle.length
    }
    update()
});

prev.addEventListener('click',  () => {
    active--
    if(active < 1){
        active = 1
    }
    update()
});

function update(){
    circle.forEach((circle, index) =>{
        if(index < active){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    });

    let actives = document.querySelectorAll('.active')
    timeline.style.width = (actives.length - 1) / (circle.length -1) * 100 + '%'
    if(active === 1){
        prev.disabled = true
    }else if (active === circle.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}

