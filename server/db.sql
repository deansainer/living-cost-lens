create table Countries (
    id integer primary key,
    country_name varchar(55)
);


create table Expenses (
    country_id integer,
    type varchar(255),
    description varchar(255),
    price decimal
)

INSERT INTO Cities (id, name) VALUES (1, 'Albania');
INSERT INTO Cities (id, name) VALUES (2, 'Algeria');
INSERT INTO Cities (id, name) VALUES (3, 'Argentina');
INSERT INTO Cities (id, name) VALUES (4, 'Armenia');
INSERT INTO Cities (id, name) VALUES (5, 'Australia');
INSERT INTO Cities (id, name) VALUES (6, 'Austria');
INSERT INTO Cities (id, name) VALUES (7, 'Azerbaijan');
INSERT INTO Cities (id, name) VALUES (8, 'Vietnam');
INSERT INTO Cities (id, name) VALUES (9, 'Belarus');
INSERT INTO Cities (id, name) VALUES (10, 'Belgium');
INSERT INTO Cities (id, name) VALUES (11, 'Bolivia');
INSERT INTO Cities (id, name) VALUES (12, 'Bosnia');
INSERT INTO Cities (id, name) VALUES (13, 'Brazil');
INSERT INTO Cities (id, name) VALUES (14, 'Bulgaria');
INSERT INTO Cities (id, name) VALUES (15, 'Canada');
INSERT INTO Cities (id, name) VALUES (16, 'Chile');
INSERT INTO Cities (id, name) VALUES (17, 'China');
INSERT INTO Cities (id, name) VALUES (18, 'Colombia');
INSERT INTO Cities (id, name) VALUES (19, 'Costa Rica');
INSERT INTO Cities (id, name) VALUES (20, 'Croatia');
INSERT INTO Cities (id, name) VALUES (21, 'Cyprus');
INSERT INTO Cities (id, name) VALUES (22, 'Czech Republic');
INSERT INTO Cities (id, name) VALUES (23, 'Denmark');
INSERT INTO Cities (id, name) VALUES (24, 'Ecuador');
INSERT INTO Cities (id, name) VALUES (25, 'Egypt');
INSERT INTO Cities (id, name) VALUES (26, 'Estonia');
INSERT INTO Cities (id, name) VALUES (27, 'Finland');
INSERT INTO Cities (id, name) VALUES (28, 'France');
INSERT INTO Cities (id, name) VALUES (29, 'Georgia');
INSERT INTO Cities (id, name) VALUES (30, 'Germany');
INSERT INTO Cities (id, name) VALUES (31, 'Greece');
INSERT INTO Cities (id, name) VALUES (32, 'China');
INSERT INTO Cities (id, name) VALUES (33, 'Hungary');
INSERT INTO Cities (id, name) VALUES (34, 'India');
INSERT INTO Cities (id, name) VALUES (35, 'Indonesia');
INSERT INTO Cities (id, name) VALUES (36, 'Venezuela');
INSERT INTO Cities (id, name) VALUES (37, 'Iraq');
INSERT INTO Cities (id, name) VALUES (38, 'Ireland');
INSERT INTO Cities (id, name) VALUES (39, 'Israel');
INSERT INTO Cities (id, name) VALUES (40, 'Italy');
INSERT INTO Cities (id, name) VALUES (41, 'Jamaica');
INSERT INTO Cities (id, name) VALUES (42, 'Japan');
INSERT INTO Cities (id, name) VALUES (43, 'Jordan');
INSERT INTO Cities (id, name) VALUES (44, 'Kazakhstan');
INSERT INTO Cities (id, name) VALUES (45, 'Kenya');
INSERT INTO Cities (id, name) VALUES (46, 'Uruguay');
INSERT INTO Cities (id, name) VALUES (47, 'Latvia');
INSERT INTO Cities (id, name) VALUES (48, 'United States');
INSERT INTO Cities (id, name) VALUES (49, 'Lithuania');
INSERT INTO Cities (id, name) VALUES (50, 'Luxembourg');
INSERT INTO Cities (id, name) VALUES (51, 'Malaysia');
INSERT INTO Cities (id, name) VALUES (52, 'Malta');
INSERT INTO Cities (id, name) VALUES (53, 'Mauritius');
INSERT INTO Cities (id, name) VALUES (54, 'Mexico');
INSERT INTO Cities (id, name) VALUES (55, 'Morocco');
INSERT INTO Cities (id, name) VALUES (56, 'Nepal');
INSERT INTO Cities (id, name) VALUES (57, 'Netherlands');
INSERT INTO Cities (id, name) VALUES (58, 'New Zealand');
INSERT INTO Cities (id, name) VALUES (59, 'North Macedonia');
INSERT INTO Cities (id, name) VALUES (60, 'Norway');
INSERT INTO Cities (id, name) VALUES (61, 'Oman');
INSERT INTO Cities (id, name) VALUES (62, 'United Kingdom');
INSERT INTO Cities (id, name) VALUES (63, 'Palestine');
INSERT INTO Cities (id, name) VALUES (64, 'Panama');
INSERT INTO Cities (id, name) VALUES (65, 'Peru');
INSERT INTO Cities (id, name) VALUES (66, 'Philippines');
INSERT INTO Cities (id, name) VALUES (67, 'Poland');
INSERT INTO Cities (id, name) VALUES (68, 'Portugal');
INSERT INTO Cities (id, name) VALUES (69, 'United Arab Emirates');
INSERT INTO Cities (id, name) VALUES (70, 'Romania');
INSERT INTO Cities (id, name) VALUES (71, 'Uzbekistan');
INSERT INTO Cities (id, name) VALUES (72, 'Ukraine');
INSERT INTO Cities (id, name) VALUES (73, 'Serbia');
INSERT INTO Cities (id, name) VALUES (74, 'Singapore');
INSERT INTO Cities (id, name) VALUES (75, 'Slovakia');
INSERT INTO Cities (id, name) VALUES (76, 'Slovenia');
INSERT INTO Cities (id, name) VALUES (77, 'South Africa');
INSERT INTO Cities (id, name) VALUES (78, 'South Korea');
INSERT INTO Cities (id, name) VALUES (79, 'Spain');
INSERT INTO Cities (id, name) VALUES (80, 'Sri Lanka');
INSERT INTO Cities (id, name) VALUES (81, 'Sweden');
INSERT INTO Cities (id, name) VALUES (82, 'Switzerland');
INSERT INTO Cities (id, name) VALUES (83, 'Taiwan');
INSERT INTO Cities (id, name) VALUES (84, 'Thailand');
INSERT INTO Cities (id, name) VALUES (85, 'Tunisia');
INSERT INTO Cities (id, name) VALUES (86, 'Turkey');


