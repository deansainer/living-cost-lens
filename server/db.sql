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
    email varchar(55) primary key,
    password varchar(55)
);

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

---------------------------------------------------------------------------
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