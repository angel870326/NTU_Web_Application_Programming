CREATE SCHEMA `animal-cloud-adoption-db` ;
USE `animal-cloud-adoption-db`;

CREATE TABLE `animal` (
	`id` BIGINT,
    `appearance` VARCHAR(60),
    `birth_year` INT,
    `name` VARCHAR(60),
    `personality` VARCHAR(60),
    `sex` VARCHAR(10),
    `sheltered_date` DATETIME,
    `tуре` VARCHAR(10),
    `shelter_id` BIGINT,
    PRIMARY KEY (`id`)
);
CREATE TABLE `donate_plan` (
	`id` BIGINT,
	`amount` INT,
    `duration` INT,
	`name` VARCHAR(10),
    PRIMARY KEY (`id`)
);
CREATE TABLE `donate_record` (
	`id` BIGINT,
	`apply_date` DATETIME,
	`donation_end_date` DATETIME,
	`donation_start_date` DATETIME,
	`status` VARCHAR(10),
	`animal_id` BIGINT,
	`donate_plan_id` BIGINT,
	`member_id` BIGINT,
    PRIMARY KEY (`id`)
);
CREATE TABLE `member` (
	`id` BIGINT,
	`anonymous` BIT,
    `email` VARCHAR(60),
	`nick_name` VARCHAR(60),
	`pass_word` VARCHAR(60),
    `phone` VARCHAR(10),
	`user_name` VARCHAR(60),
    PRIMARY KEY (`id`)
);
CREATE TABLE `shelter` (
	`id` BIGINT,
    `address` VARCHAR(100),
    `area` VARCHAR(5),
    `website` VARCHAR(255),
	`contact_phone` VARCHAR(10),
    `name` VARCHAR(60),
    PRIMARY KEY (`id`)
);

-- SHOW VARIABLES LIKE 'local_infile';
SET GLOBAL local_infile = 1;

LOAD DATA LOCAL INFILE '/Users/angelwang/Desktop/Github/animal-cloud-adoption/backend/src/main/resources/database_csv/animal.csv'
INTO TABLE `animal`
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE '/Users/angelwang/Desktop/Github/animal-cloud-adoption/backend/src/main/resources/database_csv/donate_plan.csv'
INTO TABLE `donate_plan`
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE '/Users/angelwang/Desktop/Github/animal-cloud-adoption/backend/src/main/resources/database_csv/donate_record.csv'
INTO TABLE `donate_record`
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE '/Users/angelwang/Desktop/Github/animal-cloud-adoption/backend/src/main/resources/database_csv/member.csv'
INTO TABLE `member`
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE '/Users/angelwang/Desktop/Github/animal-cloud-adoption/backend/src/main/resources/database_csv/shelter.csv'
INTO TABLE `shelter`
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

