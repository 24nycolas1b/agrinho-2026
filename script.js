function calcularImpacto() {
    // Pegando os elementos dos checkboxes
    const agua = document.getElementById('agua').checked;
    const solar = document.getElementById('solar').checked;
    const plantio = document.getElementById('plantio').checked;
    
    const resultadoDiv = document.getElementById('resultado');
    
    // Contagem de quantas opções foram marcadas
    let pontos = 0;
    if (agua) pontos++;
    if (solar) points++; // Corrigindo para a variável correta: pontos++;
    if (plantio) pontos++;

    // Mensagens baseadas nos pontos
    let mensagem = "";
    
    if (pontos === 0) {
        mensagem = "⚠️ Sua fazenda ainda usa métodos tradicionais. Adote práticas sustentáveis para garantir o futuro do agro!";
        resultadoDiv.className = "resultado-alerta";
    } else if (pontos === 1 || pontos === 2) {
        mensagem = "🌱 Bom começo! Sua fazenda já está no caminho do equilíbrio, mas ainda pode melhorar a sustentabilidade.";
        resultadoDiv.className = "resultado-alerta";
    } else if (pontos === 3) {
        mensagem = "🚀 Excelente! Sua fazenda é um modelo de Agro Forte e Sustentável. Produção em total harmonia com o meio ambiente!";
        resultadoDiv.className = "resultado-bom";
    }

    // Mostra o resultado na tela
    resultadoDiv.innerHTML = mensagem;
}