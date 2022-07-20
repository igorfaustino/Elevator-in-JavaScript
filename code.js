var floor = 'g'
var display = document.querySelector('#display')

function load(){
    document.querySelector('#display').innerHTML = 'G'
}

function call2(){
    document.querySelector('#elevator-container').style.top = '10px'
    document.querySelector('#elevator-container').style.transition = '2s'
    document.querySelector('#display').innerHTML = '2'
}

function call1(){
    document.querySelector('#elevator-container').style.top = '160px'
    document.querySelector('#elevator-container').style.transition = '2s'
    document.querySelector('#display').innerHTML = '1'
}

function callg(){
    document.querySelector('#elevator-container').style.top = '310px'
    document.querySelector('#elevator-container').style.transition = '2s'
    document.querySelector('#display').innerHTML = 'G'
}