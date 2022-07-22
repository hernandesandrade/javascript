let num = [5, 2, 8, 100, 111]
num.sort(function(a,b){return a-b}) //Ordenar em ordem creascente
num.sort(function(b, a){return a-b}).reduce //Ordenar em ordem decrescente
for (let pos in num){ //Nova forma de usar o for pra repetir uma determinada quantidade de vezes
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let pos = num.indexOf(100)
if (pos == -1){
    console.log("O valor não foi encontrado.")
}else{
console.log(`O valor está da posição ${pos}`)
}
