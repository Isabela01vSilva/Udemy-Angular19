/* Butão do video */
var myVideo = document.getElementById("video1"); 
function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function enviar(){
  email = (txt_email.value);
  if(txt_nome.value == "" ){
    alert('Preencha o campo nome');
  } 
  else if(txt_nome.value.length < 1){
    alert('Preencha o campo nome corretamente!');
  }
  else if(email == ""){
    alert('Preencha o campo email');
  } 
  else if ('@' && '.') {
      alert('Preencha o campo email corretamente!');
  } 
   if(opiniao_site.value == '' ){
    alert('Preencha o campo de opinião');
  }
  else if(opiniao_site.value.length < 50){
    alert(' É necessario preencher o campo de opinião com mais de 50 caracteres!');
  }
}