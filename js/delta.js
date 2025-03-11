function delta(start, end = null) {
    if (end === null) {
        const start_i64_value = Number(start.get().toObject().value);
        const start_i64_value_millis = Math.floor(start_i64_value / 1000000);
        const start_date = new Date(start_i64_value_millis);

        const delta = Math.floor((Date.now() - start_date) / 60000);
        return new fastn.recordInstanceClass({ value: delta });
    } else {
        const start_i64_value = Number(start.get().toObject().value);
        const start_i64_value_millis = Math.floor(start_i64_value / 1000000);
        const start_date = new Date(start_i64_value_millis);

        const end_i64_value = Number(end.get().toObject().value);
        const end_i64_value_millis = Math.floor(end_i64_value / 1000000);
        const end_date = new Date(end_i64_value_millis);

        const delta = Math.floor((end_date - start_date) / 60000);
        return new fastn.recordInstanceClass({ value: delta });
    }
}
