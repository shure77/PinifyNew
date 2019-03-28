-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 28. Mrz 2019 um 16:32
-- Server-Version: 10.1.31-MariaDB
-- PHP-Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `pinify`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `cities`
--

CREATE TABLE `cities` (
  `id` int(11) UNSIGNED NOT NULL,
  `city` varchar(45) NOT NULL,
  `longitude` decimal(11,6) NOT NULL,
  `latitude` decimal(10,6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `cities`
--

INSERT INTO `cities` (`id`, `city`, `longitude`, `latitude`) VALUES
(2, 'St. Pölten', '15.623266', '48.205539'),
(8, 'New York', '-73.978173', '40.729222'),
(9, 'London', '-0.130436', '51.529748');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `markers`
--

CREATE TABLE `markers` (
  `id` int(11) UNSIGNED NOT NULL,
  `pins_id` int(11) UNSIGNED DEFAULT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(500) NOT NULL,
  `street` varchar(45) NOT NULL,
  `street_number` varchar(10) NOT NULL,
  `zip` varchar(10) NOT NULL,
  `city` varchar(45) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `website_url` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `longitude` decimal(11,6) NOT NULL,
  `latitude` decimal(10,6) NOT NULL,
  `image_url` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `markers`
--

INSERT INTO `markers` (`id`, `pins_id`, `title`, `description`, `street`, `street_number`, `zip`, `city`, `phone`, `website_url`, `email`, `longitude`, `latitude`, `image_url`) VALUES
(1, 1, 'Pouring Ribbons', 'One of the best bars in New York.', 'Avenue B', '225', 'NY 10009', 'New York', '+1 917-656-6788', 'http://www.pouringribbons.com', 'office@pouringribbons.com', '-73.978173', '40.729239', 'http://www.meltingbutter.com/wp-content/uploads/2014/06/371.Blog_The-Curators-Xavier-Herit3.jpg'),
(2, 1, 'Death & Company', 'Another great bar.', '6th St', '433', 'NY 10003', 'New York', '+1 212-388-0882', 'http://www.deathandcompany.com', 'office@deathandcompany.com', '-73.984592', '40.726748', 'https://i0.wp.com/www.restaurantgirl.com/wp-content/uploads/2012/09/death4.jpg?fit=300%2C202'),
(3, 1, 'The Dead Rabbit Grocery and Grog', 'The absolute best bar.', 'Water St', '30', 'NY 10004', 'New York', '+1 646-422-7906', 'http://www.deadrabbitnyc.com', 'office@deadrabbitnyc.com', '-74.010988', '40.703915', 'http://blogs-images.forbes.com/jennguyen/files/2014/08/Dead-Rabbit_Carousel_1010-1152x648.jpg'),
(4, 1, 'Mace', 'Also good and new.', '12th St', '505 E', 'NY 10009', 'New York', '+1 347-866-7739', 'http://www.macenewyork.com', 'office@macenewyork.com', '-73.980957', '40.729847', 'https://pixel.nymag.com/imgs/listings/restaurants/mace/mace-01.w1200.h630.jpg'),
(5, 2, 'Cinema Paradiso', 'Programmkino mit cooler Bar.', 'Rathausplatz', '12', '3100', 'St. Pölten', '+43/2742/56789', 'http://www.cinema-paradiso.at', 'office@cinema-paradiso.at', '15.623266', '48.205538', 'http://www.cinema-paradiso.at/site/assets/files/1281/cinema_paradiso-foto-andrea_reischer.jpg'),
(6, 2, 'BarRock', 'Rockbar mit Wuzzler und Darts.', 'Andreas Hofer-Straße', '4', '3100', 'St. Pölten', '+43/2742/70950', 'http://www.barrock.info', 'office@barrock.info', '15.618496', '48.205507', 'https://www.stpoeltentourismus.at/images/vn5y35gejee-/xbar-barrock.jpeg.pagespeed.ic.tW4o7N6Cpw.jpg'),
(7, 2, 'Cafe Emmi', 'Nettes Kaffeehaus mit eigener Rösterei.', 'Linzer Str.', '1', '3100', 'St. Pölten', '+43/65074250625', 'http://www.kaffeebohnenmonster.at', 'office@kaffeebohnenmonster.at', '15.624124', '48.204167', 'https://www.stpoeltentourismus.at/images/hb74cp1ngz0-/xcafe-emmi.jpeg.pagespeed.ic.Mcrr0D2Y_7.jpg'),
(12, NULL, 'Boucherie Union Square', 'Best Restaurant you can find in NYC!', 'Park Ave S', '225', '10003', 'New York', '+1 212-353-0200', 'http://boucherie.nyc', 'office@boucherie.nyc', '-73.988224', '40.737288', 'https://catchrestaurants.com/catchla/wp-content/uploads/2015/07/3-Chefs-Table.jpg');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `markers`
--
ALTER TABLE `markers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT für Tabelle `markers`
--
ALTER TABLE `markers`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
