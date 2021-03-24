const datos = [
    {nombre:'Haydee', edad:24},
    {nombre:'Samuel', edad:28},
    {nombre:'Luis', edad:21},
    {nombre:'Miguel', edad:28},
]
//Se tarda más tiempo
datos.forEach( elemento => {
    console.log(elemento)
})
//Funciona más rapido
datos.map( elemento => {
    console.log(elemento)
})