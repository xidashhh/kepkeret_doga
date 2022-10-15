


function urlValtozas(){
    let kepValue = document.getElementById('kepURL').value
    document.getElementById('kep').src = kepValue
    // console.log(kepValue)

}

document.addEventListener('DOMContentLoaded', () => {
    let kepURL = document.getElementById('kepURL')


    kepURL.addEventListener('change', urlValtozas)
    kepURL.addEventListener('change', urlValtozas)
})
