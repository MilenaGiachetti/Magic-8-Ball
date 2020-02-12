var contenedorRespuesta = document.getElementById('contenedorRespuesta');
var btnSubmit = document.getElementById('submit');
var pregunta = document.getElementById('pregunta');
var contenedorTitulos = document.getElementById('contenedorTitulos');
var titulo = document.getElementById('titulo');
var nuevaPregunta = document.getElementById('nuevaPregunta');
nuevaPregunta.setAttribute('class','desaparecer');
var respuestasPosibles = [
    'Probablemente',
    'Será mejor que no te lo diga ahora',
    'Pregunta en otro momento',
    'Todo apunta a que sí',
    'Concéntrate y vuelve a preguntar',
    'No cuentes con ello',
    'Puede ser',
    'Las perspectivas no son buenas',
];

function predecir (){
    var respuestaIndex = Math.floor(Math.random()*respuestasPosibles.length);
    var respuesta = document.createElement('p');
    respuesta.setAttribute('class','textoRespuesta');
    var contenido = document.createTextNode(respuestasPosibles[respuestaIndex]);
    respuesta.appendChild(contenido);
    contenedorRespuesta.appendChild(respuesta);
}
pregunta.addEventListener('keyup', function(){
    if(event.which === 13|| event.keyCode == 13){
       predecir();
    };
});
btnSubmit.addEventListener('click', predecir);
btnSubmit.addEventListener('click', function(){
    var preguntaImprimir = document.createElement('h2');
    var contenidoPregunta = document.createTextNode(pregunta.value);
    preguntaImprimir.appendChild(contenidoPregunta);
    contenedorTitulos.appendChild(preguntaImprimir);
    pregunta.setAttribute('class','desaparecer');
    submit.setAttribute('class','desaparecer');
    titulo.setAttribute('class','desaparecer');
    nuevaPregunta.setAttribute('class','aparecer');
});
nuevaPregunta.addEventListener('click', function(){
    window.location.reload(true);
    /*pregunta.setAttribute('class','aparecer');
    submit.setAttribute('class','aparecer');
    nuevaPregunta.setAttribute('class','desaparecer');*/
});

