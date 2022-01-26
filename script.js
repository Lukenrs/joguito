let mago = 20
let berseker =30
let enemy = 40
let hero = 0
let choice ="berseker"
let choicen = "Goblin"
switch(choice){
    case "mage":
    hero = 20
    break
    case"berseker":
    hero = 50
    break
    case "archer":
    hero = 10
}
 
while(enemy > 0 && hero > 0 ){

let rand = parseInt((Math.random()*2)+1)
let randn = parseInt((Math.random()*2)+1)
if(choice=="mage"){
    function skillmg(n) {
        console.log(`${choice} atacou com:`)
        switch(n){
            case 1: 
            console.log("Bola de fogo -5")
            return 5
    
            case 2:
            console.log("Ataque de luz -7")
            return 7
        }
        
    }
    enemy = enemy-skillmg(rand)
}

else if(choice=="berseker"){
    var buff=0
    if(hero<10){
        buff = 2
        console.log(`O ${choice} está furioso, você recebeu +2 de dano`)
    }
    function skillbs(n) {
        console.log(`${choice} atacou com:`)
        switch(n){
            case 1: 
            console.log(`Ataque do Machado`)
            return  2 + buff
            break
            case 2:
            console.log("Frenesi do Lobo")
            return 3 + buff
        }
        
    }
    let dps=skillbs(rand)
    enemy= enemy-dps
    console.log(`${choicen} perdeu ${dps} de vida`)
}



function skilln(n){
    switch(n){
        case 1: 
        console.log("Facada -2")
        return 2

        case 2:
        console.log("Ataque de arco -4")
        return 4
    }
}


hero = hero - skilln(randn)
console.log(`O ${choice} está com ${hero} de HP`)
console.log(`O ${choicen} está com ${enemy} de HP`)
console.log("______________________________________________________")
}
console.log("______________________________________________________")
console.log("Resultado da batalha:")
console.log(`O ${choice} ficou com ${hero} de HP`)
console.log(`O Goblin ficou com ${enemy} de HP`)
if (hero<=0 && enemy<=0){
    console.log("Empate")
}
else if (enemy<=0){
    console.log(`${choice} ganhou`)
}
else{
    console.log(`${choicen} ganhou`)
}
console.log("______________________________________________________")