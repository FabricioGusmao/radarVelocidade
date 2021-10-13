//velocidade máxima de até 70km/h
// a cada 5km acima do limite voce ganha 1 ponto
//Math.Floor() para arredondar
//caso pontos maior que 12 -> "Carteira supendida"


verificarVelocidade(150);

function verificarVelocidade(velocidade){
   if (velocidade <= 70)
   console.log("ok");
   else{
      const pontos = Math.floor(((velocidade - 70)/5))
      if(pontos >= 12)
      console.log("Carteira Suspensa");
      else
         console.log("Pontos", pontos);
   }
}