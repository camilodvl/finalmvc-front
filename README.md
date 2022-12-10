# finalmvc-front

# Integrantes
# Camilo Andres Ramirez Muñoz PREELEC2202PC-TDS0033
# Julian Ramirez Vasquez PREELEC2202PC-TDS0033

# Opcion Elegida: 1 (Canvas)

# Video explicativo:
[VSCode](https://youtu.be/_LiXTbylT84)

# Script Base de datos (Se tiene un usuario Decano, y uno estudiante)
```sh
INSERT INTO finalmvc.programs (name,created_at,updated_at) VALUES
	 ('Ingeniería Informatica','2022-12-10 21:06:46','2022-12-10 21:06:46'),
	 ('Ingenieria mecatronica','2022-12-10 22:30:15','2022-12-10 22:30:15');


INSERT INTO finalmvc.courses (name,credits,teacher,pre_requisite,a_hours,d_hours,created_at,updated_at) VALUES
	 ('Ingles I',5,'Julian','Ingles basico',10,10,'2022-12-10 21:06:38','2022-12-10 21:06:38'),
	 ('Informatica Basica',10,'Adriancho','Ninguno',10,15,'2022-12-10 22:29:46','2022-12-10 22:29:46'),
	 ('Matematicas',10,'Julio','Ninguno',10,10,'2022-12-10 22:30:02','2022-12-10 22:30:02'),
	 ('Calculo',10,'Pedro','Matematicas',10,10,'2022-12-10 22:30:36','2022-12-10 22:30:36'),
	 ('Algebra lineal',10,'Pablo','Calculo',10,10,'2022-12-10 22:31:00','2022-12-10 22:31:00');



INSERT INTO finalmvc.course_programs (course_id,program_id,semester,created_at,updated_at) VALUES
	 (1,1,1,'2022-12-10 21:06:56','2022-12-10 21:06:56'),
	 (2,1,1,'2022-12-10 22:31:24','2022-12-10 22:31:24'),
	 (3,1,1,'2022-12-10 22:31:32','2022-12-10 22:31:32'),
	 (4,1,2,'2022-12-10 22:31:40','2022-12-10 22:31:40'),
	 (5,1,3,'2022-12-10 22:31:48','2022-12-10 22:31:48');

INSERT INTO finalmvc.users (name,email,email_verified_at,password,rol,remember_token,created_at,updated_at) VALUES
	 ('Ismael West','tmayert@example.org','2022-12-10 19:40:43','Qwer1234','E','','2022-12-10 19:40:43','2022-12-10 19:40:43'),
	 ('camilo','camilo.228@hotmail.com','2022-12-10 19:41:22','Qwer1234','D','','2022-12-10 19:41:22','2022-12-10 19:41:22');

```

