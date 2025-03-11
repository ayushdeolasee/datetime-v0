function datetime(diff) {
    const currentDate = new Date();
    const date = new Date(currentDate.getTime() + diff * 60000);
    console.log(date);
    const now = BigInt(date) * BigInt(1000000);
    return new fastn.recordInstanceClass({ value: now });
}