select * from Expenses join Countries on country_id=id where country_name='France';



insert into Expenses (city_id, type, description, price) values (1, 'Restaurants', 'Meal, Inexpensive Restaurant', 26.58);

alter table Expenses foreign key (country_id) references (Countries.id);
-----------------------------------------------------------

INSERT INTO Expenses (city_id, type, description, price) VALUES 
(1, 'Restaurants', 'Meal, Inexpensive Restaurant', 7.68),
(1, 'Restaurants', 'Meal for 2 People, Mid-range Restaurant, Three-course', 33.59),
(1, 'Restaurants', 'McMeal at McDonalds (or Equivalent Combo Meal)', 6.72),
(1, 'Restaurants', 'Domestic Beer (0.5 liter draught)', 2.21),
(1, 'Restaurants', 'Imported Beer (0.33 liter bottle)', 2.88),
(1, 'Restaurants', 'Coke/Pepsi (0.33 liter bottle)', 1.42),
(1, 'Restaurants', 'Water (0.33 liter bottle)', 0.70),
(1, 'Markets', 'Milk (regular), (1 liter)', 1.67),
(1, 'Markets', 'Loaf of Fresh White Bread (500g)', 0.82),
(1, 'Markets', 'Eggs (regular) (12)', 3.06),
(1, 'Markets', 'Local Cheese (1kg)', 9.39),
(1, 'Markets', 'Water (1.5 liter bottle)', 0.59),
(1, 'Markets', 'Bottle of Wine (Mid-Range)', 9.28),
(1, 'Markets', 'Domestic Beer (0.5 liter bottle)', 1.16),
(1, 'Markets', 'Imported Beer (0.33 liter bottle)', 1.62),
(1, 'Markets', 'Cigarettes 20 Pack (Marlboro)', 3.36),
(1, 'Transportation', 'One-way Ticket (Local Transport)', 0.38),
(1, 'Markets', 'Chicken Fillets (1kg)', 6.51),
(1, 'Transportation', 'Monthly Pass (Regular Price)', 15.36),
(1, 'Transportation', 'Gasoline (1 liter)', 1.87),
(1, 'Transportation', 'Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)', 20000.00),
(1, 'Rent Per Month', 'Apartment (1 bedroom) in City Centre', 407.41),
(1, 'Rent Per Month', 'Apartment (1 bedroom) Outside of Centre', 286.20),
(1, 'Rent Per Month', 'Apartment (3 bedrooms) in City Centre', 692.67),
(1, 'Rent Per Month', 'Apartment (3 bedrooms) Outside of Centre', 434.80),
(1, 'Utilities', 'Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment', 85.85),
(1, 'Utilities', 'Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)', 41.42),
(1, 'Utilities', 'Mobile Phone Monthly Plan with Calls and 10GB+ Data', 14.78),
(1, 'Sports And Leisure', 'Fitness Club, Monthly Fee for 1 Adult', 36.35),
(1, 'Sports And Leisure', 'Tennis Court Rent (1 Hour on Weekend)', 17.68),
(1, 'Sports And Leisure', 'Cinema, International Release, 1 Seat', 7.68),
(1, 'Clothing And Shoes', '1 Pair of Jeans (Levis 501 Or Similar)', 47.98),
(1, 'Clothing And Shoes', '1 Summer Dress in a Chain Store (Zara, H&M, ...)', 39.94),
(1, 'Clothing And Shoes', '1 Pair of Nike Running Shoes (Mid-Range)', 81.14),
(1, 'Clothing And Shoes', '1 Pair of Men Leather Business Shoes', 101.40),
(1, 'Buy Apartment Price', 'Price per Square Meter to Buy Apartment in City Centre', 1808.81),
(1, 'Buy Apartment Price', 'Price per Square Meter to Buy Apartment Outside of Centre', 1064.43),
(1, 'Salaries And Financing', 'Average Monthly Net Salary (After Tax)', 507.79),
(1, 'Salaries And Financing', 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate', 5.26),
(1, 'Transportation', 'Taxi Start (Normal Tariff)', 2.88),
(1, 'Transportation', 'Taxi 1km (Normal Tariff)', 2.88),
(1, 'Transportation', 'Taxi 1hour Waiting (Normal Tariff)', 13.44),
(1, 'Markets', 'Apples (1kg)', 1.17),
(1, 'Markets', 'Oranges (1kg)', 1.39),
(1, 'Markets', 'Potato (1kg)', 0.90),
(1, 'Markets', 'Lettuce (1 head)', 0.95),
(1, 'Markets', 'Cappuccino (regular)', 0.95),
(1, 'Markets', 'Rice (white), (1kg)', 1.74),
(1, 'Markets', 'Tomato (1kg)', 1.34),
(1, 'Markets', 'Banana (1kg)', 2.06),
(1, 'Markets', 'Onion (1kg)', 0.93),
(1, 'Markets', 'Beef Round (1kg) (or Equivalent Back Leg Red Meat)', 11.38),
(1, 'Transportation', 'Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car)', 23274.14),
(1, 'Childcare', 'Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child', 180.70),
(1, 'Childcare', 'International Primary School, Yearly for 1 Child', 3562.14);




INSERT INTO Expenses (city_id, type, description, price) VALUES 
(2, 'Restaurants', 'Meal, Inexpensive Restaurant', 2.07),
(2, 'Restaurants', 'Meal for 2 People, Mid-range Restaurant, Three-course', 17.26),
(2, 'Restaurants', 'McMeal at McDonalds (or Equivalent Combo Meal)', 3.45),
(2, 'Restaurants', 'Domestic Beer (0.5 liter draught)', 1.38),
(2, 'Restaurants', 'Imported Beer (0.33 liter bottle)', 1.73),
(2, 'Restaurants', 'Coke/Pepsi (0.33 liter bottle)', 0.48),
(2, 'Restaurants', 'Water (0.33 liter bottle)', 0.20),
(2, 'Markets', 'Milk (regular), (1 liter)', 0.83),
(2, 'Markets', 'Loaf of Fresh White Bread (500g)', 0.15),
(2, 'Markets', 'Eggs (regular) (12)', 1.57),
(2, 'Markets', 'Local Cheese (1kg)', 7.00),
(2, 'Markets', 'Water (1.5 liter bottle)', 0.27),
(2, 'Markets', 'Bottle of Wine (Mid-Range)', 6.91),
(2, 'Markets', 'Domestic Beer (0.5 liter bottle)', 1.48),
(2, 'Markets', 'Imported Beer (0.33 liter bottle)', 1.88),
(2, 'Markets', 'Cigarettes 20 Pack (Marlboro)', 2.42),
(2, 'Transportation', 'One-way Ticket (Local Transport)', 0.21),
(2, 'Markets', 'Chicken Fillets (1kg)', 4.59),
(2, 'Transportation', 'Monthly Pass (Regular Price)', 10.36),
(2, 'Transportation', 'Gasoline (1 liter)', 0.31),
(2, 'Transportation', 'Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)', 31074.32),
(2, 'Rent Per Month', 'Apartment (1 bedroom) in City Centre', 174.52),
(2, 'Rent Per Month', 'Apartment (1 bedroom) Outside of Centre', 107.03),
(2, 'Rent Per Month', 'Apartment (3 bedrooms) in City Centre', 276.34),
(2, 'Rent Per Month', 'Apartment (3 bedrooms) Outside of Centre', 178.59),
(2, 'Utilities', 'Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment', 37.52),
(2, 'Utilities', 'Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)', 21.16),
(2, 'Utilities', 'Mobile Phone Monthly Plan with Calls and 10GB+ Data', 10.41),
(2, 'Sports And Leisure', 'Fitness Club, Monthly Fee for 1 Adult', 18.49),
(2, 'Sports And Leisure', 'Tennis Court Rent (1 Hour on Weekend)', 8.76),
(2, 'Sports And Leisure', 'Cinema, International Release, 1 Seat', 4.14),
(2, 'Clothing And Shoes', '1 Pair of Jeans (Levis 501 Or Similar)', 35.00),
(2, 'Clothing And Shoes', '1 Summer Dress in a Chain Store (Zara, H&M, ...)', 39.84),
(2, 'Clothing And Shoes', '1 Pair of Nike Running Shoes (Mid-Range)', 67.48),
(2, 'Clothing And Shoes', '1 Pair of Men Leather Business Shoes', 71.05),
(2, 'Buy Apartment Price', 'Price per Square Meter to Buy Apartment in City Centre', 1176.24),
(2, 'Buy Apartment Price', 'Price per Square Meter to Buy Apartment Outside of Centre', 687.46),
(2, 'Salaries And Financing', 'Average Monthly Net Salary (After Tax)', 270.76),
(2, 'Salaries And Financing', 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate', 6.47),
(2, 'Transportation', 'Taxi Start (Normal Tariff)', 0.69),
(2, 'Transportation', 'Taxi 1km (Normal Tariff)', 0.35),
(2, 'Transportation', 'Taxi 1hour Waiting (Normal Tariff)', 4.14),
(2, 'Markets', 'Apples (1kg)', 3.00),
(2, 'Markets', 'Oranges (1kg)', 1.59),
(2, 'Markets', 'Potato (1kg)', 0.52),
(2, 'Markets', 'Lettuce (1 head)', 0.49),
(2, 'Markets', 'Cappuccino (regular)', 0.65),
(2, 'Markets', 'Rice (white), (1kg)', 1.35),
(2, 'Markets', 'Tomato (1kg)', 0.70),
(2, 'Markets', 'Banana (1kg)', 2.88),
(2, 'Markets', 'Onion (1kg)', 0.42),
(2, 'Markets', 'Beef Round (1kg) (or Equivalent Back Leg Red Meat)', 13.60),
(2, 'Transportation', 'Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car)', 30117.23),
(2, 'Childcare', 'Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child', 64.61),
(2, 'Childcare', 'International Primary School, Yearly for 1 Child', 2332.14);



INSERT INTO Expenses (city_id, type, description, price) VALUES 
(3, 'Restaurants', 'Meal, Inexpensive Restaurant', 6.15),
(3, 'Restaurants', 'Meal for 2 People, Mid-range Restaurant, Three-course', 23.20),
(3, 'Restaurants', 'McMeal at McDonalds (or Equivalent Combo Meal)', 4.64),
(3, 'Restaurants', 'Domestic Beer (0.5 liter draught)', 1.64),
(3, 'Restaurants', 'Imported Beer (0.33 liter bottle)', 2.32),
(3, 'Restaurants', 'Coke/Pepsi (0.33 liter bottle)', 1.03),
(3, 'Restaurants', 'Water (0.33 liter bottle)', 0.80),
(3, 'Markets', 'Milk (regular), (1 liter)', 0.76),
(3, 'Markets', 'Loaf of Fresh White Bread (500g)', 1.09),
(3, 'Markets', 'Eggs (regular) (12)', 1.40),
(3, 'Markets', 'Local Cheese (1kg)', 5.74),
(3, 'Markets', 'Water (1.5 liter bottle)', 0.88),
(3, 'Markets', 'Bottle of Wine (Mid-Range)', 2.78),
(3, 'Markets', 'Domestic Beer (0.5 liter bottle)', 1.02),
(3, 'Markets', 'Imported Beer (0.33 liter bottle)', 1.72),
(3, 'Markets', 'Cigarettes 20 Pack (Marlboro)', 1.86),
(3, 'Transportation', 'One-way Ticket (Local Transport)', 0.23),
(3, 'Markets', 'Chicken Fillets (1kg)', 3.69),
(3, 'Transportation', 'Monthly Pass (Regular Price)', 13.92),
(3, 'Transportation', 'Gasoline (1 liter)', 0.80),
(3, 'Transportation', 'Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)', 19484.91),
(3, 'Rent Per Month', 'Apartment (1 bedroom) in City Centre', 251.20),
(3, 'Rent Per Month', 'Apartment (1 bedroom) Outside of Centre', 178.72),
(3, 'Rent Per Month', 'Apartment (3 bedrooms) in City Centre', 458.65),
(3, 'Rent Per Month', 'Apartment (3 bedrooms) Outside of Centre', 319.83),
(3, 'Utilities', 'Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment', 39.44),
(3, 'Utilities', 'Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)', 16.70),
(3, 'Utilities', 'Mobile Phone Monthly Plan with Calls and 10GB+ Data', 15.77),
(3, 'Sports And Leisure', 'Fitness Club, Monthly Fee for 1 Adult', 17.68),
(3, 'Sports And Leisure', 'Tennis Court Rent (1 Hour on Weekend)', 7.99),
(3, 'Sports And Leisure', 'Cinema, International Release, 1 Seat', 3.71),
(3, 'Clothing And Shoes', '1 Pair of Jeans (Levis 501 Or Similar)', 59.54),
(3, 'Clothing And Shoes', '1 Summer Dress in a Chain Store (Zara, H&M, ...)', 50.32),
(3, 'Clothing And Shoes', '1 Pair of Nike Running Shoes (Mid-Range)', 93.41),
(3, 'Clothing And Shoes', '1 Pair of Men Leather Business Shoes', 87.87),
(3, 'Buy Apartment Price', 'Price per Square Meter to Buy Apartment in City Centre', 1869.09),
(3, 'Buy Apartment Price', 'Price per Square Meter to Buy Apartment Outside of Centre', 1428.01),
(3, 'Salaries And Financing', 'Average Monthly Net Salary (After Tax)', 389.82),
(3, 'Salaries And Financing', 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate', 54.64),
(3, 'Transportation', 'Taxi Start (Normal Tariff)', 0.93),
(3, 'Transportation', 'Taxi 1km (Normal Tariff)', 0.93),
(3, 'Transportation', 'Taxi 1hour Waiting (Normal Tariff)', 4.64),
(3, 'Markets', 'Apples (1kg)', 1.47),
(3, 'Markets', 'Oranges (1kg)', 0.96),
(3, 'Markets', 'Potato (1kg)', 0.73),
(3, 'Markets', 'Lettuce (1 head)', 0.90),
(3, 'Markets', 'Cappuccino (regular)', 1.43),
(3, 'Markets', 'Rice (white), (1kg)', 0.85),
(3, 'Markets', 'Tomato (1kg)', 1.37),
(3, 'Markets', 'Banana (1kg)', 1.28),
(3, 'Markets', 'Onion (1kg)', 0.74),
(3, 'Markets', 'Beef Round (1kg) (or Equivalent Back Leg Red Meat)', 5.57),
(3, 'Transportation', 'Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car)', 21875.32),
(3, 'Childcare', 'Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child', 128.15),
(3, 'Childcare', 'International Primary School, Yearly for 1 Child', 3912.75);




----------------------------------------------------------


INSERT INTO Expenses (city_id, type, description, price) VALUES 
(10, 'Restaurants', 'Meal, Inexpensive Restaurant', 18.00),
(10, 'Restaurants', 'Meal for 2 People, Mid-range Restaurant, Three-course', 80.00),
(10, 'Restaurants', 'McMeal at McDonalds (or Equivalent Combo Meal)', 10.00),
(10, 'Restaurants', 'Domestic Beer (0.5 liter draught)', 4.00),
(10, 'Restaurants', 'Imported Beer (0.33 liter bottle)', 4.00),
(10, 'Restaurants', 'Coke/Pepsi (0.33 liter bottle)', 2.54),
(10, 'Restaurants', 'Water (0.33 liter bottle)', 2.28),
(10, 'Markets', 'Milk (regular), (1 liter)', 1.09),
(10, 'Markets', 'Loaf of Fresh White Bread (500g)', 2.04),
(10, 'Markets', 'Eggs (regular) (12)', 3.07),
(10, 'Markets', 'Local Cheese (1kg)', 12.82),
(10, 'Markets', 'Water (1.5 liter bottle)', 0.88),
(10, 'Markets', 'Bottle of Wine (Mid-Range)', 7.00),
(10, 'Markets', 'Domestic Beer (0.5 liter bottle)', 1.71),
(10, 'Markets', 'Imported Beer (0.33 liter bottle)', 2.03),
(10, 'Markets', 'Cigarettes 20 Pack (Marlboro)', 8.00),
(10, 'Transportation', 'One-way Ticket (Local Transport)', 2.50),
(10, 'Markets', 'Chicken Fillets (1kg)', 9.91),
(10, 'Transportation', 'Monthly Pass (Regular Price)', 49.00),
(10, 'Transportation', 'Gasoline (1 liter)', 1.79),
(10, 'Transportation', 'Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)', 26000.00),
(10, 'Rent Per Month', 'Apartment (1 bedroom) in City Centre', 820.57),
(10, 'Rent Per Month', 'Apartment (1 bedroom) Outside of Centre', 689.07),
(10, 'Rent Per Month', 'Apartment (3 bedrooms) in City Centre', 1248.56),
(10, 'Rent Per Month', 'Apartment (3 bedrooms) Outside of Centre', 1049.95),
(10, 'Utilities', 'Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment', 193.94),
(10, 'Utilities', 'Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)', 48.84),
(10, 'Utilities', 'Mobile Phone Monthly Plan with Calls and 10GB+ Data', 20.67),
(10, 'Sports And Leisure', 'Fitness Club, Monthly Fee for 1 Adult', 30.20),
(10, 'Sports And Leisure', 'Tennis Court Rent (1 Hour on Weekend)', 17.04),
(10, 'Sports And Leisure', 'Cinema, International Release, 1 Seat', 12.00),
(10, 'Clothing And Shoes', '1 Pair of Jeans (Levis 501 Or Similar)', 89.04),
(10, 'Clothing And Shoes', '1 Summer Dress in a Chain Store (Zara, H&M, ...)', 38.82),
(10, 'Clothing And Shoes', '1 Pair of Nike Running Shoes (Mid-Range)', 88.63),
(10, 'Clothing And Shoes', '1 Pair of Men Leather Business Shoes', 119.07),
(10, 'Buy Apartment Price', 'Price per Square Meter to Buy Apartment in City Centre', 3571.90),
(10, 'Buy Apartment Price', 'Price per Square Meter to Buy Apartment Outside of Centre', 2903.04),
(10, 'Salaries And Financing', 'Average Monthly Net Salary (After Tax)', 2397.63),
(10, 'Salaries And Financing', 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate', 3.38),
(10, 'Transportation', 'Taxi Start (Normal Tariff)', 5.00),
(10, 'Transportation', 'Taxi 1km (Normal Tariff)', 2.10),
(10, 'Transportation', 'Taxi 1hour Waiting (Normal Tariff)', 35.00),
(10, 'Markets', 'Apples (1kg)', 2.31),
(10, 'Markets', 'Oranges (1kg)', 2.29),
(10, 'Markets', 'Potato (1kg)', 1.55),
(10, 'Markets', 'Lettuce (1 head)', 1.17),
(10, 'Markets', 'Cappuccino (regular)', 3.25),
(10, 'Markets', 'Rice (white), (1kg)', 2.03),
(10, 'Markets', 'Tomato (1kg)', 2.49),
(10, 'Markets', 'Banana (1kg)', 1.73),
(10, 'Markets', 'Onion (1kg)', 1.32),
(10, 'Markets', 'Beef Round (1kg) (or Equivalent Back Leg Red Meat)', 15.63),
(10, 'Transportation', 'Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car)', 26630.94),
(10, 'Childcare', 'Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child', 534.62),
(10, 'Childcare', 'International Primary School, Yearly for 1 Child', 16439.05);