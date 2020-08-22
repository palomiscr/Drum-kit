/*list.forEach(
  function(currentValue, currentIndex, listObj) {
    currentValue.addEventListener("click", DoSound);
  }
);*/





// listeners de teclado.
//---------------------------------------------------------------



let letters=['w', 'a', 's', 'd', 'j', 'k', 'l'];

//Mediante event.key accedemos a la tecla pulsada
document.addEventListener('keydown', function(event){
  handlePress(event.key);//envia letra

});

function handlePress(tecla) {
  var i=0;
  var enc=false;
  while(i<7 && !enc){
    if(tecla==letters[i]){
      enc=true;
    }
    else{
      i++;
    }
  }
  DoSound(i);
  animation(tecla);



}


//listeners raton
//----------------------------------------------------------------------------

//en li tenemos una lista de .drum
//la recorremos asignandoles el sonido que le corresponde, para lo cual usamos el array musicc

let musicc = ['tom-1', 'tom-2', 'tom-3', 'tom-4', 'snare', 'crash', 'kick-bass'];

for (let i = 0; i < musicc.length; i++) {
  var li = document.querySelectorAll(".drum")[i];
  // funcion anonima llama a una funcion ya definida
  //
  li.addEventListener("click", function() {
    DoSound(i);
    animation(letters[i]);
  });
}
/*un poco guarrada pero funciona. Para cada click o de raton o tecla reutilizo la funcion handle click para que asocie al evento en cuestion
el sonido que le corresponde*/
function DoSound(i) {
  var audio = new Audio('sounds/' + musicc[i] + '.mp3');
  audio.play();
}



//buttonAnimation
//------------------------------------------------------


function animation(letter){
  var element=document.querySelector("."+letter);
  element.classList.add("pressed");
  setTimeout(function(){
    element.classList.toggle("pressed");
  }, 100)
}
