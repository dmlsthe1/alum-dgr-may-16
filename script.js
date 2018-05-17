function drawGrid() {
    for (i = -100; i < 100; i++) {
        var rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        for (j = -100; j < 100; j++) {
            var cell = document.createElement('div');
            cell.className = "cell";
            cell.id = `${i}-${j}`;
            rowDiv.appendChild(cell);
        }
    }
}