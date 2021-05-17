

var smileIcon = document.getElementById('smileIcon');
var angryIcon = document.getElementById('angryIcon');
var sadIcon = document.getElementById('sadIcon');

function onClick(id) {

    if (id == 'smile') {
        smileIcon.classList.add('d-block');
        smileIcon.classList.remove('d-none');

        angryIcon.classList.remove('d-block');
        angryIcon.classList.add('d-none');

        sadIcon.classList.remove('d-block');
        sadIcon.classList.add('d-none');
    } else if (id == 'angry') {
        angryIcon.classList.add('d-block');
        angryIcon.classList.add('d-block');

        smileIcon.classList.remove('d-block');
        smileIcon.classList.add('d-none');

        sadIcon.classList.add('d-none');
        sadIcon.classList.remove('d-block');
    } else if (id == 'sad') {
        sadIcon.classList.add('d-block');
        sadIcon.classList.remove('d-none');

        smileIcon.classList.add('d-none');
        smileIcon.classList.remove('d-block');

        angryIcon.classList.add('d-none');
        angryIcon.classList.remove('d-block');
    }
}