"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceso = void 0;
var sweetalert2_all_min_js_1 = __importDefault(require("../node_modules/sweetalert2/dist/sweetalert2.all.min.js"));
require("jquery");
var boton = $('#button_accesar');
var form = $('form');
var pass = $('#child_password');
var user = $('#user');
var acceso = function () {
    boton.on('click', function (e) {
        var val = form.serialize();
        console.log(val);
        e.preventDefault();
        if (!user.val() || !pass.val()) {
            sweetalert2_all_min_js_1.default.fire({
                title: 'Error',
                text: 'Llenar los campos requeridos',
                confirmButtonColor: '#F8A623'
            });
            throw new Error('No se han llenado los campos especificados');
        }
    });
};
exports.acceso = acceso;
