/*
Vijaya Anisetti
vijaya_anisetti@student.uml.edu
File: hw4.js
Assignment: Creating an Interactive Dynamic Table
The javascript that actually creates the table and performs the multiplication. 
*/
var it = 0;
function create_table() {

    var lowcol = document.getElementById("form3").elements[0].value;
    var highcol = document.getElementById("form3").elements[1].value;
    var lowrow = document.getElementById("form3").elements[2].value;
    var highrow = document.getElementById("form3").elements[3].value;

    var num = Number(lowcol);
    var num2 = Number(lowrow);

    var tablearea = document.getElementById('tablearea');
    var tbl = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '2px solid black';

    //table is made based on template from stackoverflow
    for(var i = lowrow-1; i <= highrow; i++){
        var tr = tbl.insertRow();

        for(var j = lowcol-1; j <= highcol; j++) {

            var td = tr.insertCell();

            if(i == lowrow-1 && j == lowcol-1) {
                td.appendChild(document.createTextNode(''));
            }

            else if (i == (lowrow-1)) {
                td.appendChild(document.createTextNode((num)));
                num = num + 1;
            }

            else if (j == (lowcol-1)) {
                td.appendChild(document.createTextNode((num2)));
                num2 = num2 + 1;
            }

            else {
                td.appendChild(document.createTextNode(i*j));
                if (i == lowrow-1 && j != lowcol-1) {
                    td.appendChild(document.createTextNode(i));
                }
            }
            td.style.border = '2px solid black';
        }
    }

    if (it > 0) {
        var table1 = document.getElementById('table1');
        tablearea.removeChild(table1);
        console.log(1);
    }

    tbl.setAttribute('id', 'table1');
    tablearea.appendChild(tbl);
    
    it++;
}
