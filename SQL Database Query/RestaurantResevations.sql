CREATE TABLE RestaurantReservations (
    Reservation_ID INTEGER PRIMARY KEY AUTOINCREMENT,  -- Unique identifier for each reservation
    UserName NOT NULL,                                  -- Customer's full name
    UserEmail NOT NULL,                                 -- Customer's email address
    ReservationDate DATE NOT NULL,                      -- Date of the reservation
    ReservationTime TIME NOT NULL,                      -- Time of the reservation
    NumberOfGuests INTEGER NOT NULL                     -- Number of people in the party
);

-- Insert sample reservation data into the table
INSERT INTO RestaurantReservations (UserName, UserEmail, ReservationDate, ReservationTime, NumberOfGuests) VALUES
('Alice', 'alice@example.com', '2024-09-20', '19:00:00', 4),      -- Alice's reservation for 4 guests
('Bob', 'bob@example.com', '2024-09-27', '20:30:00', 2),          -- Bob's reservation for 2 guests
('Charlie', 'charlie@example.com', '2024-09-13', '18:45:00', 3),  -- Charlie's reservation for 3 guests
('Diana', 'diana@example.com', '2024-09-06', '19:30:00', 5),      -- Diana's reservation for 5 guests
('Ethan', 'ethan@example.com', '2024-09-13', '21:00:00', 2);      -- Ethan's reservation for 2 guests