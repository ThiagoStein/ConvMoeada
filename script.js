//API
const url = "https://economia.awesomeapi.com.br/json/last/";
const url_name = ["USD-BRL", "EUR-BRL", "JPY-BRL", "CNY-BRL"];
const coins_name = ["USDBRL", "EURBRL", "JPYBRL", "CNYBRL"];
const coins = [];


for (let i = 0; i < url_name.length; i++) {
    fetch(url + url_name[i])

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
             let retorno = data[coins_name[i]];
             let high = parseFloat(retorno.high);
             let low = parseFloat(retorno.low);
             coins[i] = (high+low)/2;
        });
};


// Seleciona o input pelo ID
const valor = document.getElementById("valor");
const moeda = document.getElementById("moeda");
const resultado = document.getElementById("resultado");
const button = document.getElementById("conversao");


button.addEventListener("click", function() {
    valMoeda = Number(valor.value);
    moedaSelecionada = moeda.value;

    if (valMoeda === "" || moedaSelecionada === "") {

        alert("Preencha todos os campos!");
        
    }else{
        switch(moedaSelecionada) {
           
            case "dolar":
                resultado.innerHTML = `O valor em Dólar é: $${(valMoeda / coins[0]).toFixed(2)}`;
                break;
            case "euro":
                resultado.innerHTML = `O valor em Euro é: €${(valMoeda / coins[1]).toFixed(2)}`;
                break;
            case "iene":
                resultado.innerHTML = `O valor em Libra é: £${(valMoeda / coins[2]).toFixed(2)}`;
                break;
            case "yuan":
                resultado.innerHTML = `O valor em Libra é: £${(valMoeda / coins[3]).toFixed(2)}`;
                break;
            default:
                resultado.innerHTML = "Selecione uma moeda válida!";
        }
    }
    
});


const dolar= document.getElementById("dolar");
const euro = document.getElementById("euro");
const iene = document.getElementById("iene");
const yuan = document.getElementById("yuan");

dolar.addEventListener("click", function() {
    valor.placeholder = "Valor em Dólar";
    moeda.value = "dolar";
});
euro.addEventListener("click", function() {
    valor.placeholder = "Valor em Euro";
    moeda.value = "euro";
});
iene.addEventListener("click", function() {
    valor.placeholder = "Valor em Iene";
    moeda.value = "iene";
});
yuan.addEventListener("click", function() {
    valor.placeholder = "Valor em Yuan";
    moeda.value = "yuan";
});
