// 番茄时钟逻辑
let timerInterval;

document.getElementById('startButton').addEventListener('click', () => {
    const inputMinutes = document.getElementById('inputMinutes').value;
    let countdownTime = inputMinutes > 0 ? inputMinutes * 60 : 25 * 60; // 默认为 25 分钟

    clearInterval(timerInterval); // 清除任何现有的计时器

    timerInterval = setInterval(() => {
        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;
        document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (countdownTime === 0) {
            clearInterval(timerInterval);
            alert('时间到！休息一下吧！');
        }

        countdownTime--;
    }, 1000);
});

// 停止按钮逻辑
document.getElementById('stopButton').addEventListener('click', () => {
    clearInterval(timerInterval); // 停止计时器
    document.getElementById('timer').innerText = '计时已停止'; // 更新显示
});