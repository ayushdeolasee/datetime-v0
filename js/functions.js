function datetime(diff) {
    const currentDate = new Date();
    const date = new Date(currentDate.getTime() + diff * 60000);

    const utcTime = new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds()
    );

    const now = BigInt(utcTime) * BigInt(1000000);
    return new fastn.recordInstanceClass({
        dt: now,
    });
}

function fmt(dt, ft) {
    const i64_value = Number(dt.get().toObject().dt);
    const i64_value_millis = Math.floor(i64_value / 1000000);

    // The issue is that when we create a Date object from milliseconds,
    // JavaScript assumes those milliseconds are in UTC but applies local timezone offset.
    // We need to explicitly work with UTC methods and convert to local timezone.

    // First, create the date object from the milliseconds
    const utcDate = new Date(i64_value_millis);

    console.log("Original UTC timestamp (ms):", i64_value_millis);
    console.log("Date interpreted by JS:", utcDate.toString());

    // Get the user's timezone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("Detected user timezone:", userTimeZone);

    // Convert to local timezone
    // This approach uses toLocaleString with the explicit timezone
    const localDate = new Date(
        utcDate.toLocaleString("en-US", { timeZone: userTimeZone })
    );
    const timezoneOffset = localDate.getTimezoneOffset();
    console.log("Timezone offset (minutes):", timezoneOffset);

    // Apply timezone offset if necessary
    const adjustedDate = new Date(utcDate.getTime());

    console.log("Adjusted date for local timezone:", adjustedDate.toString());

    // Use Intl.DateTimeFormat for formatting in the user's timezone
    const formatter = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: userTimeZone,
    });

    const formattedParts = formatter.formatToParts(adjustedDate);
    console.log("Formatted parts:", JSON.stringify(formattedParts));

    // Extract the formatted components
    let weekday, day, month, year, hour, minute, dayPeriod;

    formattedParts.forEach((part) => {
        switch (part.type) {
            case "weekday":
                weekday = part.value;
                break;
            case "day":
                day = part.value;
                break;
            case "month":
                month = part.value;
                break;
            case "year":
                year = part.value;
                break;
            case "hour":
                hour = part.value;
                break;
            case "minute":
                minute = part.value;
                break;
            case "dayPeriod":
                dayPeriod = part.value;
                break;
        }
    });

    // Add ordinal suffix to day
    const dayNum = parseInt(day);
    const suffixes = ["th", "st", "nd", "rd"];
    const relevantDigits =
        dayNum % 100 > 10 && dayNum % 100 < 14 ? 0 : dayNum % 10;
    const dayWithSuffix = dayNum + (suffixes[relevantDigits] || suffixes[0]);

    // Combine to create the final formatted string
    const result = `${weekday} ${dayWithSuffix} ${month} ${year} ${hour}:${minute}${dayPeriod}`;
    console.log("Final result:", result);

    return result;
}
