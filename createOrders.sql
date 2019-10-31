CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer TEXT NOT NULL,
    product TEXT,
    date TIMESTAMP
);

INSERT INTO orders (customer, product, date)
    VALUES ('Alex', 'bicycle', '2019-09-03'),
    ('Brad', 'car', '2019-10-11'),
    ('Cara', 'dirt bike', '2019-08-14'),
    ('Dan', 'engine', '2019-10-15')
    ;