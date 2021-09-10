-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-09-2021 a las 19:30:43
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.3.29

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dtbcolegio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `alumno_id` int(11) NOT NULL,
  `cedula` varchar(100) NOT NULL,
  `primerN` varchar(100) NOT NULL,
  `segundoN` varchar(100) NOT NULL,
  `primerA` varchar(100) NOT NULL,
  `segundoA` varchar(100) NOT NULL,
  `sexo` varchar(100) NOT NULL,
  `fechaDN` varchar(100) NOT NULL,
  `seccion_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `concepto`
--

CREATE TABLE `concepto` (
  `concepto_id` int(11) NOT NULL,
  `inscripcion` varchar(100) NOT NULL,
  `mensualidad` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturacion`
--

CREATE TABLE `facturacion` (
  `factura_id` int(11) NOT NULL,
  `razonS` varchar(150) NOT NULL,
  `domicilioF` varchar(150) NOT NULL,
  `Rif` varchar(100) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `concepto` varchar(100) NOT NULL,
  `monto` varchar(300) NOT NULL,
  `total` varchar(300) NOT NULL,
  `metodo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `facturacion`
--

INSERT INTO `facturacion` (`factura_id`, `razonS`, `domicilioF`, `Rif`, `telefono`, `fecha`, `concepto`, `monto`, `total`, `metodo_id`) VALUES
(1, 'Javier Soto', 'Cagua', '24174934', '0412-5395695', '16/16/16', 'Pago Movil', '2.000.000', '40.400.000', 0),
(2, 'Javier Soto', 'Cagua', '24174934', '0412-5395695', '16/16/16', 'Inscripcion', '2.000.000', '40.400.000', 0),
(3, 'Javier Soto', 'Cagua', '24174934', '0412-5395695', '', 'Inscripcion', '2.000.000', '40.400.000', 0),
(4, 'Cagua', 'Maracay', '24171934', '041145662776', '16/16/16', 'Mensualidad de Agosto', '12.000.000', '12.000.000', 0),
(5, 'Jose Antonio', 'Maracay', 'J-30784057-2', '041145662776', '17/17/17', 'Inscripcion ', '20.000.000', '40.000.000', 0),
(6, 'Javier perez', 'Santa Cruz', '24174933', '04125395695', '17/17/17', 'Inscripcion', '12.000.000', '20.000.000', 0),
(7, 'j112312', '1231', '3414', '041145662776', '123123', '213123', '12312', '123123', 0),
(12, '12312', '213123', '123123', '123123213', '123123', '123123', '12312', '21312', 0),
(13, 'Javier Soto', 'Cagua', '24174934', '0412-5395695', '', 'Inscripcion', '2.000.000', '40.400.000', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grado`
--

CREATE TABLE `grado` (
  `grado_id` int(11) NOT NULL,
  `grado` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `materia_id` int(11) NOT NULL,
  `materia` varchar(11) NOT NULL,
  `grado_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodo`
--

CREATE TABLE `metodo` (
  `metodo_id` int(11) NOT NULL,
  `pagoM` varchar(255) NOT NULL,
  `transF` varchar(255) NOT NULL,
  `efectivo` varchar(255) NOT NULL,
  `concepto_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seccion`
--

CREATE TABLE `seccion` (
  `seccion_id` int(11) NOT NULL,
  `seccion` varchar(100) NOT NULL,
  `grado_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`alumno_id`),
  ADD KEY `alumno_ibfk_1` (`seccion_id`);

--
-- Indices de la tabla `concepto`
--
ALTER TABLE `concepto`
  ADD PRIMARY KEY (`concepto_id`);

--
-- Indices de la tabla `facturacion`
--
ALTER TABLE `facturacion`
  ADD PRIMARY KEY (`factura_id`),
  ADD KEY `metodo_id` (`metodo_id`);

--
-- Indices de la tabla `grado`
--
ALTER TABLE `grado`
  ADD PRIMARY KEY (`grado_id`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`materia_id`),
  ADD KEY `materias_ibfk_1` (`grado_id`);

--
-- Indices de la tabla `metodo`
--
ALTER TABLE `metodo`
  ADD PRIMARY KEY (`metodo_id`),
  ADD KEY `concepto_id` (`concepto_id`);

--
-- Indices de la tabla `seccion`
--
ALTER TABLE `seccion`
  ADD PRIMARY KEY (`seccion_id`),
  ADD KEY `seccion_ibfk_1` (`grado_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumno`
--
ALTER TABLE `alumno`
  MODIFY `alumno_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `concepto`
--
ALTER TABLE `concepto`
  MODIFY `concepto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `facturacion`
--
ALTER TABLE `facturacion`
  MODIFY `factura_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `grado`
--
ALTER TABLE `grado`
  MODIFY `grado_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `materia_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `metodo`
--
ALTER TABLE `metodo`
  MODIFY `metodo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `seccion`
--
ALTER TABLE `seccion`
  MODIFY `seccion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`seccion_id`) REFERENCES `seccion` (`seccion_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `concepto`
--
ALTER TABLE `concepto`
  ADD CONSTRAINT `concepto_ibfk_1` FOREIGN KEY (`concepto_id`) REFERENCES `metodo` (`concepto_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `materias`
--
ALTER TABLE `materias`
  ADD CONSTRAINT `materias_ibfk_1` FOREIGN KEY (`grado_id`) REFERENCES `grado` (`grado_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `metodo`
--
ALTER TABLE `metodo`
  ADD CONSTRAINT `metodo_ibfk_1` FOREIGN KEY (`metodo_id`) REFERENCES `facturacion` (`metodo_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `seccion`
--
ALTER TABLE `seccion`
  ADD CONSTRAINT `seccion_ibfk_1` FOREIGN KEY (`grado_id`) REFERENCES `grado` (`grado_id`) ON UPDATE CASCADE;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
