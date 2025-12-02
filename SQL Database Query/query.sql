-- Query to find all reservations made for dinner time (7 PM to 8 PM)
-- It get everything from the "RestaurantReservations" table
SELECT * FROM RestaurantReservations
-- Filter reservations to only include those made between 7 PM and 8 PM
WHERE ReservationTime BETWEEN '19:00:00' AND '20:00:00';

-- Query to find all reservations made in the last two weeks
-- It get everything from the "RestaurantReservations" table
SELECT * FROM RestaurantReservations
-- Filter reservations to only include those made between the 13th and the 25th of September 2024
WHERE ReservationDate BETWEEN '2024-09-13' AND '2024-09-25';