function onClick(id) {
    var elementAngry = document.getElementById('angry');
    var elementSmile = document.getElementById('smile');
    var elementIconSmall = document.getElementById('icon_small');

    if (id == 'angry') {
        elementAngry.classList.add('d-block', 'show');
        elementSmile.classList.add('d-none');
        elementIconSmall.classList.add('d-none');

        elementSmile.classList.remove('d-block', 'hide');
        elementIconSmall.classList.remove('d-block', 'hide');
    } else if (id == 'smile') {
        elementAngry.classList.add('d-none');
        elementSmile.classList.add('d-block','show');
        elementIconSmall.classList.add('d-none');

        elementAngry.classList.remove('d-block', 'hide');
        elementIconSmall.classList.remove('d-block', 'hide');
    } else if (id == 'icon_small') {
        elementAngry.classList.add('d-none');
        elementSmile.classList.add('d-none');
        elementIconSmall.classList.add('d-block', 'show');

        elementAngry.classList.remove('d-block', 'hide');
        elementSmile.classList.remove('d-block', 'hide');
    }
}

// function addClass(element, className) {
//     element.add(className);
// }

// function removeClass(element, className) {
//     element.remove(className);
// }