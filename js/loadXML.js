// Função para carregar e processar o XML
function loadXMLDoc(filename) {
    var xhttp;
    if (window.XMLHttpRequest) {
        // Para navegadores modernos
        xhttp = new XMLHttpRequest();
    } else {
        // Para versões antigas do Internet Explorer
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();
    return xhttp.responseXML;
}

// Função para extrair e exibir os dados do XML
function displayXML() {
    var xmlDoc = loadXMLDoc("../xml/reserva_campo1.XML");

    // Acessando os elementos do XML
    var lists = xmlDoc.getElementsByTagName("List");

    // Criando elementos HTML para exibir os dados
    var section = document.querySelector("main section");
    var heading = document.createElement("h3");
    heading.textContent = "Lista de Campos Disponíveis";

    section.appendChild(heading);

    // Iterando sobre cada item da lista no XML
    for (var i = 0; i < lists.length; i++) {
        var nome = lists[i].getElementsByTagName("Nome")[0].textContent;
        var localizacao = lists[i].getElementsByTagName("Localizacao")[0].textContent;
        var tipo = lists[i].getElementsByTagName("Tipo")[0].textContent;
        var diaSemana = lists[i].getElementsByTagName("Dia")[0].textContent;
        var horarioSemana = lists[i].getElementsByTagName("HorarioAberturaSemana")[0].textContent + " - " + lists[i].getElementsByTagName("HorarioFechoSemana")[0].textContent;
        var fimSemana = lists[i].getElementsByTagName("FimSemana")[0].textContent;
        var horarioFimSemana = lists[i].getElementsByTagName("HorarioAberturaFimSemana")[0].textContent + " - " + lists[i].getElementsByTagName("HorarioFechoFimSemana")[0].textContent;

        // Criando elementos HTML para cada campo
        var divCampo = document.createElement("div");
        divCampo.classList.add("campo");

        var tituloCampo = document.createElement("h4");
        tituloCampo.textContent = nome;

        var tipoCampo = document.createElement("p");
        tipoCampo.textContent = "Tipo: " + tipo;

        var infoLocalizacao = document.createElement("p");
        infoLocalizacao.textContent = "Localização: " + localizacao;

        var infoDiaSemana = document.createElement("p");
        infoDiaSemana.innerHTML = "<strong>Dias da Semana:</strong><br>" + diaSemana + horarioSemana;

        var infoFimSemana = document.createElement("p");
        infoFimSemana.innerHTML = "<strong>Fim de Semana:</strong><br>" + fimSemana + horarioFimSemana;

        // Adicionando elementos ao divCampo
        divCampo.appendChild(tituloCampo);
        divCampo.appendChild(tipoCampo);
        divCampo.appendChild(infoLocalizacao);
        divCampo.appendChild(infoDiaSemana);
        divCampo.appendChild(infoFimSemana);

        // Adicionando divCampo à seção principal
        section.appendChild(divCampo);
    }
}

// Chamando a função displayXML quando o documento HTML estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    displayXML();
});
