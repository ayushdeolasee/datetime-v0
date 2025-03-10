function get_month(value) {
    const i64_value = Number(value.get().toObject().value);
    const i64_value_millis = Math.floor(i64_value / 1000000);
    const date = new Date(i64_value_millis);
    return date.getMonth() + 1;
}
