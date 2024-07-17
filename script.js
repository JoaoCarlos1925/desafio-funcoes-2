function calculaArea(largura, altura) {
    return largura * altura;
}

function exibirArea() {
    const largura = parseFloat(document.getElementById('largura').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const area = calculaArea(largura, altura);
    document.getElementById('resultado').innerText = 'A área do retângulo é: ' + area;
}
