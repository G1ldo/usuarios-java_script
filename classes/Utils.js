class Utils {
    static dateFormat(date){
        return this.showTwoDigits(date.getDate()) + '/' + this.showTwoDigits((date.getMonth()+1)) + '/' + date.getFullYear() +
        ' ' + this.showTwoDigits(date.getHours()) + ':' + this.showTwoDigits(date.getMinutes());
    }

    static showTwoDigits(time){
        time < 10 ? time = "0" + time.toString(): time;
        return time;
    }
}