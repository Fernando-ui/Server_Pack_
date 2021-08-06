"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceso = void 0;
require("jquery");
var boton = $('#button_accesar');
var form = $('form');
var user = $('#user');
var pass = $('#child_password');
var acceso = function () {
    boton.on('click', function () {
        var val = form.serialize();
        console.log(val);
        if (!user.val() || !pass.val()) {
            window.alert('Llenar los campos requeridos');
            return;
        }
    });
};
exports.acceso = acceso;
