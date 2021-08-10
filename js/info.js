"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceso = void 0;
var sweetalert2_1 = __importDefault(require("sweetalert2"));
var encriptando_1 = require("./encriptando");
var jquery_1 = __importDefault(require("jquery"));
var boton = jquery_1.default('#button_accesar');
var pass = jquery_1.default('#child_password');
var user = jquery_1.default('#user');
var acceso = function () {
    boton.on('click', function (e) {
        e.preventDefault();
        if (!user.val() || !pass.val()) {
            sweetalert2_1.default.fire({
                title: 'Error',
                text: 'Llenar los campos requeridos',
                confirmButtonColor: '#F8A623'
            });
            throw new Error('No se han llenado los campos especificados');
        }
        var use = user.val();
        user.attr('value', use);
        var pas = pass.val();
        pass.attr('value', pas);
        var conf = {
            Usuario: '',
            password: ''
        };
        conf.Usuario = user.attr('value');
        var passEncr = pass.attr('value');
        var finalPass = encriptando_1.encriptacion(passEncr);
        conf.password = finalPass;
        console.log(conf);
    });
};
exports.acceso = acceso;
