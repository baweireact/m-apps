"use strict";
class CountDown {
    constructor(obj) {
        this.endtime = obj.endtime;
        this.wrapper = obj.wrapper;
    }
    start() {
        setInterval(() => {
            let start = new Date().getTime();
            let end = new Date(this.endtime).getTime();
            let result = end - start;
            let time = this.formatDateTime(result);
            console.log(time);
            this.wrapper.innerHTML = time;
        }, 1000);
    }
    formatDateTime(shijiancha) {
        let days = shijiancha / 1000 / 60 / 60 / 24;
        let daysRound = Math.floor(days);
        let hours = shijiancha / 1000 / 60 / 60 - (24 * daysRound);
        let hoursRound = Math.floor(hours);
        let minutes = shijiancha / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
        let minutesRound = Math.floor(minutes);
        let seconds = shijiancha / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
        return `限时特卖 ${daysRound}天 ${hoursRound}时 ${minutesRound}分 ${Math.floor(seconds)}秒`;
    }
}
let countDown = new CountDown({ endtime: '2020/10/1', wrapper: document.getElementById('box') });
countDown.start();
function longest(str) {
    if (typeof str === 'undefined') {
        alert('未传递参数');
        return;
    }
    let arr = str.split(' ');
    let result = 0;
    let longestWord = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > result) {
            result = arr[i].length;
            longestWord = arr[i];
        }
    }
    console.log(`最长的单词是：${longestWord}`);
    return result;
}
let result = longest('let life be beautiful like summer flowers');
console.log(result);
longest();
