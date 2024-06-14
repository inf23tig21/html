function openPopupAndDownload(url, filename) {
    // Abrir o ficheiro em uma nova janela popup
    var popup = window.open('', '_blank', 'width=600,height=400');

    // HTML para o conteúdo da janela popup
    var popupContent = `
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Download</title>
            <script>
                // Função para iniciar o download
                function startDownload() {
                    var downloadLink = document.createElement('a');
                    downloadLink.href = '${url}';
                    downloadLink.download = '${filename}';
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                }
            </script>
        </head>
        <body onload="startDownload()">
            <p>Clique <a href="${url}" download="${filename}">aqui</a> caso o download não inicie automaticamente.</p>
        </body>
        </html>
    `;

    // Escrever o conteúdo HTML na janela popup
    popup.document.write(popupContent);
}