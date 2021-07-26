
const btnUser = document.querySelector('#user');
const btnPassword = document.querySelector('#password');


// Obtener informacion para un Endpoint.

const url = 'https://reqres.in/api/users';


const leer = async(pagina) => {

    const resp = await fetch(`${url}/${pagina}`);
    const data = await resp.json();

    return data;

}

leer(4).then(console.log,'tenemos la respuesta')


const crearUsuario = async( usuario ) => {

    const resp = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(usuario),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    // console.log(await resp.json());
    return await resp.json();
    
}
const actualizarUsuario = async( usuario, id ) => {

    const resp = await fetch(`${url}/${id}`,{
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    // console.log(await resp.json());
    return await resp.json();
    
}




crearUsuario({
    name:'Fernando',
    job:'inge'
}).then(console.log).catch(console.log)




actualizarUsuario({
    name:'fernando_2',
    job:'lo que sea'
},3).then(console.log)

