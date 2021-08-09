import  Swal from '../node_modules/sweetalert2/dist/sweetalert2.all.min.js'
import 'jquery';


const boton     = $('#button_accesar');
const pass      = $('#child_password');
const user      = $('#user');


const acceso = () => {

    boton.on('click',function(e){
            
        e.preventDefault();

        // * Informacion serializada
        
        if(!user.val() || !pass.val() ){

            
            Swal.fire({
                
                title:'Error',
                text:'Llenar los campos requeridos',
                confirmButtonColor:'#F8A623'
            })
            throw new Error('No se han llenado los campos especificados')
        }
        
        const use:any = user.val();
        user.attr('value',use)
        

        const pas:any = pass.val();
        pass.attr('value',pas);
        
    

        // TODO Mandar la informacion en tipo Json 
        const conf:{Usuario?:string,  Contrasena?:string} = {
            Usuario:'',
            Contrasena:''
        };
        
        conf.Usuario = user.attr('value');
        
        // TODO Funcion para encriptar la contraseña 
        conf.Contrasena = pass.attr('value');
        

        console.log(conf);
    })
    

}


export{
    acceso
}