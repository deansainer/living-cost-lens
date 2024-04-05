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


create table Users(
    username varchar(55) primary key,
    password varchar(255)
);

CREATE TABLE Comments (
    id SERIAL PRIMARY KEY,
    country VARCHAR(55),
    username VARCHAR(55),
    text TEXT
    date DATE
);

insert into comments(country_id, user_username, comment_text) values (1, 'adidas', 'test text');

insert into Users (email, password) values ('admin2@gmail.com', 'qwerty123');

select * from Expenses join Countries on country_id=id where country_name='France';



insert into Expenses (city_id, type, description, price) values (1, 'Restaurants', 'Meal, Inexpensive Restaurant', 26.58);

alter table Expenses foreign key (country_id) references (Countries.id);

-----------------------------------------------------------
INSERT INTO Cities (id, name) VALUES (1, 'Albania');
INSERT INTO Cities (id, name) VALUES (2, 'Algeria');
INSERT INTO Cities (id, name) VALUES (3, 'Argentina');
INSERT INTO Cities (id, name) VALUES (4, 'Armenia');
INSERT INTO Cities (id, name) VALUES (5, 'Australia');
INSERT INTO Cities (id, name) VALUES (6, 'Austria');
INSERT INTO Cities (id, name) VALUES (7, 'Azerbaijan');
INSERT INTO Cities (id, name) VALUES (8, 'Vietnam');
INSERT INTO Cities (id, name) VALUES (9, 'Belarus');
INSERT INTO Cities (id, name) VALUES (17, 'Belgium');
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

