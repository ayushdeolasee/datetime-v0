## Features to implement  
- [x] Get current date time 
- [x] Return Year from a datetime object
- [x] Return Month from a datetime object
- [x] Return Day from a datetime object
- [x] Return Hour from a datetime object
- [x] Return Minute from a datetime object
- [x] Return Second from a datetime object
- [x] Calculate time delta between two input dates
- [x] Calculate time delta between now and x time after
- [x] Get current time x amount of time after
- [x] Get only speciic parts (e.g. Year, Month) from a datetime string


Records:
- datetime

- timezone
- datetime-timezone

- datetime-extended
- datetime-delta
- instant
- duration


Functions: 
- now() -> datetime
- fmt(dt-tz: datetime, ft: string) -> string // timezone computed within the function

- current-timezone() -> timezone
- with-timezone(dt: datetime, tz: timezone) -> datetime-timezone

