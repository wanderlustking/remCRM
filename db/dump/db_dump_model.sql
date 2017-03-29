-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema remCRMdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `remCRMdb` ;

-- -----------------------------------------------------
-- Schema remCRMdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `remCRMdb` DEFAULT CHARACTER SET utf8 ;
USE `remCRMdb` ;

-- -----------------------------------------------------
-- Table `remCRMdb`.`order_statuses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `remCRMdb`.`order_statuses` ;

CREATE TABLE IF NOT EXISTS `remCRMdb`.`order_statuses` (
  `id_status` INT NOT NULL AUTO_INCREMENT,
  `status_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_status`),
  UNIQUE INDEX `idorders_UNIQUE` (`id_status` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `remCRMdb`.`rem_users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `remCRMdb`.`rem_users` ;

CREATE TABLE IF NOT EXISTS `remCRMdb`.`rem_users` (
  `id_rem_user` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(16) NOT NULL,
  `user_email` VARCHAR(255) NULL,
  `user_password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_rem_user`),
  UNIQUE INDEX `id_UNIQUE` (`id_rem_user` ASC));


-- -----------------------------------------------------
-- Table `remCRMdb`.`orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `remCRMdb`.`orders` ;

CREATE TABLE IF NOT EXISTS `remCRMdb`.`orders` (
  `id_order` INT NOT NULL AUTO_INCREMENT,
  `order_name` VARCHAR(45) NOT NULL,
  `order_status_id` INT NOT NULL,
  `reported_by` INT NULL,
  `order_assignee` INT NOT NULL,
  `order_client` INT NOT NULL,
  PRIMARY KEY (`id_order`),
  UNIQUE INDEX `idorders_UNIQUE` (`id_order` ASC),
  INDEX `fk_orders_order_status1_idx` (`order_status_id` ASC),
  INDEX `fk_orders_user1_idx` (`reported_by` ASC),
  INDEX `fk_orders_user2_idx` (`order_assignee` ASC),
  INDEX `fk_orders_user3_idx` (`order_client` ASC),
  CONSTRAINT `fk_orders_order_status1`
    FOREIGN KEY (`order_status_id`)
    REFERENCES `remCRMdb`.`order_statuses` (`id_status`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_user1`
    FOREIGN KEY (`reported_by`)
    REFERENCES `remCRMdb`.`rem_users` (`id_rem_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_user2`
    FOREIGN KEY (`order_assignee`)
    REFERENCES `remCRMdb`.`rem_users` (`id_rem_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_user3`
    FOREIGN KEY (`order_client`)
    REFERENCES `remCRMdb`.`rem_users` (`id_rem_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `remCRMdb`.`rem_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `remCRMdb`.`rem_roles` ;

CREATE TABLE IF NOT EXISTS `remCRMdb`.`rem_roles` (
  `id_rem_role` INT NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_rem_role`),
  UNIQUE INDEX `idorders_UNIQUE` (`id_rem_role` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `remCRMdb`.`users_has_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `remCRMdb`.`users_has_roles` ;

CREATE TABLE IF NOT EXISTS `remCRMdb`.`users_has_roles` (
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`),
  INDEX `fk_user_has_role_role1_idx` (`role_id` ASC),
  INDEX `fk_user_has_role_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_role_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `remCRMdb`.`rem_users` (`id_rem_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_role_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `remCRMdb`.`rem_roles` (`id_rem_role`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `remCRMdb`.`prices`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `remCRMdb`.`prices` ;

CREATE TABLE IF NOT EXISTS `remCRMdb`.`prices` (
  `id_price` INT NOT NULL AUTO_INCREMENT,
  `price_currency` VARCHAR(255) NOT NULL,
  `price_value` INT NOT NULL,
  PRIMARY KEY (`id_price`));


-- -----------------------------------------------------
-- Table `remCRMdb`.`devices`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `remCRMdb`.`devices` ;

CREATE TABLE IF NOT EXISTS `remCRMdb`.`devices` (
  `id_device` INT NOT NULL,
  `device_name` VARCHAR(45) NULL,
  `device_category` VARCHAR(45) NULL,
  `device_brand` VARCHAR(45) NULL,
  `repair_part_for` INT NOT NULL,
  PRIMARY KEY (`id_device`),
  INDEX `fk_device_device1_idx` (`repair_part_for` ASC),
  CONSTRAINT `fk_device_device1`
    FOREIGN KEY (`repair_part_for`)
    REFERENCES `remCRMdb`.`devices` (`id_device`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
