document.body.addEventListener('click', function() { 
    if (event.target.closest(".question")) return;
    removeActiveState();
});
document.querySelectorAll('.question').forEach(function (el) {
        //Rotate the arrow
        el.onclick = function () { 
            removeActiveState();
            setActive(this);
        };
    });

function setActive(el) {
    el.classList.add('active');
}

function removeActiveState() {
    document.querySelectorAll('.active').forEach(function (el) {
            el.classList.remove('active');
        });
}