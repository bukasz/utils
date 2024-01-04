const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateIdleTime(workHours, workMinutes, workSeconds) {
  const totalWorkMinutes = workHours * 60 + workMinutes + workSeconds / 60;
  const idleMinutes = totalWorkMinutes / 6; // 10 minutes of idle for every hour of work
  let hours = Math.floor(idleMinutes / 60);
  let minutes = Math.floor(idleMinutes % 60);
  let seconds = Math.floor((idleMinutes % 1) * 60);

  // Format the output
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
  const match = workTime.match(/(\d+)h (\d+)m (\d+)s/);

  if (match) {
    const workHours = parseInt(match[1]);
    const workMinutes = parseInt(match[2]);
    const workSeconds = parseInt(match[3]);

    const idleTime = calculateIdleTime(workHours, workMinutes, workSeconds);
    console.log(`Idle Time: ${idleTime}`);
  } else {
    console.log('Invalid input. Please enter the work time in the format: Xh Ym Zs');
  }

  rl.close();
});
