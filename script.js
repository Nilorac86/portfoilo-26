
const pages = document.querySelectorAll('.page');


function showPage(pageId){
    pages.forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

document.getElementById('toPage1').addEventListener('click', () => showPage('aboutme'));
document.getElementById('toPage2').addEventListener('click', () => showPage('project'));
document.getElementById('toPage3').addEventListener('click', () => showPage("contact"));