document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada com sucesso!');

    // Exemplo de conteúdo dinâmico
    const sections = document.querySelectorAll('.content-section article');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            alert(`Você clicou na seção: ${section.querySelector('h3').textContent}`);
        });
    });
});
