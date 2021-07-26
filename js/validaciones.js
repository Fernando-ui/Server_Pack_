const Formulario = ( ()=>{
    'use strict'

    const formulario =$('#formulario');
        formulario.on('submit', function (e){
        
            const usuario  = $('#user');
            const password = $('#child_password');
            e.preventDefault();

    
            if(!usuario.val() || !password.val()){
    
                window.alert('Debe de llenar usuario y contraseña');
                
            }else{

                console.log('todo bien');
                
            }
        
        
        })
    

    


    console.log('hola, todo bien desde validaciones');
    
    
    
})();

