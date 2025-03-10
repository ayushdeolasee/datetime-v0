function get_month(return_number = false) {
    if (return_number) {
        const month = new Date().getMonth().toString();
        return month;
    } else {
        const month = new Date().getMonth();
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        return monthNames[month];
    }
}
