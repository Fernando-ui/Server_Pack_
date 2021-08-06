const Formulario = ( ()=>{
    'use strict'

    const formulario =$('#formulario');

        formulario.on('submit', function (e){
        
            const usuario  = $('#user');
            const password = $('#child_password');
            e.preventDefault();

            const iconoRight = '<i class="fas fa-check-circle"></i>';
            const iconoFail = '<i class="fas fa-times-circle"></i>';
    
            
            const removerEtiquetas = ( etiqueta:any) => {
            
                $(etiqueta).remove();
                $(usuario).css({borderColor:''});
                $(password).css({borderColor:''});
                
            }
        

            if(!usuario.val() || !password.val()){
    
                console.log( $('#inputIcon').children('i'));
                
        
                
                $('#inputIcon').append(iconoFail);
                $('#inputPassword').append(iconoFail);
                
                $(usuario).css({

                    borderColor:'red'
                })
                $('#inputPassword i').css({
                    color:'rgb(143, 32, 32)',
                    
                });
                $(password).css({

                    borderColor:'red'
                })
                
                $('#inputIcon i').css({
                    
                    color:'rgb(143, 32, 32)'
                });
                setInterval(() => {
                    
                    removerEtiquetas('i');                
                }, 1700);
                
            }else{
                
            
                $(password).css({

                    borderColor:'green'
                });

                $(usuario).css({

                    borderColor:'green'
                });
                
                
                $('#inputIcon').append(iconoRight);
                $('#inputPassword').append(iconoRight);

                setInterval(() => {
                    
                    removerEtiquetas('i');
                }, 1700);
            }
        
        
        })
    

    


    console.log('hola, todo bien desde validaciones');
    
    
    
})();

