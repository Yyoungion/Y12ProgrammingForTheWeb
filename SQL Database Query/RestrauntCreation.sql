CREATE TABLE RestrauntReservations (
    Reservation_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserName NOT NULL,
    UserEmail NOT NULL,
    ReservationDate DATE NOT NULL,
    ReservationTime TIME NOT NULL,
    NumberOfGuests INTEGER NOT NULL
;

INSERT INTO RestrauntReservations (UserName, UserEmail, ReservationDate, ReservationTime, NumberOfGuests) VALUES
('Alice', 'alice@example.com', '2024-09-20', '19:00:00', 4),
('Bob', 'bob@example.com', '2024-09-27', '20:30:00', 2),
('Charlie', 'charlie@example.com', '2024-09-13', '18:45:00', 3),
('Diana', 'diana@example.com', '2024-09-06', '19:30:00', 5),
('Ethan', 'ethan@example.com', '2024-09-13', '21:00:00', 2);