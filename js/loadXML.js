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

    // Criar a tabela HTML
    var table = document.createElement("table");
    table.border = "1";

    // Cabeçalho da tabela
    var headerRow = table.createTHead().insertRow();
    var headers = ["Nome", "Localização", "Tipo", "Dia", "Horário Semana", "Horário Fim de Semana"];
    for (var h = 0; h < headers.length; h++) {
        var headerCell = document.createElement("th");
        headerCell.textContent = headers[h];
        headerRow.appendChild(headerCell);
    }

    // Corpo da tabela
    for (var i = 0; i < listElements.length; i++) {
        var list = listElements[i];
        var nome = list.getElementsByTagName("Nome")[0].textContent;
        var localizacao = list.getElementsByTagName("Localizacao")[0].textContent;
        var tipo = list.getElementsByTagName("Tipo")[0].textContent;
        var dia = list.getElementsByTagName("Dia")[0].textContent;
        var horarioSemana = list.getElementsByTagName("HorarioAberturaSemana")[0].textContent + " - " + list.getElementsByTagName("HorarioFechoSemana")[0].textContent;
        var horarioFimSemana = list.getElementsByTagName("HorarioAberturaFimSemana")[0].textContent + " - " + list.getElementsByTagName("HorarioFechoFimSemana")[0].textContent;

        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        var cell6 = row.insertCell();

        cell1.textContent = nome;
        cell2.textContent = localizacao;
        cell3.textContent = tipo;
        cell4.textContent = dia;
        cell5.textContent = horarioSemana;
        cell6.textContent = horarioFimSemana;
    }

    // Adicionar a tabela ao elemento main na página HTML
    var main = document.querySelector("main");
    main.appendChild(table);
}
