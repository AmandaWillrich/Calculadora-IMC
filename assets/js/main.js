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
    console.log('Prevented Event');
    setOutput('A');
});

function setOutput (msg) {
    const resultado = document.querySelector('#output');
    resultado.innerHTML = msg;
}