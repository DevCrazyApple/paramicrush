function randomMovePosition(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById('btn_si');
let btnNo = document.getElementById('btn_no');
let divModSex = document.getElementsByClassName('mode_sex')[0];

btnNo.addEventListener('mouseenter', function(e) {
    randomMovePosition(e.target)
});

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que Sí, Casemonos beibi, love u ❤️');

    divModSex.style.display = 'block';
    const song = new Audio('/amarre/img/img_modo_hot.mp3');
    song.play();
});
