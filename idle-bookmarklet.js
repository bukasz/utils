javascript:(function() {
function calculateTime(workHours, workMinutes, workSeconds, ratio) {
    const totalWorkMinutes = workHours * 60 + workMinutes + workSeconds / 60;
    const minutes = totalWorkMinutes * ratio;
    let hours = Math.floor(minutes / 60);
    let minutesRemainder = Math.floor(minutes % 60);
    let seconds = Math.floor((minutes % 1) * 60);

    return { hours, minutes: minutesRemainder, seconds };
}

function formatTime({ hours, minutes, seconds }) {
    let result = "";
    if (hours > 0) {
    result += `${hours}h `;
    }
    if (minutes > 0) {
    result += `${minutes}m `;
    }
    if (seconds > 0 || result === "") {
    result += `${seconds}s`;
    }

    return result;
}

navigator.clipboard.readText().then(workTime => {
    const match = workTime.match(/.*?(\d+)h (\d+)m (\d+)s.*?/);

    if (match) {
    const workHours = parseInt(match[1]);
    const workMinutes = parseInt(match[2]);
    const workSeconds = parseInt(match[3]);

    const idleTime = calculateTime(workHours, workMinutes, workSeconds, 1/6);
    const spareTime = calculateTime(workHours, workMinutes, workSeconds, 45/480);

    alert(`Idle Time: ${formatTime(idleTime)}\nSpare Time: ${formatTime(spareTime)}`);
    } else {
    alert('Invalid input. Please copy the work time in the format: Xh Ym Zs to the clipboard');
    }
}).catch(err => {
    alert('Failed to read clipboard. Please ensure the work time is copied to the clipboard.');
});
})();