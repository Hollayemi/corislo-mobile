export const formatDistance = (distance: any) => {
    if (distance < 1000) {
        return `${distance.toFixed(2)} m`;
    } else if (distance < 1_000_000) {
        // less than 1 million meters
        const km = (distance / 1000).toFixed(2);
        return `${km} km`;
    } else {
        // 1 million meters or more
        const Mm = (distance / 1_000_000).toFixed(2);
        return `${Mm} Mm`;
    }
};

export const reshapePrice = (price: any) => {
    if (typeof parseInt(price) === "number") {
        return `₦ ${parseInt(price).toLocaleString()}`;
    }
};


export const formatDate = (
    value: Date | string = new Date(),
    newFormat?: Intl.DateTimeFormatOptions
): string => {
    if (!value) return value.toString();

    const formatting: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
        ...newFormat,
    };

    return new Intl.DateTimeFormat("en-US", formatting).format(new Date(value));
};

// ** Returns short month of passed date
export const formatDateToMonthShort = (
    value: Date | string,
    toTimeForCurrentDay: boolean = true,
    format: Intl.DateTimeFormatOptions = {}
): string => {
    const date = new Date(value);
    let formatting: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        ...format,
    };

    if (toTimeForCurrentDay && isToday(date)) {
        formatting = { hour: "numeric", minute: "numeric" };
    }

    return new Intl.DateTimeFormat("en-US", formatting).format(new Date(value));
};

// Helper function to check if the passed date is today
const isToday = (someDate: Date): boolean => {
    const today = new Date();
    return (
        someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear()
    );
};
