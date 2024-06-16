var images1 = [
    "https://www.porto.pt/_next/image?url=https%3A%2F%2Fmedia.porto.pt%2Foriginal_images%2Fmno_campo_jogos_parque_cidade_07.jpg&w=1460&q=85",
    "galeria/courts_1838_1554984559.jpg",
    "galeria/large_14633358_1199378666775348_6425216611299065351_o.jpg",
    "galeria/campaign1.jpg",
    "galeria/2019-11-07.jpg"
    // Adicionar mais imagens conforme necessário
];

var images2 = [
    "galeria/padel.jpg",
    "galeria/padel1.jpg",
    "galeria/padel2.jpeg",
    "galeria/padel3.jpeg",
    "galeria/padel4.jpg",
    "galeria/padel5.jpg",
    "galeria/padel6.jpeg",
    "galeria/padel7.jpg",
    "galeria/padel8.jpg"
    // Adicionar mais imagens conforme necessário
];

var images3 = [
    "galeria/tenis.jpg",
    "galeria/tenis1.jpg",
    "galeria/tenis2.jpeg",
    "galeria/tenis3.jpeg",
    "galeria/tenis4.jpg",
    "galeria/tenis5.jpg",
    "galeria/tenis6.jpg",
    "galeria/tenis7.jpg",
    "galeria/tenis8.jpg"
    // Adicionar mais imagens conforme necessário
];

var currentIndex1 = 0;
var currentIndex2 = 0;
var currentIndex3 = 0;
var slideshowInterval1;
var slideshowInterval2;
var slideshowInterval3;

function startSlideshow(galleryId) {
    showModal(galleryId);
    if (galleryId === "gallery1") {
        slideshowInterval1 = setInterval(function() { nextImage(galleryId); }, 2000); // Altera a imagem a cada 2 segundos
    } else if (galleryId === "gallery2") {
        slideshowInterval2 = setInterval(function() { nextImage(galleryId); }, 2000); // Altera a imagem a cada 2 segundos
    } else if (galleryId === "gallery3") {
        slideshowInterval3 = setInterval(function() { nextImage(galleryId); }, 2000); // Altera a imagem a cada 2 segundos
    }
}

function nextImage(galleryId) {
    if (galleryId === "gallery1") {
        currentIndex1 = (currentIndex1 + 1) % images1.length;
        showImage(galleryId, images1[currentIndex1]);
    } else if (galleryId === "gallery2") {
        currentIndex2 = (currentIndex2 + 1) % images2.length;
        showImage(galleryId, images2[currentIndex2]);
    } else if (galleryId === "gallery3") {
        currentIndex3 = (currentIndex3 + 1) % images3.length;
        showImage(galleryId, images3[currentIndex3]);
    }
}

function showImage(galleryId, imageSrc) {
    var modalImg = document.getElementById("modalImg" + galleryId.slice(-1));
    modalImg.src = imageSrc;
}

function showModal(galleryId) {
    var modal = document.getElementById("myModal" + galleryId.slice(-1));
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    if (modalId === "myModal1") {
        clearInterval(slideshowInterval1); // Parar o slideshow quando fechar o modal
    } else if (modalId === "myModal2") {
        clearInterval(slideshowInterval2); // Parar o slideshow quando fechar o modal
    } else if (modalId === "myModal3") {
        clearInterval(slideshowInterval3); // Parar o slideshow quando fechar o modal
    }
}