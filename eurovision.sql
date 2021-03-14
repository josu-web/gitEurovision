-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-02-2021 a las 18:44:53
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `eurovision`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banderas`
--

CREATE TABLE `banderas` (
  `id` int(11) NOT NULL,
  `Pais` varchar(150) NOT NULL,
  `Flag` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `banderas`
--

INSERT INTO `banderas` (`id`, `Pais`, `Flag`) VALUES
(1, 'Spain', 'img/EuroEspa%C3%B1a.svg'),
(2, 'Switzerland', 'img/ESCSwitzerland.png'),
(3, 'The Netherlands', 'img/EuroPa%C3%ADses_Bajos.svg'),
(4, 'France', 'img/EuroFrancia.svg'),
(5, 'Luxemburgo', 'img/EuroLuxemburgo.svg'),
(6, 'Denmark', 'img/EuroDinamarca.svg'),
(7, 'Italy', 'img/EuroItalia.svg'),
(8, 'United Kingdom', 'img/EuroReino_Unido.svg'),
(9, 'Ireland', 'img/EuroIrlanda.svg'),
(10, 'Monaco', 'img/EuroM%C3%B3naco.svg'),
(11, 'Sweden', 'img/EuroSuecia.svg'),
(12, 'Israel', 'img/EuroIsrael.svg'),
(13, 'Germany', 'img/EuroAlemania.svg'),
(14, 'Norway', 'img/EuroNoruega.svg'),
(15, 'Belgium', 'img/EuroB%C3%A9lgica.svg'),
(16, 'Yugoslavia', 'img/esc-yugoslavia-143x150.png'),
(17, 'Estonia', 'img/EuroEstonia.svg'),
(18, 'Latvia', 'img/EuroLetonia.svg'),
(19, 'Turkey', 'img/EuroTurqu%C3%ADa.svg'),
(20, 'Ukraine', 'img/EuroUcrania.png'),
(21, 'Greece', 'img/EuroGrecia.svg'),
(22, 'Finland', 'img/EuroFinlandia.svg'),
(23, 'Serbia', 'img/EuroServia.svg'),
(24, 'Russia', 'img/EuroRusia.svg'),
(25, 'Portugal', 'img/EuroPortugal.svg'),
(26, 'Cyprus', 'img/EuroChipre.png'),
(27, 'Bulgaria', 'img/EuroBulgaria.png'),
(28, 'Australia', 'img/EuroAustralia.png'),
(29, 'Iceland', 'img/EuroIslandia.png'),
(30, 'Serbia & Mont.', 'img/EuroServia.svg'),
(31, 'Austria', 'img/EuroAustria.svg'),
(32, 'Azerbaijan', 'img/EuroAzerbaiy%C3%A1n.svg'),
(33, 'Albania', 'img/EuroAlbania.png'),
(34, 'MAlta', 'img/EuroMalta.png'),
(35, 'Poland', 'img/EuroPolonia.png'),
(36, 'Acerbaijan', 'img/EuroAcerbaijan.svg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(150) NOT NULL,
  `Email` varchar(150) NOT NULL,
  `Comentario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eur_ganadores`
--

CREATE TABLE `eur_ganadores` (
  `id` int(11) NOT NULL,
  `Annio` int(11) NOT NULL,
  `Pais` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `Num` varchar(2) CHARACTER SET utf8mb4 NOT NULL,
  `Bandera` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `Video` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `Cancion` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `Interprete` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `CiudadSede` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `DosPais` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `Dosvideo` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `DosCancion` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `DosInterprete` varchar(150) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `eur_ganadores`
--

INSERT INTO `eur_ganadores` (`id`, `Annio`, `Pais`, `Num`, `Bandera`, `Video`, `Cancion`, `Interprete`, `CiudadSede`, `DosPais`, `Dosvideo`, `DosCancion`, `DosInterprete`) VALUES
(1, 1956, 'Switzerland', '2', 'img/ESCSwitzerland.png', 'https://www.youtube.com/embed/IyqIPvOkiRk', 'Refrain', 'Lys Assia', 'Lugano<br>(Switzerland)', 'Switzerland', '', 'x', ''),
(2, 1957, 'The Netherlands', '5', 'img/EuroPa%C3%ADses_Bajos.svg', 'https://www.youtube.com/embed/gTQtjqotFAg', 'Net als toen', 'Corry Brokken', 'Francfort del Meno<br>(Germany)', 'France', 'https://www.youtube.com/embed/g2-XDnBHEbc', 'La Belle Amour', 'Paule Desjardins'),
(3, 1958, 'France', '5', 'img/EuroFrancia.svg', 'https://www.youtube.com/embed/I5Fb_x9YCGw', 'Dors, mon amour', 'Andre Claveau', 'Hilversum<br>(The Netherlands)', 'Switzerland', 'https://www.youtube.com/embed/v_G8M4tLMBY', 'Giorgio', 'Lys Assia'),
(4, 1959, 'The Netherlands', '5', 'img/EuroPa%C3%ADses_Bajos.svg', 'https://www.youtube.com/embed/sQSnoIMHAxY', 'Een beetje', 'Teddy Scholten', 'Cannes<br>(France)', 'United Kingdom', 'https://www.youtube.com/embed/lw6Gfr71T8Y', 'Sing, Little Birdie', 'Pearl Carr & Teddy Johnson'),
(5, 1960, 'France', '5', 'img/EuroFrancia.svg', 'https://www.youtube.com/embed/pL2cekes0yo', 'Tom Pilibi', 'Jacqueline Boyer', 'London<br>(United Kingdom)', 'United Kingdom', 'https://www.youtube.com/embed/C2GivwSboXM', 'Looking High High Hig', 'Bryan Johnson'),
(6, 1961, 'Luxemburgo', '5', 'img/EuroLuxemburgo.svg', 'https://www.youtube.com/embed/g5ZDbEBt3iY', 'Nous les amoureux', 'Jean-Claude Pascal', 'Cannes<br>(France)', 'United Kingdom', 'https://www.youtube.com/embed/AxTgeb0U79g', 'Are You Sure?', 'The Allisons'),
(7, 1962, 'France', '5', 'img/EuroFrancia.svg', 'https://www.youtube.com/embed/Zk-ZiIwamHY', 'Un premier amour', 'Isabelle Aubret', 'Luxemburgo', 'Monaco', 'https://www.youtube.com/embed/Qeyse4ot0h0', 'Dis rien', 'François Deguelt'),
(8, 1963, 'Denmark', '3', 'img/EuroDinamarca.svg', 'https://www.youtube.com/embed/AYyhJvRE3mQ', 'Dansevise', 'Grethe and Jorgen Ingmann', 'London<br>(United Kingdom)', 'Switzerland', 'https://www.youtube.com/embed/kDYMzyREGCI', 'T\'en vas pas', 'Esther Ofarim'),
(9, 1964, 'Italy', '2', 'img/EuroItalia.svg', 'https://www.youtube.com/embed/Utd9cHBPfRA', 'Non ho l\'eta', 'Gigliola Cinquetti', 'Copenhague<br>(Denmark)', 'United Kingdom', 'https://www.youtube.com/embed/3aopcEG5Yfc', 'I Love The Little Things', 'Matt Monro'),
(10, 1965, 'Luxemburgo', '5', 'img/EuroLuxemburgo.svg', 'https://www.youtube.com/embed/7cv9NIzGmSI', 'Poupée de cire, poupée...', 'France Gall', 'Naples<br>(Italy)', 'United Kingdom', 'https://www.youtube.com/embed/5UX81PIgr5s', 'I belong', 'Kathy Kirby'),
(11, 1966, 'Austria', '2', 'img/EuroAustria.svg', 'https://www.youtube.com/embed/frtCOHgMvc8', 'Merci Chérie', 'Udo Jurgens', 'Luxemburgo', 'Sweden', 'https://www.youtube.com/embed/cxtmdB57WOY', 'Nygammal vals', 'Lill L. & Svante T.'),
(12, 1967, 'United Kingdom', '5', 'img/EuroReino_Unido.svg', 'https://www.youtube.com/embed/OkbVhjxdr8A', 'Puppet on a string', 'Shandie Shaw', 'Vienna<br>(Austria)', 'Ireland', 'https://www.youtube.com/embed/kDFmu-klR78', 'If I Could Choose', 'Sean Dunphy'),
(13, 1968, 'Spain', '2', 'img/EuroEspa%C3%B1a.svg', 'https://www.youtube.com/embed/J4g5QYJOFzQ', 'La, la, la', 'Massiel', 'London<br>(United Kingdom)', 'United Kingdom', 'https://www.youtube.com/embed/_xJcE9tnY6E', 'Congratulations', 'Cliff Richard'),
(14, 1969, 'United Kingdom', '5', 'img/EuroReino_Unido.svg', 'https://www.youtube.com/embed/LAexSMVOK5o', 'Boom bang-a-bang', 'Lulu', 'Madrid<br>(Spain)', 'Switzerland', 'https://www.youtube.com/embed/9eGeZuMuMTs', 'Bonjour, Bonjour', 'Paola del Medico'),
(15, 1969, 'The Netherlands', '5', 'img/EuroPa%C3%ADses_Bajos.svg', 'https://www.youtube.com/embed/FasfUSRdoYc', 'De Trouvadour', 'Lenny Kuhr', 'Madrid<br>(Spain)', 'Switzerland', '', 'x', ''),
(16, 1969, 'France', '5', 'img/EuroFrancia.svg', 'https://www.youtube.com/embed/_w583Hgt248', 'Un jour, un enfant', 'Frida Boccara', 'Madrid<br>(Spain)', 'Switzerland', '', 'x', ''),
(17, 1969, 'Spain', '2', 'img/EuroEspa%C3%B1a.svg', 'https://www.youtube.com/embed/_-PVtGc59CI', 'Vivo cantando', 'Salome', 'Madrid<br>(Spain)', 'Switzerland', '', 'x', ''),
(18, 1970, 'Ireland', '7', 'img/EuroIrlanda.svg', 'https://www.youtube.com/embed/ka5OfjwB3nM', 'All Kinds of Everything', 'Dana', 'Amsterdam<br>(The Netherlands)', 'United Kingdom', 'https://www.youtube.com/embed/Ohjs-UWrBsk', 'Knock Knock Who\'s There', 'Mary Hopkin'),
(19, 1971, 'Monaco', '1', 'img/EuroM%C3%B3naco.svg', 'https://www.youtube.com/embed/W1tSXCssXcQ', 'Un banc, un arbre, une rue', 'Severine', 'Dublin<br>(Ireland)', 'Spain', 'https://www.youtube.com/embed/WzyZ51jT8gg', 'En un mundo nuevo', 'Karina'),
(20, 1972, 'Luxemburgo', '5', 'img/EuroLuxemburgo.svg', 'https://www.youtube.com/embed/xTPVYktRl-I', 'Aprés toi', 'Vicky Leandros', 'Edinburgh<br>(United Kingdom)', 'United Kingdom', 'https://www.youtube.com/embed/Lv-pvnn8fhw', 'Beg, Steal or Borrow', 'The New Seekers'),
(21, 1973, 'Luxemburgo', '5', 'img/EuroLuxemburgo.svg', 'https://www.youtube.com/embed/n4I-icrOxRU', 'Tu te reconnaitras', 'Anne-Marie David', 'Luxemburgo', 'Spain', 'https://www.youtube.com/embed/eKE8BWmD-Jw', 'Eres tu', 'Mocedades'),
(22, 1974, 'Sweden', '6', 'img/EuroSuecia.svg', 'https://www.youtube.com/embed/3FsVeMz1F5c', 'Waterloo', 'ABBA', 'Brighton<br>(United Kingdom)', 'Italy', 'https://www.youtube.com/embed/ASxlA0QYZlQ', 'Si', 'Gigliola Cinquetti'),
(23, 1975, 'The Netherlands', '5', 'img/EuroPa%C3%ADses_Bajos.svg', 'https://www.youtube.com/embed/sI78Bqp6z6g', 'Ding-a-dong', 'Teach-In', 'Stockholm<br>(Sweden)', 'United Kingdom', 'https://www.youtube.com/embed/7r--8IpCvvE', 'Let Me Be The One', 'The Shadows'),
(24, 1976, 'United Kingdom', '5', 'img/EuroReino_Unido.svg', 'https://www.youtube.com/embed/fhq_Q1Ut8SQ', 'Save your kisses for me', 'Brotherhood of man', 'La Haya<br>(The Netherlands)', 'France', 'https://www.youtube.com/embed/lEDEd3xpbqA', 'Un, deux, trois', 'Catherine Ferry'),
(25, 1977, 'France', '5', 'img/EuroFrancia.svg', 'https://www.youtube.com/embed/ny_YsJUVdBg', 'L\'oiseau et l\'enfant', 'Marie Myriam', 'London<br>(United Kingdom)', 'United Kingdom', 'https://www.youtube.com/embed/wHEl8sYKN2Y', 'Rock bottom', 'L. de Paul & M. Moran'),
(26, 1978, 'Israel', '4', 'img/EuroIsrael.svg', 'https://www.youtube.com/embed/pOH-sojmLJY', 'A-ba-ni-bi', 'Izhar Cohen y Alphabeta', 'Paris<br>(France)', 'Belgium', 'https://www.youtube.com/embed/MfLDM1iap1k', 'L\'amour ça fait chanter la vie', 'Jean Vallée'),
(27, 1979, 'Israel', '4', 'img/EuroIsrael.svg', 'https://www.youtube.com/embed/jKbvuYRR35E', 'Hallelujah', 'Gali Atari y Milk & Honey', 'Jerusalen<br>(Israel)', 'Spain', 'https://www.youtube.com/embed/OefhvI0WSC0', 'Su canción', 'Betty Missiego'),
(28, 1980, 'Ireland', '7', 'img/EuroIrlanda.svg', 'https://www.youtube.com/embed/BPOwTXWe-Yw', 'What\'s another year?', 'Johnny Logan', 'La Haya<br>(The Netherlands)', 'Germany', 'https://www.youtube.com/embed/n8kO15_zAJ0', 'Theater', 'Katja Ebstein'),
(29, 1981, 'United Kingdom', '5', 'img/EuroReino_Unido.svg', 'https://www.youtube.com/embed/62SrA5hCmkE', 'Making your mind up', 'Bucks Fizz', 'Dublin<br>(Ireland)', 'Germany', 'https://www.youtube.com/embed/8sq3JONT9Ys', 'Johnny Blue', 'Lena Valaitis'),
(30, 1982, 'Germany', '2', 'img/EuroAlemania.svg', 'https://www.youtube.com/embed/CJDxnWFqpiA', 'Ein bibchen frieden', 'Nicole', 'Harrogate<br>(United Kingdom)', 'Israel', 'https://www.youtube.com/embed/jkbpIlQRdis', 'Hora', 'Avi Toledano'),
(31, 1983, 'Luxemburgo', '5', 'img/EuroLuxemburgo.svg', 'https://www.youtube.com/embed/C6uKNJ8nS3o', 'Si la vie est cadeau', 'Corinne Herm?s', 'Munich<br>(Germany)', 'Israel', 'https://www.youtube.com/embed/_XMZJYxb5XU', 'Khai', 'Ofra Haza'),
(32, 1984, 'Sweden', '6', 'img/EuroSuecia.svg', 'https://www.youtube.com/embed/jf7bP1dNS-8', 'Diggi-Loo-Diggi-Ley', 'Herreys', 'Luxemburgo', 'Luxemburgo', 'https://www.youtube.com/embed/EN6g8GLkHlY', '100% d\'amour', 'Sophie Carle'),
(33, 1985, 'Norway', '3', 'img/EuroNoruega.svg', 'https://www.youtube.com/embed/lKtUQS2VRD0', 'La det swinge', 'Bobbysocks', 'Gothenburg<br>(Sweden)', 'Germany', 'https://www.youtube.com/embed/KnDLyHabWGs', 'Für alle', 'Wind'),
(34, 1986, 'Belgium', '1', 'img/EuroB%C3%A9lgica.svg', 'https://www.youtube.com/embed/mXCOp4bso9I', 'Jaime la vie', 'Sandra Kim', 'Bergen<br>(Norway)', 'Switzerland', 'https://www.youtube.com/embed/ZmwNl35EMoc', 'Pas pour moi', 'Daniela Simmons'),
(35, 1987, 'Ireland', '7', 'img/EuroIrlanda.svg', 'https://www.youtube.com/embed/WJy9ZiliwwU', 'Hold me now', 'Johnny Logan', 'Brussels<br>(Belgium)', 'Germany', 'https://www.youtube.com/embed/PeLjnQeF-YQ', 'Lass die Sonne in dein Herz', 'Wind'),
(36, 1988, 'Switzerland', '2', 'img/ESCSwitzerland.png', 'https://www.youtube.com/embed/Its0DmezCZw', 'Ne partez pas sans moi', 'Celine Dion', 'Dublin<br>(Ireland)', 'United Kingdom', 'https://www.youtube.com/embed/F09DJR9iiHY', 'Go', 'Scott Fitzgerald'),
(37, 1989, 'Yugoslavia', '1', 'img/esc-yugoslavia-143x150.png', 'https://www.youtube.com/embed/FcxeIpv1Gdk', 'Rock me', 'Riva', 'Lausana<br>(Switzerland)', 'United Kingdom', 'https://www.youtube.com/embed/vi2puzoNppY', 'Why do I always get it wrong', 'Live Report'),
(38, 1990, 'Italy', '2', 'img/EuroItalia.svg', 'https://www.youtube.com/embed/0b5whZydVZc', 'Insieme: 1992', 'Toto Cotugno', 'Zagreb<br>(Yugoslavia)', 'France', 'https://www.youtube.com/embed/pENJT-E9yZ0', 'White and black blues', 'Joëlle Ursull'),
(39, 1991, 'Sweden', '6', 'img/EuroSuecia.svg', 'https://www.youtube.com/embed/7wnS4nu-bOc', 'Fangad av en stormvind', 'Carola', 'Roma<br>(Italy)', 'France', 'https://www.youtube.com/embed/PnxEBAoCZIw', 'C\'est le dernier qui a parlé', 'Amina'),
(40, 1992, 'Ireland', '7', 'img/EuroIrlanda.svg', 'https://www.youtube.com/embed/-g7Q7R3SIkI', 'Why me?', 'Linda Martin', 'Malmo<br>(Sweden)', 'United Kingdom', 'https://www.youtube.com/embed/ISZw2d2z1bM', 'One Step Out of Time', 'Michael Ball '),
(41, 1993, 'Ireland', '7', 'img/EuroIrlanda.svg', 'https://www.youtube.com/embed/ysLHYx0c80s', 'In your eyes', 'Niamh Kavanagh', 'Millstreet<br>(Ireland)', 'United Kingdom', 'https://www.youtube.com/embed/6Mzh0qinGRM', 'Better the Devil You Know', 'Sonia'),
(42, 1994, 'Ireland', '7', 'img/EuroIrlanda.svg', 'https://www.youtube.com/embed/1x_9JnCGXFY', 'Rock \'n\' roll kids', 'Harrington and McGettigan', 'Dublin<br>(Ireland)', 'Poland', 'https://www.youtube.com/embed/gzhJgLF6Qzk', 'To nie ja!', 'Edyta Górniak'),
(43, 1995, 'Norway', '3', 'img/EuroNoruega.svg', 'https://www.youtube.com/embed/6qqOI04uo_c', 'Nocturne', 'Secret Garden', 'Dublin<br>(Ireland)', 'Spain', 'https://www.youtube.com/embed/EokTHZyOO6s', 'Vuelve conmigo', 'Anabel Conde'),
(44, 1996, 'Ireland', '7', 'img/EuroIrlanda.svg', 'https://www.youtube.com/embed/KyA4wO5iqJI', 'The voice', 'Eimear Quinn', 'Oslo<br>(Norway)', 'Norway', 'https://www.youtube.com/embed/a1Ped6yttIU', 'I evighet ', 'Elisabeth Andreassen'),
(45, 1997, 'United Kingdom', '5', 'img/EuroReino_Unido.svg', 'https://www.youtube.com/embed/u-o5v3wpI1o', 'Love shine a light', 'Katrina & The Waves', 'Dublin<br>(Ireland)', 'Ireland', 'https://www.youtube.com/embed/GV_3B13Q3xs', 'Mysterious woman', 'Marc Roberts'),
(46, 1998, 'Israel', '4', 'img/EuroIsrael.svg', 'https://www.youtube.com/embed/fZ5B6w-Baxs', 'Diva', 'Dana Internacional', 'Birminham<br>(United Kingdom)', 'United Kingdom', 'https://www.youtube.com/embed/R9P_X7XP1ak', 'Where are you?', 'Imaani'),
(47, 1999, 'Sweden', '6', 'img/EuroSuecia.svg', 'https://www.youtube.com/embed/n2NU4H85J4o', 'Take me to your heaven', 'Charlotte Nilsson', 'Jerusalen<br>(Israel)', 'Iceland', 'https://www.youtube.com/embed/NrYl-naCAPA', 'All Out of Luck', 'Selma'),
(48, 2000, 'Denmark', '3', 'img/EuroDinamarca.svg', 'https://www.youtube.com/embed/F-JwiYlg5Gc', 'Fly on the wings of love', 'Olsen Brothers', 'Stockholm<br>(Sweden)', 'Russia', 'https://www.youtube.com/embed/TrZEQuncUTk', 'Solo', 'Alsou'),
(49, 2001, 'Estonia', '1', 'img/EuroEstonia.svg', 'https://www.youtube.com/embed/wri72BfnGh4', 'Everybody', 'Tanel Padar, Dave Benton', 'Copenhagen<br>(Denmark)', 'Denmark', 'https://www.youtube.com/embed/liGDLnSx4mc', 'Never Ever Let You Go', 'Rollo & King'),
(50, 2002, 'Latvia', '1', 'img/EuroLetonia.svg', 'https://www.youtube.com/embed/_cCUrEIpSJQ', 'I wanna', 'Marie N', 'Tallin<br>(Estonia)', 'Malta', 'https://www.youtube.com/embed/0b3ywwJMZLQ', '7th wonder', 'Ira Losco'),
(51, 2003, 'Turkey', '1', 'img/EuroTurqu%C3%ADa.svg', 'https://www.youtube.com/embed/vq9OAEBZmAg', 'Everyway that I can ', 'Sertab Erener', 'Riga<br>(Latvia)', 'Belgium', 'https://www.youtube.com/embed/WQWwBfjm1Ns', 'Sanomi', 'Urban Trad'),
(52, 2004, 'Ukraine', '2', 'img/EuroUcrania.png', 'https://www.youtube.com/embed/10XR67NQcAc', 'Wild dances', 'Ruslana', 'Istambul<br>(Turkey)', 'Serbia & Mont.', 'https://www.youtube.com/embed/z7OvpjplJ_8', 'Lane Moje', 'Zeljko Joksimovic'),
(53, 2005, 'Greece', '1', 'img/EuroGrecia.svg', 'https://www.youtube.com/embed/__R-r2t0vSU', 'My number one', 'Helena Paparizou', 'Kiev<br>(Ukraine)', 'Malta', 'https://www.youtube.com/embed/Vv8GmwcfR9A', 'Angel', 'Chiara'),
(54, 2006, 'Finland', '1', 'img/EuroFinlandia.svg', 'https://www.youtube.com/embed/gAh9NRGNhUU', 'Hard rock Halellujah', 'Lordi', 'Athens<br>(Greece)', 'Russia', 'https://www.youtube.com/embed/waYpnAexrUA', 'Never Let You Go', 'Dima Bilan'),
(55, 2007, 'Serbia', '1', 'img/EuroServia.svg', 'https://www.youtube.com/embed/FSueQN1QvV4', 'Molitva', 'Marija Serifovic', 'Helksinki<br>(Finland)', 'Ukraine', 'https://www.youtube.com/embed/hfjHJneVonE', 'Dancing Lasha Tumbai', 'Verka Serduchka'),
(56, 2008, 'Russia', '1', 'img/EuroRusia.svg', 'https://www.youtube.com/embed/-72s4WzUcKI', 'Believe', 'Dima Bilan', 'Belgrade<br>(Serbia)', 'Ukraine', 'https://www.youtube.com/embed/L6M300uBc7U', 'Shady Lady', 'Ani Lorak'),
(57, 2009, 'Norway', '3', 'img/EuroNoruega.svg', 'https://www.youtube.com/embed/WXwgZL4zx9o', 'Fairytale', 'Alexander Rybak', 'Moscow<br>(Russia)', 'Iceland', 'https://www.youtube.com/embed/qqE69feyEOU', 'Is It True ', 'Yohanna'),
(58, 2010, 'Germany', '2', 'img/EuroAlemania.svg', 'https://www.youtube.com/embed/7pL9vdpSvnY', 'Satellite', 'Lena', 'Oslo<br>(Norway)', 'Turkey', 'https://www.youtube.com/embed/HB_GnnhNz-8', 'We Could Be The Same', 'maNga'),
(59, 2011, 'Acerbaijan', '1', 'img/EuroAcerbaijan.svg', 'https://www.youtube.com/embed/_0tlQUW5X0U', 'Running scared', 'Ell & Nikki', 'Dusseldorf<br>(Germany)', 'Italy', 'https://www.youtube.com/embed/TE0uNLp3LuU', 'Madness Of Love', 'Raphael Gualazzi'),
(60, 2012, 'Sweden', '6', 'img/EuroSuecia.svg', 'https://www.youtube.com/embed/Pfo-8z86x80', 'Euphoria', 'Loreen', 'Baku<br>(Acerbaijan)', 'Russia', 'https://www.youtube.com/embed/BgUstrmJzyc', 'Party For Everybody', 'Buranovskiye Babushki'),
(61, 2013, 'Denmark', '3', 'img/EuroDinamarca.svg', 'https://www.youtube.com/embed/k59E7T0H-Us', 'Only teardrops', 'Emmelie de Forest', 'Malmo<br>(Sweden)', 'Acerbaijan', 'https://www.youtube.com/embed/iN3d_V7KVLE', 'Hold Me', 'Farid Mammadov'),
(62, 2014, 'Austria', '2', 'img/EuroAustria.svg', 'https://www.youtube.com/embed/QRUIava4WRM', 'Rise like a Phoenix', 'Conchita Wurst', 'Copenhagen<br>(Denmark)', 'The Netherlands', 'https://www.youtube.com/embed/bWe8PRsW4T0', 'Calm After The Storm', 'The Common Linnets'),
(63, 2015, 'Sweden', '6', 'img/EuroSuecia.svg', 'https://www.youtube.com/embed/5sGOwFVUU0I', 'Heroes', 'Mans Zelmerlow', 'Vienne<br>(Austria)', 'Russia', 'https://www.youtube.com/embed/GVJW9ImpiWc', 'A Million Voices', 'Polina Gagarina'),
(64, 2016, 'Ukraine', '2', 'img/EuroUcrania.png', 'https://www.youtube.com/embed/B-rnM-MwRHY', '1944', 'Jamala', 'Stockholm<br>(Sweden)', 'Australia', 'https://www.youtube.com/embed/5ymFX91HwM0', 'Sound Of Silence', 'Dami Im'),
(65, 2017, 'Portugal', '1', 'img/EuroPortugal.svg', 'https://www.youtube.com/embed/Qotooj7ODCM', 'Amar pelos dois', 'Salvador Sobral', 'Kiev<br>(Ukraine)', 'Bulgaria', 'https://www.youtube.com/embed/OMmm-G078LM', 'Beautiful Mess', 'Kristian Kostov'),
(66, 2018, 'Israel', '4', 'img/EuroIsrael.svg', 'https://www.youtube.com/embed/84LBjXaeKk4', 'Toy', 'Netta Barzilai', 'Lisboa<br>(Portugal)', 'Cyprus', 'https://www.youtube.com/embed/vyDTbJ4wenY', 'Fuego', 'Eleni Foureira'),
(67, 2019, 'The Netherlands', '5', 'img/EuroPa%C3%ADses_Bajos.svg', 'https://www.youtube.com/embed/R3D-r4ogr7s', 'Arcade', 'Duncan Laurence', 'Tel Aviv<br>(Israel)', 'Italy', 'https://www.youtube.com/embed/Va-JXIhsYD0', 'Soldi', 'Mahmood');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eur_puestos`
--

