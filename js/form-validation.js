// Wait for the DOM to be ready
// $.validator.addMethod('le', function (value, element, param) {
//     return this.optional(element) || parseInt(value) <= parseInt($(param).val());
// }, 'Invalid value');


$(function validateForm() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("#form3").validate({

        rules: {
            lowcol: {
                required: true,
            },
            highcol: {
                required: true
            },
            lowrow: {
                required: true,
            },
            highrow: {
                required: true
                
            }
        },

        submitHandler: function (form) {
        create_table();
    },
    });
});

$(document).ready(function() {
    $("input").attr({
       "max" : 50,        
       "min" : -50          
    });

    // $.validator.addMethod('le', function (value, element, param) {
    //     return this.optional(element) || parseInt(value) < parseInt($(param).val());
    // }, 'Invalid value');
    
});



 


