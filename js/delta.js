function getCurrentTimeNanoseconds() {
    return BigInt(Date.now()) * BigInt(1000000);
}
