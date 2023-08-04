let num = 0;
let numOfLike = 1
let time = true

function incrementCounter() {
    numOfLike = 1
    num++
    document.getElementById('counter').innerText = num; 
    
    document.getElementById('pause').addEventListener('click', stop);
}

function subtract() {
    document.getElementById('counter').innerText--
    num--
}

function add() {
    document.getElementById('counter').innerText++
    num++
}

function like() {
    let likesList = document.querySelector('.likes');
    let listItem = likesList.querySelector(`li[data-num="${num}"]`);

    if (listItem) {
        listItem.innerHTML = `${num} has been liked ${numOfLike} time(s)`;
    } else {
        let newListItem = document.createElement('li');
        newListItem.setAttribute('data-num', num);
        newListItem.innerText = `${num} has been liked ${numOfLike} time(s)`;
        likesList.appendChild(newListItem);
    }
    numOfLike++;
}

function stop() {
    if (time === true) {
        clearInterval(incrementNum);
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("submit").disabled = true;
        time = false
        document.getElementById('pause').innerText = "play"
    } else {
        setInterval(incrementCounter, 1000);
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("submit").disabled = false;
        time = true
        document.getElementById('pause').innerText = "pause"
    }
}

function remark(e) {
    let beans = document.getElementById('comment-input').value
    document.getElementById('list').innerText += `${beans}\n`
    document.getElementById('comment-input').value = ''
    e.preventDefault();
}

let incrementNum = setInterval(incrementCounter, 1000);

document.getElementById('minus').addEventListener('click', subtract);

document.getElementById('plus').addEventListener('click', add);

document.getElementById('heart').addEventListener('click', like);

document.getElementById('submit').addEventListener('click', remark);