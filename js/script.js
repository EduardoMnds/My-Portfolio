document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de clique ao botão de download
    const downloadButton = document.getElementById('downloadButton');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            const fileUrl = 'files/meu.pdf'; // Caminho relativo ao arquivo
            window.open(fileUrl, '_blank');
        });
    }

    // Adicionar evento de clique ao menu hamburguer

    const menuHamburguer = document.querySelector('.menu-hamburguer')
    menuHamburguer.addEventListener('click', () => {
        toggleMenu();
    })

    function toggleMenu(){
        const nav = document.querySelector('.nav-responsive');
        menuHamburguer.classList.toggle('change');

        if (menuHamburguer.classList.contains('change')){
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }
});