---------------------------------------------------------------------------
INSERT INTO Expenses (city_id, type, description, price) VALUES 
(17, 'Restaurants', 'Meal, Inexpensive Restaurant', 18.00),
(17, 'Restaurants', 'Meal for 2 People, Mid-range Restaurant, Three-course', 80.00),
(17, 'Restaurants', 'McMeal at McDonalds (or Equivalent Combo Meal)', 17.00),
(17, 'Restaurants', 'Domestic Beer (0.5 liter draught)', 4.00),
(17, 'Restaurants', 'Imported Beer (0.33 liter bottle)', 4.00),
(17, 'Restaurants', 'Coke/Pepsi (0.33 liter bottle)', 2.54),
(17, 'Restaurants', 'Water (0.33 liter bottle)', 2.28),
(17, 'Markets', 'Milk (regular), (1 liter)', 1.09),
(17, 'Markets', 'Loaf of Fresh White Bread (500g)', 2.04),
(17, 'Markets', 'Eggs (regular) (12)', 3.07),
(17, 'Markets', 'Local Cheese (1kg)', 12.82),
(17, 'Markets', 'Water (1.5 liter bottle)', 0.88),
(17, 'Markets', 'Bottle of Wine (Mid-Range)', 7.00),
(17, 'Markets', 'Domestic Beer (0.5 liter bottle)', 1.71),
(17, 'Markets', 'Imported Beer (0.33 liter bottle)', 2.03),
(17, 'Markets', 'Cigarettes 20 Pack (Marlboro)', 8.00),
(17, 'Transportation', 'One-way Ticket (Local Transport)', 2.50),
(17, 'Markets', 'Chicken Fillets (1kg)', 9.91),
(17, 'Transportation', 'Monthly Pass (Regular Price)', 49.00),
(17, 'Transportation', 'Gasoline (1 liter)', 1.79),
(17, 'Transportation', 'Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)', 26000.00),
(17, 'Rent Per Month', 'Apartment (1 bedroom) in City Centre', 820.57),
(17, 'Rent Per Month', 'Apartment (1 bedroom) Outside of Centre', 689.07),
(17, 'Rent Per Month', 'Apartment (3 bedrooms) in City Centre', 1248.56),
(17, 'Rent Per Month', 'Apartment (3 bedrooms) Outside of Centre', 1749.95),
(17, 'Utilities', 'Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment', 193.94),
(17, 'Utilities', 'Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)', 48.84),
(17, 'Utilities', 'Mobile Phone Monthly Plan with Calls and 17GB+ Data', 20.67),
(17, 'Sports And Leisure', 'Fitness Club, Monthly Fee for 1 Adult', 30.20),
(17, 'Sports And Leisure', 'Tennis Court Rent (1 Hour on Weekend)', 17.04),
(17, 'Sports And Leisure', 'Cinema, International Release, 1 Seat', 12.00),
(17, 'Clothing And Shoes', '1 Pair of Jeans (Levis 501 Or Similar)', 89.04),
(17, 'Clothing And Shoes', '1 Summer Dress in a Chain Store (Zara, H&M, ...)', 38.82),
(17, 'Clothing And Shoes', '1 Pair of Nike Running Shoes (Mid-Range)', 88.63),
(17, 'Clothing And Shoes', '1 Pair of Men Leather Business Shoes', 119.07),
(17, 'Buy Apartment Price', 'Price per Square Meter to Buy Apartment in City Centre', 3571.90),
(17, 'Buy Apartment Price', 'Price per Square Meter to Buy Apartment Outside of Centre', 2903.04),
(17, 'Salaries And Financing', 'Average Monthly Net Salary (After Tax)', 2397.63),
(17, 'Salaries And Financing', 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate', 3.38),
(17, 'Transportation', 'Taxi Start (Normal Tariff)', 5.00),
(17, 'Transportation', 'Taxi 1km (Normal Tariff)', 2.17),
(17, 'Transportation', 'Taxi 1hour Waiting (Normal Tariff)', 35.00),
(17, 'Markets', 'Apples (1kg)', 2.31),
(17, 'Markets', 'Oranges (1kg)', 2.29),
(17, 'Markets', 'Potato (1kg)', 1.55),
(17, 'Markets', 'Lettuce (1 head)', 1.17),
(17, 'Markets', 'Cappuccino (regular)', 3.25),
(17, 'Markets', 'Rice (white), (1kg)', 2.03),
(17, 'Markets', 'Tomato (1kg)', 2.49),
(17, 'Markets', 'Banana (1kg)', 1.73),
(17, 'Markets', 'Onion (1kg)', 1.32),
(17, 'Markets', 'Beef Round (1kg) (or Equivalent Back Leg Red Meat)', 15.63),
(17, 'Transportation', 'Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car)', 26630.94),
(17, 'Childcare', 'Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child', 534.62),
(17, 'Childcare', 'International Primary School, Yearly for 1 Child', 16439.05);


INSERT INTO Expenses (city_id, type, description, price) VALUES 
(17, 'Restaurants', 'Meal, Inexpensive Restaurant', 8.00),
(17, 'Restaurants', 'Meal for 2 People, Mid-range Restaurant, Three-course', 58.85),
(17, 'Restaurants', 'McMeal at McDonalds (or Equivalent Combo Meal)', 5.30),
(17, 'Restaurants', 'Domestic Beer (0.5 liter draught)', 5.89),
(17, 'Restaurants', 'Imported Beer (0.33 liter bottle)', 5.89),
(17, 'Restaurants', 'Coke/Pepsi (0.33 liter bottle)', 1.24),
(17, 'Restaurants', 'Water (0.33 liter bottle)', 1.02),
(17, 'Markets', 'Milk (regular), (1 liter)', 2.95),
(17, 'Markets', 'Loaf of Fresh White Bread (500g)', 2.12),
(17, 'Markets', 'Eggs (regular) (12)', 3.69),
(17, 'Markets', 'Local Cheese (1kg)', 24.88),
(17, 'Markets', 'Water (1.5 liter bottle)', 1.55),
(17, 'Markets', 'Bottle of Wine (Mid-Range)', 14.12),
(17, 'Markets', 'Domestic Beer (0.5 liter bottle)', 2.04),
(17, 'Markets', 'Imported Beer (0.33 liter bottle)', 2.58),
(17, 'Markets', 'Cigarettes 20 Pack (Marlboro)', 9.30),
(17, 'Transportation', 'One-way Ticket (Local Transport)', 1.41),
(17, 'Markets', 'Chicken Fillets (1kg)', 9.52),
(17, 'Transportation', 'Monthly Pass (Regular Price)', 58.85),
(17, 'Transportation', 'Gasoline (1 liter)', 2.76),
(17, 'Transportation', 'Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)', 30578.48),
(17, 'Rent Per Month', 'Apartment (1 bedroom) in City Centre', 2077.86),
(17, 'Rent Per Month', 'Apartment (1 bedroom) Outside of Centre', 1477.45),
(17, 'Rent Per Month', 'Apartment (3 bedrooms) in City Centre', 4333.04),
(17, 'Rent Per Month', 'Apartment (3 bedrooms) Outside of Centre', 2896.11),
(17, 'Utilities', 'Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment', 215.05),
(17, 'Utilities', 'Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)', 19.53),
(17, 'Utilities', 'Mobile Phone Monthly Plan with Calls and 17GB+ Data', 17.24),
(17, 'Sports And Leisure', 'Fitness Club, Monthly Fee for 1 Adult', 79.35),
(17, 'Sports And Leisure', 'Tennis Court Rent (1 Hour on Weekend)', 7.53),
(17, 'Sports And Leisure', 'Cinema, International Release, 1 Seat', 11.77),
(17, 'Clothing And Shoes', '1 Pair of Jeans (Levis 501 Or Similar)', 72.27),
(17, 'Clothing And Shoes', '1 Summer Dress in a Chain Store (Zara, H&M, ...)', 37.14),
(17, 'Clothing And Shoes', '1 Pair of Nike Running Shoes (Mid-Range)', 82.40),
(17, 'Clothing And Shoes', '1 Pair of Men Leather Business Shoes', 125.78),
(17, 'Buy Apartment Price', 'Price per Square Meter to Buy Apartment in City Centre', 26178.54),
(17, 'Buy Apartment Price', 'Price per Square Meter to Buy Apartment Outside of Centre', 17237.87),
(17, 'Salaries And Financing', 'Average Monthly Net Salary (After Tax)', 3869.18),
(17, 'Salaries And Financing', 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate', 3.85),
(17, 'Transportation', 'Taxi Start (Normal Tariff)', 3.18),
(17, 'Transportation', 'Taxi 1km (Normal Tariff)', 1.18),
(17, 'Transportation', 'Taxi 1hour Waiting (Normal Tariff)', 13.42),
(17, 'Markets', 'Apples (1kg)', 3.63),
(17, 'Markets', 'Oranges (1kg)', 3.55),
(17, 'Markets', 'Potato (1kg)', 2.40),
(17, 'Markets', 'Lettuce (1 head)', 1.33),
(17, 'Markets', 'Cappuccino (regular)', 4.77),
(17, 'Markets', 'Rice (white), (1kg)', 2.28),
(17, 'Markets', 'Tomato (1kg)', 2.95),
(17, 'Markets', 'Banana (1kg)', 2.28),
(17, 'Markets', 'Onion (1kg)', 2.41),
(17, 'Markets', 'Beef Round (1kg) (or Equivalent Back Leg Red Meat)', 21.58),
(17, 'Transportation', 'Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car)', 29923.05),
(17, 'Childcare', 'Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child', 857.58),
(17, 'Childcare', 'International Primary School, Yearly for 1 Child', 18930.09);
