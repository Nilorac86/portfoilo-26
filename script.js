
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('nav a[data-target]')


function showPage(pageId){
    pages.forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}


navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.dataset.target;
        showPage(target);
    });
});