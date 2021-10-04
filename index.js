function interesSimple(capital, tasa, tiempo)
{
    return capital * tiempo * (tasa / 100);
}
function interesCompuesto(capital, tasa, tiempo)
{
    console.log(tasa+ " - " + tiempo);
    console.log(Math.pow(1 + (tasa / 100), tiempo));
    return capital * Math.pow(1 + (tasa / 100), tiempo);
}
interest.onsubmit = (e) => {
    e.preventDefault()
    let form = new FormData(document.getElementById("interest"))
    const capital = parseFloat(form.get("capital"))
    const tasa = parseFloat(form.get("tasa"))
    const tiempo = parseInt(form.get("tiempo"))
    let res = 0
    let message = ''
    if (form.get("tipo") === "simple")
    {
        res = interesSimple(capital, tasa, tiempo)
        message = `El capital simple es de <strong>$${res}</strong>`
    }
    else
    {
        res = interesCompuesto(capital, tasa, tiempo)
        message = `El capital compuesto es de <strong>$${res}</strong>`
    }
    document.getElementById("result").innerHTML = message
}