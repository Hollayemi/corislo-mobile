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

export const formatTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Determine AM or PM suffix
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour format to 12-hour format
  const formattedHours = hours % 12 || 12; // 12-hour format with no 0
  const formattedMinutes = minutes.toString().padStart(2, '0'); // Ensure two digits for minutes

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};


export const timeSince = (date: Date | string | number): string => {
    const currentDate = new Date();
    const parsedDate = new Date(date); // Ensure it's a valid date

    // If the date is invalid, return a fallback message
    if (isNaN(parsedDate.getTime())) {
        return "Invalid date";
    }

    const timeElapsedInSeconds = Math.floor(
        (currentDate.getTime() - parsedDate.getTime()) / 1000
    );

    if (timeElapsedInSeconds < 60) {
        return "Just now";
    } else if (timeElapsedInSeconds < 3600) {
        const minutes = Math.floor(timeElapsedInSeconds / 60);
        return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (timeElapsedInSeconds < 86400) {
        const hours = Math.floor(timeElapsedInSeconds / 3600);
        return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else  {
        return `${formatDate(parsedDate)} ${formatTime(parsedDate)}`;
    }
};
