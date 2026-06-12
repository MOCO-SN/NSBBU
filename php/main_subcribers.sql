-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 12, 2026 at 09:12 PM
-- Server version: 11.8.6-MariaDB-log
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u807707365_bbutest`
--

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `subscribed_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`id`, `email`, `ip_address`, `subscribed_at`) VALUES
(1, 'cryomocostudios@gmail.com', '2401:4900:7051:2834:b21c:8836:d0ea:95ce', '2026-06-12 21:00:07'),
(2, 'cryomoco@gmail.com', '2401:4900:7051:2834:81ad:9df0:6959:e8c4', '2026-06-12 21:00:39'),
(3, 'cryomocostuvvdios@gmail.com', '2401:4900:7051:2834:b21c:8836:d0ea:95ce', '2026-06-12 21:02:27'),
(4, 'cryomocosccgtudios@gmail.com', '2401:4900:7051:2834:b21c:8836:d0ea:95ce', '2026-06-12 21:02:39'),
(5, 'crossroadsff@gmail.com', '2401:4900:7051:2834:b21c:8836:d0ea:95ce', '2026-06-12 21:02:53'),
(6, 'cryomocostudibnnos@gmail.com', '2401:4900:7051:2834:b21c:8836:d0ea:95ce', '2026-06-12 21:03:52'),
(7, 'crossroadsyy@gmail.com', '2401:4900:7051:2834:b21c:8836:d0ea:95ce', '2026-06-12 21:04:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
