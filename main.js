let square = document.getElementById('square');
square.onmousedown = function(event) {

    let shiftX = event.clientX - square.getBoundingClientRect().left;
    let shiftY = event.clientY - square.getBoundingClientRect().top;

    square.style.position = 'absolute';
    square.style.zIndex = 1000;
    document.body.append(square);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        square.style.left = pageX - shiftX + 'px';
        square.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    // передвигаем square при событии mousemove
    document.addEventListener('mousemove', onMouseMove);

    // отпустить square, удалить ненужные обработчики
    square.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        square.onmouseup = null;
    };

};

square.ondragstart = function() {
    return false;
};

