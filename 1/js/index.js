function onClick(id) {
    var elementAngry = document.getElementById('angry');
    var elementSmile = document.getElementById('smile');
    var elementIconSmall = document.getElementById('icon_small');

    if (id == 'angry') {
        elementAngry.classList.add('d-block');
        elementSmile.classList.add('d-none');
        elementIconSmall.classList.add('d-none');

        elementSmile.classList.remove('d-block');
        elementIconSmall.classList.remove('d-block');
    } else if (id == 'smile') {
        elementAngry.classList.add('d-none');
        elementSmile.classList.add('d-block');
        elementIconSmall.classList.add('d-none');

        elementAngry.classList.remove('d-block');
        elementIconSmall.classList.remove('d-block');
    } else if (id == 'icon_small') {
        elementAngry.classList.add('d-none');
        elementSmile.classList.add('d-none');
        elementIconSmall.classList.add('d-block');

        elementAngry.classList.remove('d-block');
        elementSmile.classList.remove('d-block');
    }
}

// function addClass(element, className) {
//     element.add(className);
// }

// function removeClass(element, className) {
//     element.remove(className);
// }