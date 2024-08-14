const girardado = document.getElementById("girardado");
const resultadoDado = document.getElementById("dadoresultado");
const calcularDano = document.getElementById("calcular-dano");
const danoExibir = document.getElementById("Dano");
const valoresCriticos = document.getElementById("valores-criticos");
const precisaoInput = document.getElementById("precisao");
const fisicoInput = document.getElementById("fisico");
const tecnicaInput = document.getElementById("tecnica");

girardado.addEventListener("click", function() {
    const dado = Math.floor(Math.random() * 100) + 1;
    resultadoDado.textContent = dado;
    calcularDanoTotal();
});

function calcularDanoTotal(dado) {
    const fisico = parseFloat(fisicoInput.value);
    const precisao = parseFloat(precisaoInput.value);
    const tecnica = parseFloat(tecnicaInput.value);
    const raspao = Math.round(precisao * 0.40);
    const acerto = Math.round(precisao * 0.25);
    const blackFlash = Math.round(precisao * 0.10);
    let dano;
    raspao1.textContent = `raspão = ${raspao}`
    acerto1.textContent = `acerto = ${acerto}`
    blackFlash1.textContent = `blackFlash = ${blackFlash}`

    if (dado === 1) {
        dano = (fisico + tecnica * 0.375 + 10) * 3;
        return `Dano Crítico de 300% Black Flash: ${dano.toFixed(2)}`;
    } else if (dado <= blackFlash) {
        dano = fisico + tecnica * 0.375 + 10;
        return `Dano Crítico: ${dano.toFixed(2)}`;
    } else if (dado <= acerto) {
        dano = fisico + tecnica * 0.25 + 10;
        return `Dano de Acerto: ${dano.toFixed(2)}`;
    } else if (dado <= raspao) {
        dano = fisico + tecnica * 0.125 + 5;
        return `Dano de Raspão: ${dano.toFixed(2)}`;
    } else {
        return 'Você Errou';
    }
}

calcularDano.addEventListener("click", function() {
    const dado = parseInt(resultadoDado.textContent, 10);
    if (!isNaN(dado)) {
        danoExibir.textContent = calcularDanoTotal(dado);
    } else {
        danoExibir.textContent = 'Primeiro, jogue o dado.';
    }
});

precisaoInput.addEventListener("input", atualizarValoresCriticos);
