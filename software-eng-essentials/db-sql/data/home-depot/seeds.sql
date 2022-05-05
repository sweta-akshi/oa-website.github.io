INSERT INTO warehouse(location,phone) VALUES
	('Boston', 1758682663),
    ('Austin', 1259669845),
	('Omaha', 1003851834),
	('Richmond', 1278039067),
	('San Antonio', 1115365456),
	('San Diego', 1571883576),
	('Sarasota', 1078653043),
	('Grand Rapids', 1472074606)
;

INSERT INTO truck(vol_capacity, weight_cap) VALUES
	(548058, 81),
	(830770, 685),
	(74245,	9453),
	(739541, 6119),
	(259137, 5681),
	(17522,	309),
	(2791, 16),
	(521725, 4187)
;

INSERT INTO trip(trip_date, warehouse, truck) VALUES
	('2002-04-09', 2, 8),
	('2005-03-24', 3, 5),
	('2009-09-30', 4, 6),
	('2013-03-08', 5, 2),
	('2013-06-04', 6, 1),
	('2015-11-10', 7, 3),
	('2016-07-20', 2, 6),
	('2018-10-12', 1, 4)
;

INSERT INTO store(store_name, address) VALUES
	('Stormy Phone Animation', '17 Plymouth Cr Shelton, CT'),
	('Green Crab Manufacturer', '6 Middle River Ln Charleston, SC'),
	('Obtuse Ostrich Food Supply', '48 Morris Ave. Trevose, PA'),
	('Foggy Pencil Print Design', '18 Acacia Ln Mechanicsville, VA'),
	('Plain Bull Running Company', '15 South Ct Rd. Ridgefield, CT'),
	('Thin Rabbit Films', '26 Summerhouse St. Linden, NJ'),
	('Alpha Strawberry Furniture', '8 Cooper Ave. Vernon Hills, IL'),
	('Grey Squirrel Restaurant', '1 Hilldale Rd Winter Springs, FL')
;


INSERT INTO shipment(volume, weight, trip, store) VALUES
	(37466,	500, 1, 1),
	(31556,	58, 1, 8),
	(77833,	935, 3, 8),
	(76906,	720, 4, 4),
	(37302,	621, 7, 5),
	(75614,	122, 3, 6),
	(60407,	220, 5, 5),
	(75128,	389, 7, 8)
;