var troca = 0;
function esquerda(){
  troca += 1;
  switch (troca) {
    case 1:
      imagem1();
      break;
    case 2:
      imagem2();
      break;
    case 3:
      imagem3();
      break;
    default:
      // code
  }
  if(troca > 3){
    troca = 3;
    console.log("limite")
  }
}
function direita(){
  troca -= 1;
  switch (troca) {
    case 1:
      imagem1();
      break;
    case 2:
      imagem2();
      break;
    case 3:
      imagem3();
      break;
    default:
      // code
  }
  if(troca < 1){
    troca = 1;
    console.log("limite")
  }
}
function imagem1(){
  document.getElementById("imagem1").style.display = "inline";
  document.getElementById("imagem2").style.display = "none";
  document.getElementById("imagem3").style.display = "none";
}

  
function imagem2(){
  document.getElementById("imagem2").style.display = "inline";
  document.getElementById("imagem1").style.display = "none";
  document.getElementById("imagem3").style.display = "none";
}
function imagem3(){
  document.getElementById("imagem3").style.display = "inline";
  document.getElementById("imagem1").style.display = "none";
  document.getElementById("imagem2").style.display = "none";
}
