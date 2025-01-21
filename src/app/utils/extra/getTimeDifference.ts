export default function getTimeDifference(time: number) {
    const days = Math.round(Math.abs(time / 86400000));
    const hours = Math.floor(Math.abs(time / 3600000));
    const minutes = Math.round(Math.abs(time / 60000));

    if (time > 0) {
        if (days > 0) {
            return `due in ${days} day${days > 1 ? "s" : ""}`
        }
        return (hours > 0) ? `due in ${hours} hour${hours > 1 ? "s" : ""}` : `due in ${minutes} minute${minutes > 1 ? "s" : ""}`;
    } else if (time < 0) {
        if (days > 0) {
            return `${days} day${days > 1 ? "s" : ""} overdue`
        }
        return (hours > 0) ? `${hours} hour${hours > 1 ? "s" : ""} overdue` : `${minutes} minute${minutes > 1 ? "s" : ""} overdue`;
    }
}