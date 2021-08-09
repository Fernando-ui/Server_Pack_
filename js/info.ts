import  Swal from '../node_modules/sweetalert2/dist/sweetalert2.all.min.js'
import 'jquery';


const boton     = $('#button_accesar');
const form      = $('form');
const pass      = $('#child_password');
const user      = $('#user');


const acceso = () => {

    boton.on('click',function(e){
    
        const val = form.serialize();
        console.log(val);

        
        e.preventDefault();
        // * Informacion serializada
        // TODO Mandar la informacion en tipo Json 

        if(!user.val() || !pass.val() ){

        
            Swal.fire({
    
                title:'Error',
                text:'Llenar los campos requeridos',
                confirmButtonColor:'#F8A623'
            })
            throw new Error('No se han llenado los campos especificados')
        }
    

        

    })
    

}


export{
    acceso
}