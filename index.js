const hora = 19;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Olá')
}

// O if pode ser utilizado sozinho, outra condição similar ao elif será else if, outra final será else
// if pode ser usado sozinho usando true and false

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa')
} else {
    console.log('Não vou sair de casa')
}