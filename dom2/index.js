const header = document.querySelector('.header')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')

let counter = document.createElement('div');
counter.classList.add('counter')
counter.textContent = 0;
main.append(counter)

counter.addEventListener('click', () => {
    counter.textContent = Number(counter.textContent) + 1;
    if(Number(counter.textContent) % 10 == 0){
        counter.classList.add('bigger_counter')
    }else if(Number(counter.textContent) == 101){
        counter.classList.add('eliminator')
    }
    else{
        counter.classList.remove('bigger_counter')
    }
})