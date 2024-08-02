export const readableTimes = (pastDate: string): string => {
    const date = typeof pastDate === 'string' ? new Date(pastDate) : pastDate;

    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return 'Invalid date provided.';
    }

    const now = new Date();
    const diff = now.getTime() - date.getTime();

    if (diff < 0) {
        return 'in the future';
    }

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let result = '';

    if (days > 0) {
        result += `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        result += `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        result += `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        result += `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }

    return result || 'now';
};