CREATE TABLE `eur_puestos` (
  `id` int(11) NOT NULL,
  `Annio` int(11) NOT NULL,
  `Puesto` varchar(2) CHARACTER SET utf8mb4 NOT NULL,
  `Pais` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `Video` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `Cancion` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `interprete` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `CiudadSede` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `Star` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `eur_puestos`
--

INSERT INTO `eur_puestos` (`id`, `Annio`, `Puesto`, `Pais`, `Video`, `Cancion`, `interprete`, `CiudadSede`, `Star`) VALUES
(1, 2016, '11', 'The Netherlands', 'https://www.youtube.com/embed/PwF9DI89q1w', 'Slow Down', 'Douwe Bob', 'Stockholm<br>(Sweden)', 0),
(2, 2012, '10', 'Spain', 'https://www.youtube.com/embed/5qSkMD9ilL4', 'Quédate conmigo', 'Pastora Soler', 'Baku<br>(Acerbaijan)', 0),
(3, 2002, '3', 'Estonia', 'https://www.youtube.com/embed/tky7vWXSZrs', 'Runaway', 'Sahlene', 'Tallin<br>(Estonia)', 0),
(4, 1993, '4', 'France', 'https://www.youtube.com/embed/fseF8OrrlMY', 'Mama Corsica', 'Patrick Fiori', 'Millstreet<br>(Ireland)', 0),
(5, 1989, '6', 'Spain', 'https://www.youtube.com/embed/Vq7sKwxmK7g', 'Nacida para amar', 'Nina', 'Lausanne<br>(Switzerland)', 0),
(6, 1985, '3', 'Sweden', 'https://www.youtube.com/embed/4HzLAePT-5E', 'Bra vibrationer', 'Kikki Danielsson', 'Gothenburg<br>(Sweden)', 0),
(7, 1980, '5', 'The Netherlands', 'https://www.youtube.com/embed/HmgXSnfeudM', 'Amsterdam', 'Maggie MacNeal', 'La Haya<br>(The Netherlands)', 0),
(8, 1979, '6', 'Denmark', 'https://www.youtube.com/embed/XZ44_wBTHWU', 'Disco tango', 'Tommy Seebach', 'Jerusalen<br>(Israel)', 0),
(9, 1978, '7', 'Luxemburgo', 'https://www.youtube.com/embed/71HdQw0-tZk', 'Parlez-vous français?', 'Baccara', 'Paris<br>(France)', 0),
(10, 1958, '3', 'Italy', 'https://www.youtube.com/embed/9DPAb9-Stmo', 'Volare', 'Domenico Modugno', 'Hilversum<br>(The Netherlands)', 0),
(15, 1976, '7', 'Italy', 'https://www.youtube.com/embed/ZHj2PKdQFqg', 'Noi Lo Rivivremo Di Nuovo', 'Al Bano and Romina Power', 'La Haya<br>(The Netherlands)', 1),
(16, 1985, '7', 'Italy', 'https://www.youtube.com/embed/y0X_tqgeOsg', 'Magic, oh magic', 'Al Bano and Romina Power', 'Gothenburg<br>(Sweden)', 1),
(17, 1970, '4', 'Spain', 'https://www.youtube.com/embed/xlqiv5q2lgE', 'Gwendolyne', 'Julio Iglesias', 'Luxemburgo', 1),
(18, 1963, '8', 'Luxemburgo', 'https://www.youtube.com/embed/98HlhsUVX70', 'À Force De Prier', 'Nana MusKouri', 'London<br>(United Kingdom)', 1),
(19, 2009, '16', 'Israel', 'https://www.youtube.com/embed/bBTQFOkFZw8', 'There Must Be Another Way', 'Noa and Mira Awad', 'Moscu<br>(Russia)', 1),
(20, 1984, '5', 'Italy', 'https://www.youtube.com/embed/Q3KUujSf3t8', 'I treni di Tozeur', 'Franco Battiato and Alice', 'Luxemburgo', 1),
(21, 1974, '4', 'United Kingdom', 'https://www.youtube.com/embed/eyu1SHoWAv0', 'Long live love', 'Olivia Newton John', 'Brighton<br>(United Kingdom)', 1),
(23, 2013, '19', 'United Kingdom', 'https://www.youtube.com/embed/-agn-ERgTXA', 'Believe In Me', 'Bonnie Tyler', 'Malmo<br>(Sweden)', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `Pais` varchar(150) NOT NULL,
  `Historia` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `history`
--

INSERT INTO `history` (`id`, `Pais`, `Historia`) VALUES
(1, 'Norway', 'Norway\'s first entrant in the contest in 1960 was Nora Brockstedt, who finished fourth. Åse Kleveland then finished third in 1966. Following Kleveland\'s result, Norway would fail to reach the top ten in 14 out of their next 15 attempts, the exception being Bendik Singers seventh place in 1973.\r\n\r\nBefore 1985, Norway had only reached the top five in two out of 24 attempts and had finished last six times. In 1985, Bobbysocks gave the country its first victory with the song \"La det swinge\" (Let It Swing). Norway went on to achieve two more top five results over the next ten years, with both Karoline Krüger in 1988 and Silje Vige in 1993, finishing fifth.\r\n\r\nNorway\'s second victory came in 1995 with Secret Garden\'s mainly instrumental, Celtic-influenced ethno-piece \"Nocturne\". In 1996, Elisabeth Andreassen, who had won the contest as one half of Bobbysocks, returned to finish second. In 2003, Jostein Hasselgård was fourth.\r\n\r\nNorway won for the third time in 2009, with Alexander Rybak\'s smash hit \"Fairytale\".'),
(2, 'United Kingdom', 'The United Kingdom has participated in the Eurovision Song Contest 62 times. They first participated in the second contest in 1957. The UK has entered every year since 1959, and along with Sweden and the Netherlands, is one of only three countries with Eurovision victories in four different decades. The United Kingdom is one of the \"Big 5\", along with France, Germany, Italy and Spain.\r\nThe UK has won the contest five times, and has finished second on a record fifteen times. The United Kingdom\'s five winners are Sandie Shaw with the song \"Puppet on a String\" (1967), Lulu with \"Boom Bang-a-Bang\" (1969 tied), Brotherhood of Man with \"Save Your Kisses for Me\" (1976), Bucks Fizz with \"Making Your Mind Up\" (1981) and Katrina and the Waves with \"Love, Shine a Light\" (1997). The UK has also finished as runner-up on a record 15 occasions; with Pearl Carr & Teddy Johnson (1959), Bryan Johnson (1960), The Allisons (1961), Matt Monro (1964), Kathy Kirby (1965), Cliff Richard (1968), Mary Hopkin (1970), The New Seekers (1972), The Shadows (1975), Lynsey de Paul and Mike Moran (1977), Scott Fitzgerald (1988), Live Report (1989), Michael Ball (1992), Sonia (1993) and Imaani (1998). The United Kingdom finished outside the top ten on only three occasions at the contest in the 20th century (1978, 1987 and 1999).'),
(3, 'The Netherlands', 'The Netherlands has participated in the Eurovision Song Contest 60 times since making its debut as one of the seven countries at the first contest in 1956. The country has missed only four contests, twice because the dates coincided with Remembrance of the Dead (1985, 1991) and twice because of being relegated due to poor results the previous year (1995 and 2002). The Netherlands hosted the contest in Hilversum (1958), Amsterdam (1970), twice in The Hague (1976 and 1980), and will host the contest in Rotterdam in 2020.  The Netherlands has won the contest five times, with Corry Brokken (1957), Teddy Scholten (1959), Lenny Kuhr in a four-way tie (1969), Teach-In (1975) and Duncan Laurence (2019). The country\'s other top five results are Sandra & Andres fourth (1972), Mouth & MacNeal third (1974), Maggie MacNeal fifth (1980), Marcha fifth (1987), Edsilia Rombley fourth (1998), and second with The Common Linnets (2014). The Netherlands finished last in 1958, 1962, 1963, 1968, and in the semifinal in 2011.'),
(4, 'Belgium', 'Belgium has participated in the Eurovision Song Contest 61 times since making its debut as one of the seven countries at the first contest in 1956. The only countries with more appearances are Germany (63), France (62) and the United Kingdom (62). Belgium have been absent only three times in total, in 1994, 1997 and 2001, due to low scores in the previous contests that relegated them from the contest. Belgium has won the contest once, in 1986.\r\n'),
(5, 'Spain', 'Spain has participated in the Eurovision Song Contest 59 times since making its debut in 1961, where they finished ninth. Since 1999, Spain has been one of the \"Big Five\", along with France, Germany, Italy and the United Kingdom, who are automatically allowed to participate in the final because they are the five biggest financial contributors to the European Broadcasting Union. Spain has competed in the contest continuously since the country\'s debut in 1961. The only country with a longer run of uninterrupted Eurovision appearances is the United Kingdom, ever-present since 1959.\r\n'),
(6, 'Bulgaria', 'Bulgaria has participated in the Eurovision Song Contest 12 times since making its debut at the 2005 contest in Kiev. The country\'s best result is a second-place finish for Kristian Kostov and the song \"Beautiful Mess\" at the 2017 contest also in Kiev.  Bulgaria has failed to qualify for the final in eight out of twelve appearances at the contest, most narrowly in 2012, when Sofi Marinova lost out on the 10th qualifying place from the second semi-final in a tie-break with Norway. However, on three of the four occasions that they have reached the final, they have finished in the top five: placing fifth with Elitsa & Stoyan in 2007, fourth with Poli Genova in 2016 and second with Kristian Kostov in 2017. Bulgaria reached the final for the fourth time in 2018, with supergroup Equinox placing 14th.'),
(7, 'Switzerland', 'Switzerland has participated in the Eurovision Song Contest 60 times since making its debut at the first contest in 1956, missing only four contests, in 1995, 1999, 2001 and 2003. Switzerland hosted the first contest in 1956 in Lugano, and won it. Switzerland won the contest again in 1988, with the 1989 contest being held in Lausanne.\r\n'),
(8, 'Albania', 'Albania has participated in the Eurovision Song Contest 16 times since its debut in 2004. The Albanian broadcaster, Radio Televizioni Shqiptar (RTSH), has been the organiser of the Albanian Eurovision entry since the country\'s debut in the contest and has used the long-standing Albanian song contest, Festivali i Këngës, to select the Albanian Eurovision entry.  In 2004, Albania\'s first entry at Eurovision, Anjeza Shahini, finished seventh in the final. This remained the country\'s best result in the contest until 2012, when Rona Nishliu placed fifth.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `Pais` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `Foto` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `Fecha` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `Titular` text CHARACTER SET utf8mb4 NOT NULL,
  `Contenido` text CHARACTER SET utf8mb4 NOT NULL,
  `TitularVideo` text CHARACTER SET utf8mb4 NOT NULL,
  `Video` varchar(150) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `news`
--

INSERT INTO `news` (`id`, `Pais`, `Foto`, `Fecha`, `Titular`, `Contenido`, `TitularVideo`, `Video`) VALUES
(1, 'The Netherlands', 'img/n1.jpg', '~ 6 months ago', 'Duncan Laurence wins Eurovision 2019 for the Netherlands', 'Duncan Laurence has won the 2019 Eurovision Song Contest for the Netherlands with \'Arcade\'. They won a total of 498 points from the expert juries and televote. Italy finished in second place and Russia came third. \'Arcade\' is written and composed by Duncan Laurence, Joel Sjöö and Wouter Hardy.', 'Duncan Laurence delivers 5th win for the Netherlands', 'https://www.youtube.com/embed/Ho3smGc5hgk'),
(2, 'The Netherlands', 'img/n2.jpg', '~ 6 months ago', 'After 44 years, the Netherlands brings the trophy home again', 'In the early days of the Eurovision Song Contest, the Netherlands proved to be successful at the competition. There were Dutch victories in 1957, 1959, 1969 and 1975. After the mid-70s the top position was never claimed again. But in 2013, the country shifted gears and reached second place the following year. On 18 May 2019, the 44-year trophyless period officially ended when Duncan Laurence won for his home country with \'Arcade\'.', 'The Common Linnets\' connection', 'https://www.youtube.com/embed/ofHxgvXLvk0'),
(3, 'Spain', 'img/n3.jpg', '~ 6 months ago', 'Spain confirms internal selection for 2020', 'RTVE has confirmed Spain\'s participation in the 65th Eurovision Song Contest to be held in Rotterdam next May. After the United Kingdom, Spain is the second Big 5 country to shift away from a televised national final to an internal selection for the Eurovision Song Contest 2020.', 'Spain at the Eurovision Song Contest', 'https://www.youtube.com/embed/lWXuohnM14U'),
(4, 'The Netherlands', 'img/ned.jpg', '~ 6 months ago', 'Which Dutch city or region will host Eurovision 2020?', 'With Duncan Laurence\'s win, the Eurovision Song Contest will be moving to the Netherlands next year. But in which Host City will the 2020 Eurovision Song Contest take place? Dutch public broadcasters NPO, AVROTROS and NOS are officially kicking off the City Bid process!  Next year?s contest will be a joint venture between 3 Dutch EBU Members: NPO, AVROTROS and NOS. They are now inviting Dutch cities and regions to apply as Host City for the 2020 Eurovision Song Contest.', 'The Netherlands in ESC', 'https://www.youtube.com/embed/imjq5yQzNiI'),
(5, 'The Netherlands', 'img/nel.jpg', '~ 3 months ago\r\n\r\n', 'How the Netherlands hosts the Eurovision Song Contest', '2020 marks the fifth time the Netherlands will host the world\'s largest live music event. While preparations kick off in for the next 65th Contest Rotterdam, we look back on the previous Contests held on Dutch soil.  The Eurovision Song Contest 2020 will take place in Rotterdam, and it will be the fifth time the Netherlands will host the event.', 'The Netherlands and eurovision', 'https://www.youtube.com/embed/55wTfeV5bXg'),
(6, 'Belgium', 'img/bel.jpg', '~ 2 months ago', 'Belgium chooses Hooverphonic for Eurovision 2020', 'Public broadcaster VRT has the honour of announcing the first Eurovision Song Contest 2020 participant. The Belgians selected Hooverphonic to represent their country in Rotterdam. The group is currently working on their participating song.  Band members Alex Callier, Raymond Geerts and Luka Cruysberghs are currently working on their entry. The song will be in English, is in the demo stage right now and the final version will be unveiled in early 2020.', 'Hooverphonic', 'https://www.youtube.com/embed/kVL814YbWPU'),
(7, 'United Kingdom', 'img/unit.jpg', '~ 2 months ago\r\n\r\n', 'UK: BBC announces new internal selection process for 2020', 'The BBC has confirmed the United Kingdom\'s participation at the 65th Eurovision Song Contest which will be held in Rotterdam, The Netherlands in May 2020. BBC Studios will once again produce the BBC\'s coverage of the biggest and most-watched song competition in the world. Who will be Michael Rice\'s successor? We will soon find out.  Also announced is a brand new collaboration between BBC Studios and music company BMG in order to find a song and artist(s) to represent the United Kingdom in next year?s contest.', 'The United Kingdom at the Eurovision Song Contest', 'https://www.youtube.com/embed/HV-eOhTS8Dw'),
(8, 'Spain', 'img/blas.jpg', '~ 2 months ago', 'BLAS CANTÓ to represent Spain at Eurovision 2020', 'Just two weeks after confirming that the Spanish artist for the 2020 Eurovision Song Contest would be chosen through an internal selection, public broadcaster RTVE announces Blas Cant? as their representative for Rotterdam.  After Belgium being the first country to announce their 2020 act earlier this week, Spain followed with a surprise announcement during the main news broadcast.', 'Who is Blas Cant??', 'https://www.youtube.com/embed/IRsMtrMe0Vk'),
(9, 'Norway', 'img/nor.jpg', '~ 3 weeks ago', 'Who will be KEiiNO\'s successor?', 'Norway celebrates their 60th participation in the Eurovision Song Contest in 2020 and, this year, some changes will be made to their national selection, \'Melodi Grand Prix\' (MGP). One of these more notable changes is the choice of host city: this time, the national final will be hosted in Trondheim.  The change in host city stands out as this will only be the third time in 6 decades that the final is held outside of Oslo.', 'Norway in ESC', 'https://www.youtube.com/embed/Ovt7YGHAj8I'),
(10, 'Bulgaria', 'img/hero.jpg', '~ 2 weeks ago', 'VICTORIA to represent Bulgaria at Eurovision 2020', 'VICTORIA will represent Bulgaria at the Eurovision Song Contest 2020 in Rotterdam. The artist was announced at a press conference in Sofia, organized by the Bulgarian public broadcaster Bulgarian National Television (BNT) and her producers from Ligna Studios.  VICTORIA?s distinctive voice and style position her as one of the most promising new music artists from Bulgaria. The Bulgarian entry will be selected internally and will be presented in early March.', 'VICTORIA', 'https://www.youtube.com/embed/kOrC4PdUE6c'),
(11, 'Switzerland', 'img/sui.jpg', '~ 2 hours ago', 'Switzerland on the hunt for Eurovision 2020 songs', 'Hardly a month after Luca H?nni achieved fourth place for Switzerland, Swiss broadcaster SRF, together with RTS, RSI and RTR invites musicians to submit their songs for the Swiss 2020 Eurovision Song Contest entry.  Just like during last year\'s selection, a 100-member audience panel and an international jury of 20 experts will select the winning song and the artist for Switzerland. Details about the registration conditions and the selection process can be found on SRF.ch.', 'Switzerland in ESC', 'https://www.youtube.com/embed/zEGgKQf1cws'),
(12, 'Albania', 'img/alb.jpg', '~ 1 hours ago', 'Who will travel to Rotterdam in May 2020 for Albania?', 'Vincent Bueno will sing for Austria at the Eurovision Song Contest 2020. The 34-year-old Vincent from Vienna will perform the up-tempo song ‘Alive\' in May in Rotterdam. Austrian broadcaster ORF will reveal his participating song in March 2020.', 'Listen to the songs', 'https://www.youtube.com/embed/OQFbA7yfzjo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salto`
--

CREATE TABLE `salto` (
  `id` int(11) NOT NULL,
  `Salto` int(11) NOT NULL,
  `deDonde` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `salto`
--

INSERT INTO `salto` (`id`, `Salto`, `deDonde`) VALUES
(1, 2, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `banderas`
--
ALTER TABLE `banderas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eur_ganadores`
--
ALTER TABLE `eur_ganadores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eur_puestos`
--
ALTER TABLE `eur_puestos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `salto`
--
ALTER TABLE `salto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `banderas`
--
ALTER TABLE `banderas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `eur_ganadores`
--
ALTER TABLE `eur_ganadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT de la tabla `eur_puestos`
--
ALTER TABLE `eur_puestos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT de la tabla `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `salto`
--
ALTER TABLE `salto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
