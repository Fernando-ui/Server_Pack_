import  Swal from 'sweetalert2';
// import *  as bcryptjs from 'bcryptjs';
import { encriptacion } from "./encriptando";
import  $  from 'jquery'


const boton     = $('#button_accesar');
const pass      = $('#child_password');
const user      = $('#user');


const acceso = () => {

    boton.on('click',function(e){
            
        e.preventDefault();

        // * Verificando si hay algo en los campos
        
        if(!user.val() || !pass.val() ){

            
            Swal.fire({
                
                title:'Error',
                text:'Llenar los campos requeridos',
                confirmButtonColor:'#F8A623'
            })
            throw new Error('No se han llenado los campos especificados')
        }
        
        // *Asignando el valor al atributo usuario y contrasena

        const use:any = user.val();
        user.attr('value',use)
        

        
        
        // * Mandando la infromacion en tipo Json
        const conf:{Usuario?:string,  password:string} = {
            Usuario:'',
            password:''
        };
        
        conf.Usuario = user.attr('value');
        
        // * Encriptando la contraseña
        
        const passEncr = pass.val();
        const finalPass = encriptacion(passEncr);
        pass.attr('value',finalPass);
        conf.password = finalPass
        

        // TODO Si todo sale bien colocar este mensaje ya con la validacion en BD 
        // Swal.fire({
        //     position: 'top-end',
        //     icon: 'success',
        //     title: 'Identificando',
        //     showConfirmButton: false,
        //     timer: 1500
        // })
        console.log(conf);
    })
    

}


export{
    acceso
}