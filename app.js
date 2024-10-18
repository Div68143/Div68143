document.addEventListener("DOMContentLoaded", () => {
    const seats = document.querySelectorAll('.seat.available');
    seats.forEach(seat => {
        seat.addEventListener('click', function () {
            seats.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    document.getElementById('auto-assign').addEventListener('click', () => {
        let availableSeats = document.querySelectorAll('.seat.available');
        if (availableSeats.length > 0) {
            let autoSelectedSeat = availableSeats[0];
            availableSeats.forEach(seat => seat.classList.remove('selected'));
            autoSelectedSeat.classList.add('selected');
        }
    });
});
