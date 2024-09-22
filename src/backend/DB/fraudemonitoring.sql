-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 26 mai 2024 à 00:25
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `fraudemonitoring`
--

-- --------------------------------------------------------

--
-- Structure de la table `quantification`
--

CREATE TABLE `quantification` (
  `ID` int(11) NOT NULL,
  `Caller_Number` varchar(255) DEFAULT NULL,
  `record_type` varchar(255) DEFAULT NULL,
  `sum_duration` int(11) DEFAULT NULL,
  `count_called_number` int(11) DEFAULT NULL,
  `Time_Stamp` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `dailyfollowupopn`
--

CREATE TABLE `dailyfollowupopn` (
  `MSISDN` varchar(255) DEFAULT NULL,
  `LCD` varchar(255) DEFAULT NULL,
  `TypeDetect` varchar(255) DEFAULT NULL,
  `CATIG` varchar(255) DEFAULT NULL,
  `CPT` varchar(255) DEFAULT NULL,
  `UserFlagger` varchar(255) DEFAULT NULL,
  `UserDeb` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `dailyfollowupopn`
--

INSERT INTO `dailyfollowupopn` (`MSISDN`, `LCD`, `TypeDetect`, `CATIG`, `CPT`, `UserFlagger`, `UserDeb`) VALUES
('58106198', '12/08/2023', 'SB', 'MO', NULL, 'Amine Belaabed', 'Amine Belaabed'),
('45106198', '12/11/2023', 'SB', 'MO', NULL, 'Muhamed Ramlil', 'Anis Ramlil');

-- --------------------------------------------------------

--
-- Structure de la table `infotrafic`
--

CREATE TABLE `infotrafic` (
  `Customer_id` varchar(50) DEFAULT NULL,
  `Contract_id` varchar(50) DEFAULT NULL,
  `Pays` varchar(100) DEFAULT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Montant` double DEFAULT NULL,
  `Trafic_date` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `subscriber`
--

CREATE TABLE `subscriber` (
  `IMSI` varchar(255) DEFAULT NULL,
  `MSISDN` varchar(50) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `activation_date` date DEFAULT NULL,
  `deactivation_date` date DEFAULT NULL,
  `rate_plan` varchar(255) DEFAULT NULL,
  `Bill_Cycle` varchar(255) DEFAULT NULL,
  `Last_status_date` date DEFAULT NULL,
  `Contract_ID` varchar(50) NOT NULL,
  `Customer_ID` varchar(50) NOT NULL,
  `Client` varchar(255) DEFAULT NULL,
  `Nom_Prenom` varchar(255) DEFAULT NULL,
  `cutscode` varchar(255) DEFAULT NULL,
  `CNI` varchar(100) NOT NULL,
  `City` varchar(50) NOT NULL,
  `State` varchar(50) NOT NULL,
  `Birthdate` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `Name` varchar(255) DEFAULT NULL,
  `TypeCompte` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`Name`, `TypeCompte`, `Email`, `password`) VALUES
('aminebelaabed', 'admin', 'aminebelaabed1@gmail.com', '123456'),
('user1', 'admin', 'user1@ooredoo.dz', '123456');
('user2', 'user', 'user2@ooredoo.dz', '123456');
('user3', 'user', 'user3@ooredoo.dz', '123456');
('user4', 'user', 'user4@ooredoo.dz', '123456');
('user5', 'user', 'user5@ooredoo.dz', '123456');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `quantification`
--
ALTER TABLE `quantification`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `subscriber`
--
ALTER TABLE `subscriber`
  ADD PRIMARY KEY (`MSISDN`,`Contract_ID`,`Customer_ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `quantification`
--
ALTER TABLE `quantification`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
