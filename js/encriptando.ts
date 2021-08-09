// const bcryptjs = require('bcryptjs');+
import * as bcryptjs from '../node_modules/bcryptjs/dist/bcrypt.min.js';
// import *  as bcryptjs from 'bcryptjs';


const encriptacion = (password?:string) => {

    const salt:any = bcryptjs.genSaltSync();
    const resp = bcryptjs.hashSync( password, salt);
    
    console.log(resp);
    return resp;

}




export{ 

    encriptacion
}