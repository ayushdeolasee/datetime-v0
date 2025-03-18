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

function usertz(datetime) {
    const i64_value = Number(datetime.get().toObject().dt);
    const i64_value_millis = Math.floor(i64_value / 1000000);
    const utcDate = new Date(i64_value_millis);
    const timezoneOffsetMs = utcDate.getTimezoneOffset() * 60000;

    const localTimeMs = utcDate.getTime() - timezoneOffsetMs;
    const localNanoTime = BigInt(localTimeMs) * BigInt(1000000);

    return new fastn.recordInstanceClass({
        dt: localNanoTime,
    });
}

function timezone_offset() {
    const currentDate = new Date();
    const timezone_offset = currentDate.getTimezoneOffset();
    return new fastn.recordInstanceClass({ timezone_offset: timezone_offset });
}

function delta(end, start = null) {
    if (start == null) {
        console.log("Using no end");
        const end_i64_value = Number(end.get().toObject().dt);
        const end_i64_value_millis = Math.floor(end_i64_value / 1000000);
        const end_date = new Date(end_i64_value_millis);

        const delta = -Math.floor((new Date() - end_date) / 60000);
        return new fastn.recordInstanceClass({ delta: delta });
    } else {
        console.log("Using end");
        const start_i64_value = Number(start.get().toObject().dt);
        const start_i64_value_millis = Math.floor(start_i64_value / 1000000);
        const start_date = new Date(start_i64_value_millis);

        const end_i64_value = Number(end.get().toObject().dt);
        const end_i64_value_millis = Math.floor(end_i64_value / 1000000);
        const end_date = new Date(end_i64_value_millis);
        const delta = Math.floor((end_date - start_date) / 60000);
        return new fastn.recordInstanceClass({ delta: delta });
    }
}

function parts(dt) {
    const i64_value = Number(dt.get().toObject().dt);
    const i64_value_millis = Math.floor(i64_value / 1000000);
    const date = new Date(i64_value_millis);

    const timezone_offset = date.getTimezoneOffset();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const millisecond = date.getMilliseconds();
    const return_object = {
        dt: i64_value,
        timezone_offset: timezone_offset,
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
    };
    return new fastn.recordInstanceClass(return_object);
}
