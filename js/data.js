document.addEventListener("DOMContentLoaded", ()=>{
    let container = document.getElementById("data")
    let array = JSON.parse(localStorage.getItem("array"))
    let HTMLContentToAppend = ""

    array.forEach( e => {
        HTMLContentToAppend += `<br> ${e.objeto}`
    });

    document.getElementById("data").innerHTML = HTMLContentToAppend;
})