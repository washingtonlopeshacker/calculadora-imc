const button = document.getElementById('button');
const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById("resultado");
  console.log (resultado, nome,altura,peso);
const getText = (imc) => {
    if(imc > 40) return "obesidade grau III";
    if(imc > 35) return "obesidade grau II";
    if(imc > 30) return "obesidade grau I";
    if(imc > 25) return "levemente acima do peso";
    if(imc > 18.5) return "Peso Ideal";
    return 'Abaixo do peso';
}
const imcCalc = () => {
    if (!peso.value || !altura.value || !nome.value) return resultado.textContent = 'Preencha todos os campos';
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent = `${nome.value} - ${getText(valorImc)}`;
    alert('analizando seu nivel de obesidade ');

}   
button.addEventListener('click',imcCalc);


