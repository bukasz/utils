const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

rl.question('Enter the work time (e.g., 8h 0m 0s): ', (workTime) => {
  const match = workTime.match(/(\d+)(h|m|s)/g);

  if (match) {
    let workHours = 0, workMinutes = 0, workSeconds = 0;

    match.forEach((item) => {
      const value = parseInt(item);
      if (item.includes('h')) {
        workHours = value;
      } else if (item.includes('m')) {
        workMinutes = value;
      } else if (item.includes('s')) {
        workSeconds = value;
      }
    });

    const idleTime = calculateTime(workHours, workMinutes, workSeconds, 1/6);
    const spareTime = calculateTime(workHours, workMinutes, workSeconds, 45/480);

    console.log(`Idle Time: ${formatTime(idleTime)}\nSpare Time: ${formatTime(spareTime)}`);
  } else {
    console.log('Invalid input. Please enter the work time in the format: Xh Ym Zs');
  }

  rl.close();
});