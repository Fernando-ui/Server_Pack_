import * as bcryptjs from 'bcryptjs';


const encriptacion = (password?:any) => {

    const salt:any = bcryptjs.genSaltSync();
    const resp = bcryptjs.hashSync( password, salt);
    
    return resp;

}



export{ 

    encriptacion
}