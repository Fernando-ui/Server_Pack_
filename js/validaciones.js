"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacionFormulario = void 0;
require("jquery");
var validacionFormulario = function () {
    var formulario = $('#formulario');
    formulario.on('submit', function (e) {
        var usuario = $('#user');
        var password = $('#child_password');
        e.preventDefault();
        var iconoRight = '<i class="fas fa-check-circle"></i>';
        var iconoFail = '<i class="fas fa-times-circle"></i>';
        var removerEtiquetas = function (etiqueta) {
            $(etiqueta).remove();
            $(usuario).css({ borderColor: '' });
            $(password).css({ borderColor: '' });
        };
        if (!usuario.val() || !password.val()) {
            $('#inputIcon').append(iconoFail);
            $('#inputPassword').append(iconoFail);
            $(usuario).css({
                borderColor: 'red'
            });
            $('#inputPassword i').css({
                color: 'rgb(143, 32, 32)',
            });
            $(password).css({
                borderColor: 'red'
            });
            $('#inputIcon i').css({
                color: 'rgb(143, 32, 32)'
            });
            setInterval(function () {
                removerEtiquetas('i');
            }, 1700);
        }
        else {
            $(password).css({
                borderColor: 'green'
            });
            $(usuario).css({
                borderColor: 'green'
            });
            $('#inputIcon').append(iconoRight);
            $('#inputPassword').append(iconoRight);
            setInterval(function () {
                removerEtiquetas('i');
            }, 1700);
        }
    });
};
exports.validacionFormulario = validacionFormulario;
