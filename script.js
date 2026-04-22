// ===== TYPEWRITER EFFECT (homepage only) =====
var i = 0;
var txt = 'YA is a type of literature whose targeted audience ranges from 12-18 years old. Below you will find 3 different genres:';
var speed = 50;

function typeWriter() {
if (i < txt.length) {
var el = document.getElementById("demo");
if (el) {
el.innerHTML += txt.charAt(i);
i++;
setTimeout(typeWriter, speed);
}
}
}

// ===== BOOK PAGINATION =====
var CARDS_PER_PAGE = 3;
var currentPage = 1;

function initPagination() {
var grid = document.querySelector('.book-grid');
if (!grid) return;

var cards = Array.from(grid.querySelectorAll('.book-card'));
var totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);

// Build pagination controls
var pagination = document.createElement('div');
pagination.className = 'pagination';
pagination.innerHTML =
'<button id="btn-prev" onclick="changePage(-1)">&#8592; Previous</button>' +
'<span id="page-indicator"></span>' +
'<button id="btn-next" onclick="changePage(1)">Next &#8594;</button>';
grid.parentNode.insertBefore(pagination, grid.nextSibling);

showPage(cards, 1, totalPages);
}

function showPage(cards, page, totalPages) {
var start = (page - 1) * CARDS_PER_PAGE;
var end = start + CARDS_PER_PAGE;

cards.forEach(function(card, index) {
card.style.display = (index >= start && index < end) ? 'flex' : 'none';
});

document.getElementById('page-indicator').textContent = 'Page ' + page + ' of ' + totalPages;
document.getElementById('btn-prev').disabled = page === 1;
document.getElementById('btn-next').disabled = page === totalPages;
}

function changePage(direction) {
var grid = document.querySelector('.book-grid');
var cards = Array.from(grid.querySelectorAll('.book-card'));
var totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);

currentPage += direction;
if (currentPage < 1) currentPage = 1;
if (currentPage > totalPages) currentPage = totalPages;

showPage(cards, currentPage, totalPages);
window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== INIT =====
window.onload = function() {
typeWriter();
initPagination();
};