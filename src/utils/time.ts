export const getTimeOfDay = () => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 5 && hours < 7) {
        return '早晨';
    } else if
    (hours >= 7 && hours < 12) {
        return '上午';
    } else if
    (hours >= 12 && hours < 18) {
        return '下午';
    } else if (hours >= 18 && hours < 23) {
        return '晚上';
    } else {
        return '凌晨';
    }
}