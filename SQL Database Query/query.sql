-- Query to find all reservations made for dinner time (7 PM to 8 PM)
-- It get everything from the "RestaurantReservations" table
SELECT * FROM RestaurantReservations
-- Filter reservations to only include those made between 7 PM and 8 PM
WHERE ReservationTime BETWEEN '19:00:00' AND '20:00:00';

-- Query to calculate the total number of guests for reservations made between September 13, 2024, and September 25, 2024
-- It sums up the "NumberOfGuests" column
SELECT SUM(NumberOfGuests) AS TotalGuests
-- From the "RestaurantReservations" table
FROM RestaurantReservations
-- Filter reservations to only include those made between September 13, 2024, and September 25, 2024
WHERE ReservationDate BETWEEN '2024-09-13' AND '2024-09-25';
