# ProjectChVillanueva

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Install

1. Correr `npm i` command
2. Correr `npm run dev` 

 ## Validaciones

 contraseña: al menos 8 caractéres

## Ejecutar en MySql WorkBnehc

CREATE DATABASE IF NOT EXISTS `login_node` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `login_node`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES (1, 'test', '12345678', 'admin');

## Login
	Username: test	
	Password: 13245678

	==//Para un ingreso directo, descomentear el siguiente código file: login.component.ts //==
	
   /*  const userData = {
      Usuario: 'test',
      Contraseña: '12345678'
    };
    this.authSvc.login(userData).subscribe((res) => console.log('Login'));
    */


## Backend y Frontend
  -Backend: http://localhost:3000/users
  -Frontend: http://localhost:4200/login
		.http://localhost:4200/app/alumnos
		.http://localhost:4200/app/cursos


## Actvidades 
    • NGRX(Rest, paginación)
	• Rutas (Validaciones)  
	• Login (Validaciones)
	• Guard
	• CRUD(cursos) (Validaciones)
	• Comunicación entre componentes
	• Modularidad
	• Directivas estructurales
	• Unit test
	• NgStyle
	• ngClass


![Alt text](assets/img/login-ch.png?raw=true "Login")
