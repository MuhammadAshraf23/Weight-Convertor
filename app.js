let kiloGram=document.getElementById('kg')
let pound=document.getElementById('pound')
let ounce=document.getElementById('ounce')

//   1Kg  =  2.20462 pound 
//   1kg   = 35.274 Ounces
//   1pound =16 Ounces
let convertFromKg=()=>{
let kG=kiloGram.value
pound.value=(kG*2.20462).toFixed(4)
ounce.value=(kG*35.274).toFixed(4)
}
let convertFromPound=()=>{
    let lB=pound.value
    kiloGram.value=(lB/2.20462).toFixed(4)
    ounce.value=(lB*16).toFixed(4)
    }
let convertFromOunces=()=>{
    let oZ=ounce.value
    kiloGram.value=(oZ/35.274).toFixed(4)
    pound.value=(oZ/16).toFixed(4)
    }
kiloGram.addEventListener("input",convertFromKg) 
pound.addEventListener("input",convertFromPound) 
ounce.addEventListener("input",convertFromOunces) 
