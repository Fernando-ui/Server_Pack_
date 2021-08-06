import 'jquery';


const boton = $('#button_accesar');
const form = $('form');
const user = $('#user');
const pass = $('#child_password');


const acceso = () => {

    boton.on('click',function(){
    
        // * Informacion serializada
        const val = form.serialize();
        console.log(val);

        if(!user.val() || !pass.val() ){

            window.alert('Llenar los campos requeridos');
            return;
        }
    
    })
    

}


export{
    acceso
}