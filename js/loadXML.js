function loadXMLDoc(filename) {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, true);
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var xmlDoc = xhttp.responseXML;
            if (xmlDoc) {
                console.log("XML carregado com sucesso");
                processXML(xmlDoc);
            } else {
                console.error("Erro ao carregar XML");
            }
        } else if (xhttp.readyState == 4) {
            console.error("Erro na solicitação: " + xhttp.status);
        }
    };
    xhttp.send();
}

function processXML(xmlDoc) {
    var listElements = xmlDoc.getElementsByTagName("List");
    console.log("Número de elementos <List> encontrados: " + listElements.length);
    for (var i = 0; i < listElements.length; i++) {
        var list = listElements[i];
        var nome = list.getElementsByTagName("Nome")[0].textContent;
        var localizacao = list.getElementsByTagName("Localizacao")[0].textContent;
        var horarioSemana = list.getElementsByTagName("HorarioAberturaSemana")[0].textContent + " - " + list.getElementsByTagName("HorarioFechoSemana")[0].textContent;
        var horarioFimSemana = list.getElementsByTagName("HorarioAberturaFimSemana")[0].textContent + " - " + list.getElementsByTagName("HorarioFechoFimSemana")[0].textContent;
        var tipo = list.getElementsByTagName("Tipo")[0].textContent;

        console.log("Processando elemento:", nome, localizacao, horarioSemana, horarioFimSemana, tipo);

        var detalhesCampo = "<div class='campo'>" +
                            "<h4>" + nome + "</h4>" +
                            "<p><strong>Localização:</strong> " + localizacao + "</p>" +
                            "<p><strong>Horário Semana:</strong> " + horarioSemana + "</p>" +
                            "<p><strong>Horário Fim de Semana:</strong> " + horarioFimSemana + "</p>" +
                            "</div>";

        var sectionId;
        switch (tipo) {
            case "Futebol":
                sectionId = "campos-futebol";
                break;
            case "Padel":
                sectionId = "campos-padel";
                break;
            case "Tenis":
                sectionId = "campos-tenis";
                break;
            default:
                console.warn("Tipo desconhecido:", tipo);
                continue; // Ignorar tipos desconhecidos
        }

        var section = document.querySelector(".campo-section#" + sectionId);
        if (section) {
            section.innerHTML += detalhesCampo;
            console.log("Adicionado à seção:", sectionId);
        } else {
            console.error("Seção não encontrada para o tipo:", tipo);
        }
    }
}

// Chame a função com o nome do arquivo XML
loadXMLDoc('xml/reserva_campo1.xml');
