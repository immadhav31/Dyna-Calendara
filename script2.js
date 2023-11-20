document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("background-video");
    video.playbackRate = 0.75;

    function updateCalendar() {
        const monthE1 = document.querySelector(".date h1");
        const fulldateE1 = document.querySelector(".date p");
        const daysE1 = document.querySelector(".days");

        const currentDate = new Date();
        const monthInx = currentDate.getMonth();
        const lastDay = new Date(currentDate.getFullYear(), monthInx + 1, 0).getDate();
        const firstDay = new Date(currentDate.getFullYear(), monthInx, 1).getDay();

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        monthE1.innerText = months[monthInx];
        fulldateE1.innerText = currentDate.toDateString();

        let days = "";

        for (let i = 0; i < firstDay; i++) {
            days += `<div class="empty"></div>`;
        }

        for (let i = 1; i <= lastDay; i++) {
            if (i === currentDate.getDate()) {
                days += `<div class="today">${i}</div>`;
            } else {
                days += `<div>${i}</div>`;
            }
        }

        daysE1.innerHTML = days;
    }

    updateCalendar();

    setInterval(updateCalendar, 24 * 60 * 60 * 1000);
});
