
CREATE TABLE shoppers(
  id SERIAL PRIMARY KEY,
  name VARCHAR
);
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  shoppers_id INTEGER ,
  grocery_items_id INTEGER
);
CREATE TABLE grocery_items(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  price VARCHAR,
  section VARCHAR
);

INSERT INTO shoppers(name)
VALUES ('Jeff');
INSERT INTO shoppers(name)
VALUES ('Anna');
INSERT INTO shoppers(name)
VALUES ('Emma');

INSERT INTO orders(shoppers_id, grocery_items_id )
VALUES (1,21);
INSERT INTO orders(shoppers_id, grocery_items_id )
VALUES (1,23);
INSERT INTO orders(shoppers_id, grocery_items_id )
VALUES (2,26);
INSERT INTO orders(shoppers_id, grocery_items_id )
VALUES (3,41);

COPY grocery_items(name,price,section) FROM
'/Users/Mr.Ware/Desktop/LGProjects/phase-3-challenge/part-2/grocery.csv'
DELIMITER',' CSV HEADER;


-- INSERT INTO orders (shopper_id, order_id)
-- VALUES (1,1);
-- VALUES (2,2);
-- VALUES (3,3);
