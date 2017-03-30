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
-- Table `mydb`.`order_statuses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`order_statuses` ;

CREATE TABLE IF NOT EXISTS `mydb`.`order_statuses` (
  `id_order_status` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_order_status`),
  UNIQUE INDEX `idorders_UNIQUE` (`id_order_status` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`rem_users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`rem_users` ;

CREATE TABLE IF NOT EXISTS `mydb`.`rem_users` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `id_rem_user` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_rem_user`),
  UNIQUE INDEX `id_UNIQUE` (`id_rem_user` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));


-- -----------------------------------------------------
-- Table `mydb`.`orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`orders` ;

CREATE TABLE IF NOT EXISTS `mydb`.`orders` (
  `id_order` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `order_status_id` INT NOT NULL,
  `reported_by` INT NULL,
  `assignee` INT NOT NULL,
  `client` INT NOT NULL,
  `due_date` DATE NULL,
  `reported_when` DATE NULL,
  `price` INT NULL,
  PRIMARY KEY (`id_order`),
  UNIQUE INDEX `idorders_UNIQUE` (`id_order` ASC),
  INDEX `fk_orders_order_status1_idx` (`order_status_id` ASC),
  INDEX `fk_orders_user1_idx` (`reported_by` ASC),
  INDEX `fk_orders_user2_idx` (`assignee` ASC),
  INDEX `fk_orders_user3_idx` (`client` ASC),
  CONSTRAINT `fk_orders_order_status1`
    FOREIGN KEY (`order_status_id`)
    REFERENCES `mydb`.`order_statuses` (`id_order_status`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_user1`
    FOREIGN KEY (`reported_by`)
    REFERENCES `mydb`.`rem_users` (`id_rem_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_user2`
    FOREIGN KEY (`assignee`)
    REFERENCES `mydb`.`rem_users` (`id_rem_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_user3`
    FOREIGN KEY (`client`)
    REFERENCES `mydb`.`rem_users` (`id_rem_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`rem_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`rem_roles` ;

CREATE TABLE IF NOT EXISTS `mydb`.`rem_roles` (
  `id_rem_roles` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_rem_roles`),
  UNIQUE INDEX `idorders_UNIQUE` (`id_rem_roles` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user_has_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user_has_roles` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user_has_roles` (
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`),
  INDEX `fk_user_has_role_role1_idx` (`role_id` ASC),
  INDEX `fk_user_has_role_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_role_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`rem_users` (`id_rem_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_role_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`rem_roles` (`id_rem_roles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`devices`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`devices` ;

CREATE TABLE IF NOT EXISTS `mydb`.`devices` (
  `id_device` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `brand` VARCHAR(45) NULL,
  PRIMARY KEY (`id_device`));


-- -----------------------------------------------------
-- Table `mydb`.`categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`categories` ;

CREATE TABLE IF NOT EXISTS `mydb`.`categories` (
  `id_category` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_category`));


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
    REFERENCES `mydb`.`devices` (`id_device`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_device_has_category_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `mydb`.`categories` (`id_category`)
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
    REFERENCES `mydb`.`orders` (`id_order`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_has_device_device1`
    FOREIGN KEY (`device_id`)
    REFERENCES `mydb`.`devices` (`id_device`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
