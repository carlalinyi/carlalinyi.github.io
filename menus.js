const btnBebidas = document.getElementById('btn-bebidas');
const submenu = document.querySelector('.submenu');

btnBebidas.addEventListener('click', () => {
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});
