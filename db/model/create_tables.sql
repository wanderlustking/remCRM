-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`order_status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`order_status` ;

CREATE TABLE IF NOT EXISTS `mydb`.`order_status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idorders_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));


-- -----------------------------------------------------
-- Table `mydb`.`orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`orders` ;

CREATE TABLE IF NOT EXISTS `mydb`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `order_status_id` INT NOT NULL,
  `reported_by` INT NULL,
  `assignee` INT NOT NULL,
  `client` INT NOT NULL,
  `due_date` DATE NULL,
  `reported_when` DATE NULL,
  `price` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idorders_UNIQUE` (`id` ASC),
  INDEX `fk_orders_order_status1_idx` (`order_status_id` ASC),
  INDEX `fk_orders_user1_idx` (`reported_by` ASC),
  INDEX `fk_orders_user2_idx` (`assignee` ASC),
  INDEX `fk_orders_user3_idx` (`client` ASC),
  CONSTRAINT `fk_orders_order_status1`
    FOREIGN KEY (`order_status_id`)
    REFERENCES `mydb`.`order_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_user1`
    FOREIGN KEY (`reported_by`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_user2`
    FOREIGN KEY (`assignee`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_user3`
    FOREIGN KEY (`client`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idorders_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user_has_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user_has_role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user_has_role` (
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`),
  INDEX `fk_user_has_role_role1_idx` (`role_id` ASC),
  INDEX `fk_user_has_role_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_role_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_role_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`price`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`price` ;

CREATE TABLE IF NOT EXISTS `mydb`.`price` (
  `id` INT NOT NULL,
  `currency` VARCHAR(255) NOT NULL,
  `value` INT NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`device`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`device` ;

CREATE TABLE IF NOT EXISTS `mydb`.`device` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `brand` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`category` ;

CREATE TABLE IF NOT EXISTS `mydb`.`category` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `parent_category` INT NOT NULL,
  PRIMARY KEY (`id`, `parent_category`),
  INDEX `fk_category_category1_idx` (`parent_category` ASC),
  CONSTRAINT `fk_category_category1`
    FOREIGN KEY (`parent_category`)
    REFERENCES `mydb`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`device_has_category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`device_has_category` ;

CREATE TABLE IF NOT EXISTS `mydb`.`device_has_category` (
  `device_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  `category_parent_category` INT NOT NULL,
  PRIMARY KEY (`device_id`, `category_id`, `category_parent_category`),
  INDEX `fk_device_has_category_category1_idx` (`category_id` ASC, `category_parent_category` ASC),
  INDEX `fk_device_has_category_device1_idx` (`device_id` ASC),
  CONSTRAINT `fk_device_has_category_device1`
    FOREIGN KEY (`device_id`)
    REFERENCES `mydb`.`device` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_device_has_category_category1`
    FOREIGN KEY (`category_id` , `category_parent_category`)
    REFERENCES `mydb`.`category` (`id` , `parent_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`orders_has_device`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`orders_has_device` ;

CREATE TABLE IF NOT EXISTS `mydb`.`orders_has_device` (
  `orders_id` INT NOT NULL,
  `device_id` INT NOT NULL,
  `device_qnt` INT NULL,
  PRIMARY KEY (`orders_id`, `device_id`),
  INDEX `fk_orders_has_device_device1_idx` (`device_id` ASC),
  INDEX `fk_orders_has_device_orders1_idx` (`orders_id` ASC),
  CONSTRAINT `fk_orders_has_device_orders1`
    FOREIGN KEY (`orders_id`)
    REFERENCES `mydb`.`orders` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_has_device_device1`
    FOREIGN KEY (`device_id`)
    REFERENCES `mydb`.`device` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`warehouse`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`warehouse` ;

CREATE TABLE IF NOT EXISTS `mydb`.`warehouse` (
  `id` INT NOT NULL,
  `device_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_warehouse_device1_idx` (`device_id` ASC),
  CONSTRAINT `fk_warehouse_device1`
    FOREIGN KEY (`device_id`)
    REFERENCES `mydb`.`device` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
