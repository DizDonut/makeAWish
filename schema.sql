CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ("Master full stack web development skills.");
INSERT INTO wishes (wish) VALUES ("Quit my job amid a flurry of f bombs.");
INSERT INTO wishes (wish) VALUES ("Get a new job with said skills.");
INSERT INTO wishes (wish) VALUES ("Begin to enjoy what I do for a living...");
INSERT INTO wishes (wish) VALUES ("Retire a millionaire.");