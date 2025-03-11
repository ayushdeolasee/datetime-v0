function parts(value) {
    const i64_value = Number(value.get().toObject().value);
    const i64_value_millis = Math.floor(i64_value / 1000000);
    const date = new Date(i64_value_millis);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const millisecond = date.getMilliseconds();
    const return_object = {
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
