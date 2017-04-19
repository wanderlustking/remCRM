-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: remcrmdb
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_has_category`
--

DROP TABLE IF EXISTS `device_has_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `device_has_category` (
  `device_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `category_parent_category` int(11) NOT NULL,
  PRIMARY KEY (`device_id`,`category_id`,`category_parent_category`),
  KEY `fk_device_has_category_category1_idx` (`category_id`,`category_parent_category`),
  KEY `fk_device_has_category_device1_idx` (`device_id`),
  CONSTRAINT `fk_device_has_category_category1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id_category`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_device_has_category_device1` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id_device`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_has_category`
--

LOCK TABLES `device_has_category` WRITE;
/*!40000 ALTER TABLE `device_has_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_has_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devices`
--

DROP TABLE IF EXISTS `devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `devices` (
  `id_device` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `brand` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_device`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devices`
--

LOCK TABLES `devices` WRITE;
/*!40000 ALTER TABLE `devices` DISABLE KEYS */;
/*!40000 ALTER TABLE `devices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_statuses`
--

DROP TABLE IF EXISTS `order_statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_statuses` (
  `id_order_status` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_order_status`),
  UNIQUE KEY `idorders_UNIQUE` (`id_order_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_statuses`
--

LOCK TABLES `order_statuses` WRITE;
/*!40000 ALTER TABLE `order_statuses` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id_order` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `order_status_id` int(11) NOT NULL,
  `reported_by` int(11) DEFAULT NULL,
  `assignee` int(11) NOT NULL,
  `client` int(11) NOT NULL,
  `due_date` date DEFAULT NULL,
  `reported_when` date DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_order`),
  UNIQUE KEY `idorders_UNIQUE` (`id_order`),
  KEY `fk_orders_order_status1_idx` (`order_status_id`),
  KEY `fk_orders_user1_idx` (`reported_by`),
  KEY `fk_orders_user2_idx` (`assignee`),
  KEY `fk_orders_user3_idx` (`client`),
  CONSTRAINT `fk_orders_order_status1` FOREIGN KEY (`order_status_id`) REFERENCES `order_statuses` (`id_order_status`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_user1` FOREIGN KEY (`reported_by`) REFERENCES `rem_users` (`id_rem_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_user2` FOREIGN KEY (`assignee`) REFERENCES `rem_users` (`id_rem_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_user3` FOREIGN KEY (`client`) REFERENCES `rem_users` (`id_rem_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_has_device`
--

DROP TABLE IF EXISTS `orders_has_device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders_has_device` (
  `orders_id` int(11) NOT NULL,
  `device_id` int(11) NOT NULL,
  `device_qnt` int(11) DEFAULT NULL,
  PRIMARY KEY (`orders_id`,`device_id`),
  KEY `fk_orders_has_device_device1_idx` (`device_id`),
  KEY `fk_orders_has_device_orders1_idx` (`orders_id`),
  CONSTRAINT `fk_orders_has_device_device1` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id_device`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_has_device_orders1` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id_order`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_has_device`
--

LOCK TABLES `orders_has_device` WRITE;
/*!40000 ALTER TABLE `orders_has_device` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders_has_device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rem_roles`
--

DROP TABLE IF EXISTS `rem_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rem_roles` (
  `id_rem_roles` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_rem_roles`),
  UNIQUE KEY `idorders_UNIQUE` (`id_rem_roles`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rem_roles`
--

LOCK TABLES `rem_roles` WRITE;
/*!40000 ALTER TABLE `rem_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `rem_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rem_users`
--

DROP TABLE IF EXISTS `rem_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rem_users` (
  `id_rem_user` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(16) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(32) NOT NULL,
  PRIMARY KEY (`id_rem_user`),
  UNIQUE KEY `id_UNIQUE` (`id_rem_user`),
  UNIQUE KEY `email_UNIQUE` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rem_users`
--

LOCK TABLES `rem_users` WRITE;
/*!40000 ALTER TABLE `rem_users` DISABLE KEYS */;
INSERT INTO `rem_users` VALUES (1,'Maksym Kmets','kmetsmi@gmail.com','9999'),(2,'Pavlo Zubko','pavlo.zubko@gmail.com','7777'),(3,'Andrey','andrew@gmail.com','5555'),(4,'Anastasiya','nastya@gmail.com','1111');
/*!40000 ALTER TABLE `rem_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_has_roles`
--

DROP TABLE IF EXISTS `user_has_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_has_roles` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `fk_user_has_role_role1_idx` (`role_id`),
  KEY `fk_user_has_role_user_idx` (`user_id`),
  CONSTRAINT `fk_user_has_role_role1` FOREIGN KEY (`role_id`) REFERENCES `rem_roles` (`id_rem_roles`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_role_user` FOREIGN KEY (`user_id`) REFERENCES `rem_users` (`id_rem_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_has_roles`
--

LOCK TABLES `user_has_roles` WRITE;
/*!40000 ALTER TABLE `user_has_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_has_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-20  0:51:36
