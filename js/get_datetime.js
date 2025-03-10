function get_datetime() {
    const now = BigInt(Date.now()) * BigInt(1000000);
    return new fastn.recordInstanceClass({ value: now });
}
