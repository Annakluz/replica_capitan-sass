let api = {
    url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var cargarPagina = function () {
    ponerAlumnas();
   
};
let ponerAlumnas = function(){
    
     
 $.getJSON(api.url, function (alumnas) {
        alumnas.forEach(function(alumna){
            mostrarAlumnas(alumna)
        });
    });
       
}
let mostrarAlumnas = function(alumna){
    let $nombre = alumna.name;
    let $lastName = alumna.pLastName;
    let $last2Name = alumna.mLastName;
    let nombreCompleto  ="";
    
    nombreCompleto += $nombre;
    nombreCompleto += " ";
    nombreCompleto += $lastName;
    nombreCompleto += " ";
    nombreCompleto += $last2Name;
    
    let $containerAsist = $("#list-container");
    let $li = $("<li/>");
    let $input =$("<input type='checkbox'> ");
    
    $li.text(nombreCompleto);
    $li.prepend($input);
    
    $containerAsist.append($li)
    
    
    
}
$(document).ready(cargarPagina);