const fs = require("fs")

fs.readFile("./arq1.txt", function(error, value){
    if(error){
        console.error("Deu ruim", error.message)
        return
    }
    console.log(`Conteudo: ${value}`)
})

console.log("fim")