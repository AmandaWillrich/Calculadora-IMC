// function getInputValue() {
//     let inputweight = document.getElementById('peso').value;
//     let inputheight = document.getElementById('altura').value;
// }

// document.getElementById("output").innerHTML = inputheight, inputweight;

// addEventListener('click', calculateImc);

// function calculateImc(inputweight, inputheight) {
//     let imc = inputweight / (inputheight * inputheight);
// }

// // document.getElementById("output").innerHTML = imc;

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#peso');
    const inputHeight = e.target.querySelector('#altura');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setOutput('Peso Inválido!', false);
        return;
    }
    
    if (!height) {
        setOutput('Altura Inválida!', false);
        return;
    }

    const imc = getImc(weight, height);
    const imcLevel = getImcResult(imc);

    const msg = `Seu IMC é ${imc}: ${imcLevel}`;

    setOutput(msg, true);
});

function getImcResult (imc) {
    const imcResult = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1',
    'Obesidade Grau 2', 'Obesidade Grau 3']

    if (imc >= 39.9) return imcResult[5];
    if (imc >= 34.9) return imcResult[4];
    if (imc >= 29.9) return imcResult[3];
    if (imc >= 24.9) return imcResult[2];
    if (imc >= 18.5) return imcResult[1];
    if (imc < 18.5) return imcResult[0];
}

function getImc (weight, height) {
    const imc = weight / height ** 2
    return imc.toFixed(2);
}

function createParagraph () {
    const p = document.createElement('p');
    return p;
}

function setOutput (msg, isValid) {
    const result = document.querySelector('#output');
    result.innerHTML = '';

    const p = createParagraph();

    if (isValid) {

    p.classList.add('good-result-paragraph');
    } else {
        p.classList.add('bad-result-paragraph')
    }

    p.innerHTML = msg;
    result.appendChild(p);
}