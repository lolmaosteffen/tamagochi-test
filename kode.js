
var feedingTimerID;
var deathTimerID;
var healthBar;

startFeedingTimer();
startDeathTimer();
startHealthBar1();
function startFeedingTimer() {
    clearTimeout(feedingTimerID);
    feedingTimerID = setTimeout(hungry, 5000);
}

function startDeathTimer() {
    clearTimeout(deathTimerID);
    deathTimerID = setTimeout(death, 10000);
}

function feedingTime() {
    document.getElementById("chicken").innerHTML = `<img src="img/Screenshot 2024-08-26 101313.png" alt="">`;
    startFeedingTimer();
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
    healthBar = setTimeout(startHealthBar2, 2000)
}
function startHealthBar2() {
    document.getElementById("HP").innerHTML = `<img src="img/laksjdhflasjf.png" alt="">`;
    healthBar = setTimeout(startHealthBar3, 2000)
}
function startHealthBar3() {
    document.getElementById("HP").innerHTML = `<img src="img/alfdshjkgbladjbgfn.png" alt="">`;
    healthBar = setTimeout(startHealthBar4, 2000)
}
function startHealthBar4() {
    document.getElementById("HP").innerHTML = `<img src="img/afjgnang.png" alt="">`;
    healthBar = setTimeout(startHealthBar5, 2000)
}
function startHealthBar5() {
    document.getElementById("HP").innerHTML = `<img src="img/bkljsfdgnh.png" alt="">`;
    healthBar = setTimeout(startHealthBar6, 2000)
}
function startHealthBar6() {
    document.getElementById("HP").innerHTML = `<img src="img/dead.png" alt="">`;
}






