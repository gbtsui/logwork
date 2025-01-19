export default function getTimeDifference(time: number) {
    const timeInSeconds = time / 1000;
    const days = Math.floor(timeInSeconds / 86400);
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds % 60);
    if (days > 0 || hours > 0 || minutes > 0) {
        if (days > 0) {
            return `due in ${days} day${days > 1? "s":""}`
        }
        return (hours>0) ? `due in ${hours} hour${hours > 1? "s":""}` : `due in ${minutes} minute${minutes > 1? "s":""}`;
    } else if (days < 0 || hours < 0) {
        if (-days > 0) {
            return `${-days} day${-days > 1? "s":""} overdue`
        }
        return (-hours>0) ? `${-hours} hour${-hours > 1? "s":""} overdue` : `${-minutes} minute${-minutes > 1? "s":""} overdue`;
    }
}