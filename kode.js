
let deathTimerID;
let healthBar = 100;
// let img1 = 'img/aølksdfj.png';
// let img2 = 'img/laksjdhflasjf.png';
// let img3 = 'img/alfdshjkgbladjbgfn.png';
// let img4 = 'img/afjgnang.png';
// let img5 = 'img/bkljsfdgnh.png';
// let img6 = 'img/dead.png';


startHealthBar1();
startDeathTimer();

function startDeathTimer() {
    deathTimerID = setInterval(decay, 1000);
}
function decay() {
    healthBar -= 5;

    if (healthBar >= 80) {
        startHealthBar1()
    }
    else if (healthBar >= 60) {
        startHealthBar2()
    }
    else if (healthBar >= 40) {
        startHealthBar3()
    }

    else if (healthBar >= 20) {
        hungry()
        startHealthBar4()
    }
    else if (healthBar > 0) {
        startHealthBar5()
    }
    else if (healthBar == 0) {
        death()
        clearInterval(deathTimerID)
        startHealthBar6()
    }
}

function feedingTime() {
    document.getElementById("chicken").innerHTML = `<img src="img/Screenshot 2024-08-26 101313.png" alt="">`;
    document.getElementById("kug").innerHTML = 'Feed';
    healthBar = 100;
    clearInterval(deathTimerID)
    startDeathTimer();
    startHealthBar1();
}

function hungry() {
    document.getElementById("chicken").innerHTML = `<img src="img/Screenshot 2024-08-26 101318.png" alt="">`;
}

function death() {
    document.getElementById("chicken").innerHTML = `<img src="img/Screenshot 2024-08-26 115744.png" alt="">`;
}
function startHealthBar1() {
    document.getElementById("HP").innerHTML = `<img src="img/aølksdfj.png" alt="">`;
}
function startHealthBar2() {
    document.getElementById("HP").innerHTML = `<img src="img/laksjdhflasjf.png" alt="">`
}
function startHealthBar3() {
    document.getElementById("HP").innerHTML = `<img src="img/alfdshjkgbladjbgfn.png" alt="">`;
}
function startHealthBar4() {
    document.getElementById("HP").innerHTML = `<img src="img/afjgnang.png" alt="">`;
}
function startHealthBar5() {
    document.getElementById("HP").innerHTML = `<img src="img/bkljsfdgnh.png" alt="">`;
}
function startHealthBar6() {
    document.getElementById("HP").innerHTML = `<img src="img/dead.png" alt="">`;
    document.getElementById("kug").innerHTML = 'restart';
}






