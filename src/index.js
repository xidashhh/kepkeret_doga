function urlValtozas(){
    let kepValue = document.getElementById('kepURL').value
    document.getElementById('kep').src = kepValue
    // console.log(kepValue)

}

function szovegMeretValtoztatas(){
    let meretValue = document.getElementById('szovegMeret').value
    if (meretValue < 0){
        document.getElementById('szovegMeret').value = 0
        alert("Nem lehet kisebb mint 0! https://cdn.frankerfacez.com/emoticon/201362/4")
    }
    else {
        document.getElementById('bekezdes').style.fontSize = meretValue+"pt"
    }
    // console.log(meretValue)
}

function sorkozMeretValtoztatas(){
    let sorkozValue = document.getElementById('sorkozMeret').value
    if (sorkozValue < 0){
        document.getElementById('sorkozMeret').value = 0
        alert("Nem lehet kisebb mint 0! https://cdn.frankerfacez.com/emoticon/201362/4")
    }
    else {
        document.getElementById('bekezdes').style.lineHeight = sorkozValue+"em"
    }
    console.log(sorkozValue)
}

function szinValtoztatas(){
    let betuszin = document.getElementById('betuszin').value
    document.getElementById('bekezdes').style.color = betuszin
}

function pozicioValtas(){

    document.getElementById('kep').classList.toggle('right')
    console.log('szia')
}

document.addEventListener('DOMContentLoaded', () => {
    let kepURL = document.getElementById('kepURL')
    let szovegMeret = document.getElementById('szovegMeret')
    let sorkozMeret = document.getElementById('sorkozMeret')
    let betuszin = document.getElementById('betuszin')
    let pozicionalas = document.getElementById('pozicionalas')

    
    kepURL.addEventListener('change', urlValtozas)
    szovegMeret.addEventListener('input', szovegMeretValtoztatas)
    sorkozMeret.addEventListener('input', sorkozMeretValtoztatas)
    betuszin.addEventListener('input', szinValtoztatas)
    pozicionalas.addEventListener('click', pozicioValtas)
})
