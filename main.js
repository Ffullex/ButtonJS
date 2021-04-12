let block = document.getElementById('block');

// обработка события "при нажатой ЛКМ"
block.onmousedown = function (event) {

    // убираем рамочку выделения
    event.preventDefault();

    // сдвиги по X и Y, отнимаем от клиентских координат размер и позицию block
    // нужны для того, чтобы избежать центрирования курсора
    let shiftX = event.clientX - block.getBoundingClientRect().left;
    let shiftY = event.clientY - block.getBoundingClientRect().top;

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

    // регистрирует событие "движение мыши", вызывает функцию, которая тащит block
    // при отпускании сразу вызывает функцию onMouseUp
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    // отпускает block, удаляет ненужные обработчики
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
};

// отключает Drag`n`Drop браузера, чтобы не было конфликта
block.ondragstart = function() {
    return false;
};

