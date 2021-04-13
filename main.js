let block = document.getElementById('block');


block.onmousedown = function (event) {
    // двигает block по экрану, меняя его координаты
    function moveAt(pageX, pageY) {
        block.style.left = pageX - shiftX + 'px';
        block.style.top = pageY - shiftY + 'px';
    }

    // вызывает функцию moveAt при обработке события
    // осуществляет плавное передвижение блока
    function onMouseMove(event) {
        setTimeout(moveAt, 150, event.pageX, event.pageY);
    }

    // отпускает block, удаляет ненужные обработчики
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

    // убираем рамочку выделения
    event.preventDefault();

    // сдвиги по X и Y, отнимаем от клиентских координат размер и позицию block
    // нужны для того, чтобы избежать центрирования курсора
    const {left, top} = block.getBoundingClientRect();
    let shiftX = event.clientX - left
    let shiftY = event.clientY - top;

    // регистрирует событие "движение мыши", вызывает функцию, которая тащит block
    // при отпускании сразу вызывает функцию onMouseUp
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);


};

// отключает Drag`n`Drop браузера, чтобы не было конфликта
block.ondragstart = function() {
    return false;
};

