let block = document.getElementById('block');

// обработка события "при нажатой ЛКМ"
block.onmousedown = function(event) {

    // Сдвиги по X и Y, отнимаем от клиентских координат размер и позицию block
    // Нужны для того, чтобы избежать центрирования курсора
    let shiftX = event.clientX - block.getBoundingClientRect().left;
    let shiftY = event.clientY - block.getBoundingClientRect().top;

    // Двигает block по экрану, меняя его координаты
    function moveAt(pageX, pageY) {
        block.style.left = pageX - shiftX + 'px';
        block.style.top = pageY - shiftY + 'px';
    }

    // вызывает функцию moveAt при обработке события
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // регистрирует событие "движение мыши", вызывает функцию, которая тащит block
    document.addEventListener('mousemove', onMouseMove);

    // отпускает block, удаляет ненужные обработчики
    block.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        block.onmouseup = null;
    };
};

// отключает Drag`n`Drop браузера, чтобы не было конфликта
block.ondragstart = function() {
    return false;
};

