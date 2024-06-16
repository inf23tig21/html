function loadXMLDoc(filename) {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();
    var xmlDoc = xhttp.responseXML;

    // Obter todos os elementos <List> do XML
    var listElements = xmlDoc.getElementsByTagName("List");

    // Iterar sobre cada elemento <List> no XML
    for (var i = 0; i < listElements.length; i++) {
        var list = listElements[i];
        var nome = list.getElementsByTagName("Nome")[0].textContent;
        var localizacao = list.getElementsByTagName("Localizacao")[0].textContent;
        var tipo = list.getElementsByTagName("Tipo")[0].textContent;
        var horarioSemana = list.getElementsByTagName("HorarioAberturaSemana")[0].textContent + " - " + list.getElementsByTagName("HorarioFechoSemana")[0].textContent;
        var horarioFimSemana = list.getElementsByTagName("HorarioAberturaFimSemana")[0].textContent + " - " + list.getElementsByTagName("HorarioFechoFimSemana")[0].textContent;

        // Construir a string com os detalhes do campo
        var detalhesCampo = "<div class='campo'>" +
                            "<h4>" + nome + "</h4>" +
                            "<p><strong>Localização:</strong> " + localizacao + "</p>" +
                            "<p><strong>Tipo:</strong> " + tipo + "</p>" +
                            "<p><strong>Horário Semana:</strong> " + horarioSemana + "</p>" +
                            "<p><strong>Horário Fim de Semana:</strong> " + horarioFimSemana + "</p>" +
                            "</div>";

        // Adicionar os detalhes do campo à seção apropriada
        var sectionId;
        switch (tipo) {
            case "Futebol":
                sectionId = "campos-futebol";
                break;
             case "Tenis":
                sectionId = "campos-tenis";
                break
            case "Padel":
                sectionId = "campos-padel";
                break;
            default:
                continue; // Ignorar tipos desconhecidos
        }

        var section = document.getElementById(sectionId);
        if (section) {
            section.innerHTML += detalhesCampo;
        }
    }
}
