
const btnUser = document.querySelector('#user');
const btnPassword = document.querySelector('#password');


// Obtener informacion para un Endpoint.

const url = 'https://api.chucknorris.io/jokes/random';



const obtenerChiste = async() => {

    try {

        const resp = await fetch(url);
        const value = await resp.json();
        
        return value;
        
    } catch (error) {
        
        console.error('No se pudo accesar al Endpoint')
    }

}



const obtenerAlgo = async() => {
    
    const respuesta = await obtenerChiste();
    console.log(respuesta,'Aqui esta respuesta');
    return respuesta;
    

}

obtenerAlgo().then(console.log);











