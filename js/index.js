 let arrayElementos = JSON.parse(localStorage.getItem("array")) || []

document.getElementById("buttonText").addEventListener("click", function(){
    let input = document.getElementById("inputText").value.trim()
    
    const nuevo = {objeto : input}
    arrayElementos.push(nuevo)

    localStorage.setItem("array", JSON.stringify(arrayElementos))

    document.getElementById("inputText").value = ""
})