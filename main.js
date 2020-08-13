$(function () {
    $('[data-toggle="modal"]').hover(function () {
        var modalId = $(this).data('target');
        $(modalId).modal('show');
    });
});

$('a[href="#ex1"]').click(function () {
    $(this).modal({
        fadeDuration: 500,
        fadeDelay: 0.50
    });
    return false;
})

function toggleAgenda() {
    var x = document.getElementById("collapsableDiv");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
    modal.style.display = 'block';
}

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}