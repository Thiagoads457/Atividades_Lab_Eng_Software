function exibirDataAtual() {
    const data = new Date();

    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    const diaSemana = diasSemana[data.getDay()];
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    alert(dataFormatada);  
}

function iniciarRelogio() {
    const relogioElement = document.getElementById("relogio");

    function atualizarRelogio() {
        const data = new Date();
        const horas = String(data.getHours()).padStart(2, '0');
        const minutos = String(data.getMinutes()).padStart(2, '0');
        const segundos = String(data.getSeconds()).padStart(2, '0');

        const horarioAtual = `${horas}:${minutos}:${segundos}`;
        relogioElement.textContent = horarioAtual;
        
    }

    atualizarRelogio();  
    setInterval(atualizarRelogio, 1000);  
    
}
