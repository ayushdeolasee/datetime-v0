function get_month(value) {
    const i64_value = Number(value.get().toObject().value);
    const date = new Date(i64_value / 1000000);
    return date.getMonth() + 1;
}
