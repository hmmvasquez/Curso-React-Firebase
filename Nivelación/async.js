/* fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
.catch(e => console.log(e)) */
//evita la entrada a los datos 
const obtenerusuario = async() => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const datos = await respuesta.json()
        console.log(datos)
    } catch(e) {
        console.log(e)
    }
}

obtenerusuario()