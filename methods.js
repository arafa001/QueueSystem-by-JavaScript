function showInputsDeter(){
    showTypeOfQueue('determ');
    makeAllHidden();
    constInput();
   
    let capacityk = document.getElementById('capacityk').classList.remove('d-none');
    let initialm = document.getElementById('initialm').classList.remove('d-none');
    let time = document.getElementById('time').classList.remove('d-none');
    let n = document.getElementById('n').classList.remove('d-none');
    // costOutDeterm();
    let calcdeterm = document.getElementById('calcdeterm').classList.remove('d-none');
    let drawdeterm = document.getElementById('drawdeterm').classList.remove('d-none');
}

function showInputsMM1(){
    showTypeOfQueue('mm1');
    makeAllHidden();
    constInput();
    // constOutStotstic();
    let calcmm1 = document.getElementById('calcmm1').classList.remove('d-none');
}

function showInputsMM1K(){
    showTypeOfQueue('mm1k');
    makeAllHidden();
    constInput(); 
    let capacityk = document.getElementById('capacityk').classList.remove('d-none');
    // constOutStotstic();
    let calcmm1k = document.getElementById('calcmm1k').classList.remove('d-none');
}

function showInputsMMC(){
    showTypeOfQueue('mmc');
    makeAllHidden();
    constInput();
    // constOutStotstic();
    let numSystem = document.getElementById('numSystem').classList.remove('d-none');
    let calcmmc = document.getElementById('calcmmc').classList.remove('d-none');
}

function showInputsMMCK(){
    showInputsMMC();
    showTypeOfQueue('mmck');
    let capacityk = document.getElementById('capacityk').classList.remove('d-none');
    // constOutStotstic();
    //
    let calcmmc = document.getElementById('calcmmc').classList.add('d-none');
    let calcmmck = document.getElementById('calcmmck').classList.remove('d-none');
}

//---------------------------------------------------------------------------
function constInput(){
    let lamda = document.getElementById('lamda').classList.remove('d-none');
    let mu = document.getElementById('mu').classList.remove('d-none');
}

function constOutStotstic(){
    let l = document.getElementById('l').classList.remove('d-none');
    let lq = document.getElementById('lq').classList.remove('d-none');
    let w = document.getElementById('w').classList.remove('d-none');
    let wq = document.getElementById('wq').classList.remove('d-none');
}

function costOutDeterm(){
    let nt = document.getElementById('nt').classList.remove('d-none');
    let wn = document.getElementById('wn').classList.remove('d-none');
}
// to make all hidden when click on a new queue
function makeAllHidden(){
    let check = document.querySelectorAll(".inputs");
    for (let i = 0; i < check.length; i++){
        check[i].classList.add('d-none');
    }
    let checOut = document.querySelectorAll('.out');
    for (let i = 0; i < checOut.length; i++){
        checOut[i].classList.add('d-none');
    }
    let calcdeterm = document.getElementById('calcdeterm').classList.add('d-none');
    let drawdeterm = document.getElementById('drawdeterm').classList.add('d-none');
    let calcmm1 = document.getElementById('calcmm1').classList.add('d-none');
    let calcmm1k = document.getElementById('calcmm1k').classList.add('d-none');
    let calcmmc = document.getElementById('calcmmc').classList.add('d-none');
    let clacmmck = document.getElementById('calcmmck').classList.add('d-none');
    document.getElementById('hint').classList.add('d-none');
    document.getElementById('divChart').classList.add('d-none')
}
// when click in a new queu show name of queue
function showTypeOfQueue(id){
    let typeQueue = document.getElementById('type-queue');
    let type = document.getElementById(id).value;
    typeQueue.innerHTML = type;
}

function clearOut(){
    document.getElementById('hint').classList.remove('d-none');
    document.getElementById('l').innerHTML = "L ---" ;
    document.getElementById('lq').innerHTML = "Lq ---";
    document.getElementById('w').innerHTML = "W ---";
    document.getElementById('wq').innerHTML = "Wq ---";
}


function setOutStotstic(l, lq, w, wq){
    document.getElementById('l').innerHTML = `L = ${l}`;
    document.getElementById('lq').innerHTML = `Lq = ${lq}`;
    document.getElementById('w').innerHTML = `W = ${w}`;
    document.getElementById('wq').innerHTML = `Wq = ${wq}`;
}

function factorial(num){
    if (num == 0)
    {
        return 1;
    }
    else
    {
        return (num * factorial(num - 1));
    }
}

function calcTi (lamda, mu, K){
    let ti = (K - (mu / lamda)) / (lamda - mu);
    let roundTi = Math.round(ti);
    let arrivalTime = 1 / lamda;

    while(true)
    {
        roundTi -= arrivalTime;
        let check = Math.trunc(lamda * roundTi) - Math.trunc((mu * roundTi) - (mu / lamda));
        if (check != K)
        {
            break;
        }
    }
    return Math.round(roundTi + arrivalTime);
}

function calcTiForM (lamda, mu, M){
    let ti = Math.trunc(M / (mu - lamda));
    let arrivalTime = 1 / lamda;

    while(true)
    {
        ti -= arrivalTime;
        let check = Math.trunc(mu * ti) - Math.trunc(lamda * ti);
        if (check != M)
        {
            break;
        }
    }
    return Math.round( ti + arrivalTime);
}

function getLamdaeval(){
    let getLamda;
    try{
        getLamda = eval(document.getElementById('lamda').value) + .00001;
    }
    catch(err){
            document.getElementById('hint').classList.remove('d-none');
            document.getElementById('hint').innerHTML = 'invalid input..!';
            document.getElementById('nt').innerHTML = 'n(t) = ----';
            document.getElementById('wn').innerHTML = 'W(n) = ----';
    }
    return getLamda;
}
function getMueval(){
    let getMu;
    try{
        getMu = eval(document.getElementById('mu').value) + .00001;
    }
    catch(err){
            document.getElementById('hint').classList.remove('d-none');
            document.getElementById('hint').innerHTML = 'invalid input..!';
            document.getElementById('nt').innerHTML = 'n(t) = ----';
            document.getElementById('wn').innerHTML = 'W(n) = ----';
    }
    return getMu;
}