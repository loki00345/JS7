function generateCalendar() {
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (!month || !year) {
        alert('Будь ласка, введіть номер місяця і рік');
        return;
    }

    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();

    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    const monthNames = [
        'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
        'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
    ];

    const title = document.createElement('h2');
    title.innerText = `${monthNames[month - 1]} ${year}`;
    calendar.appendChild(title);

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

    for (let day of daysOfWeek) {
        const th = document.createElement('th');
        th.innerText = day;
        headerRow.appendChild(th);
    }

    table.appendChild(headerRow);

    let row = document.createElement('tr');
    let startDay = (firstDay + 6) % 7;

    for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement('td');
        row.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if ((startDay + day - 1) % 7 === 0) {
            table.appendChild(row);
            row = document.createElement('tr');
        }
        const cell = document.createElement('td');
        cell.innerText = day;
        row.appendChild(cell);
    }

    table.appendChild(row);
    calendar.appendChild(table);
}