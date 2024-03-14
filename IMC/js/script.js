var form = document.getElementById('forma');

form.addEventListener('submit', function(event){
    event.preventDefault();

    var weight = document.getElementById('weight').value; 
    var height = document.getElementById('height').value;
    var bmi = (weight/(height*height)).toFixed(2);
    var value = document.getElementById('value'); 
    let description = '';

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';
        value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');


    if (bmi < 18.5){
        description = 'Estão faltando alguns quilinhos...';
    } 

    else if (bmi >= 18.5 && bmi <= 25) {
        description = "Peso ideal. Parabéns! ";
        value.classList.remove('attention');
        value.classList.add('normal');
    }

    else if (bmi > 25 && bmi <= 30) {
        description = "Sobrepeso.";
    }

    else if (bmi > 30 && bmi <= 35) {
        description = "Obesidade Moderada(Grau de obesidade I).";
    }

    else if (bmi > 35 && bmi <= 40) {
        description = "Obesidade Severa(Grau de obesidade II).";
    }

    else {
        description = "Obesidade Morbida(Grau de obesidade III)";
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
    }
});


form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calcular').click();
    }
});