create database sistema_gestion_academica;

use sistema_gestion_academica;

create table roles(
	id int primary key auto_increment,
    name varchar(20) unique not null
);
INSERT INTO roles (name) VALUES ('admin'), ('teacher'),('student');

create table users(
	id int primary key auto_increment,
    name varchar(40) not null,
    email varchar(15) unique,
    password varchar(24) not null,
    create_at timestamp default current_timestamp,
    role_id int not null,
    foreign key (role_id) references roles(id) on delete restrict
);

create table students(
	 id int primary key	 auto_increment,
	 carrer varchar(50),
	 enrollment_date date,
	 user_id int not null, 
	 foreign key (user_id) references users(id)
);

create table teachers(
	id int primary key auto_increment, 
    user_id int not null,
    foreign key (user_id) references users(id),
	specialty varchar(20)
);

create table academic_periods(
	id INT PRIMARY KEY AUTO_INCREMENT,
	semester INT NOT NULL,
	year INT NOT NULL,
	start_date DATE,
	end_date DATE,
	UNIQUE (semester, year)
);

create table courses (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	code VARCHAR(20) NOT NULL UNIQUE,
	credits INT NOT NULL
); 


create table course_offerings(
	id INT PRIMARY KEY AUTO_INCREMENT,
	course_id INT NOT NULL,
	teacher_id INT NOT NULL,
	academic_period_id INT NOT NULL,
	FOREIGN KEY (course_id) REFERENCES courses(id),
	FOREIGN KEY (teacher_id) REFERENCES teachers(id),
	FOREIGN KEY (academic_period_id) REFERENCES academic_periods(id),
	UNIQUE (course_id, academic_period_id)
);


create table enrollments(
	id INT PRIMARY KEY AUTO_INCREMENT,
	student_id INT NOT NULL,
	course_offering_id INT NOT NULL,
	status ENUM('enrolled','withdrawn','completed','failed') DEFAULT 'enrolled',
	enrollment_date DATE NOT NULL,
	FOREIGN KEY (student_id) REFERENCES students(id),
	FOREIGN KEY (course_offering_id) REFERENCES course_offerings(id),
	UNIQUE (student_id, course_offering_id)
);

create table grades(
	id INT PRIMARY KEY AUTO_INCREMENT,
	enrollment_id INT NOT NULL,
	grade1 DECIMAL(5,2),
	grade2 DECIMAL(5,2),
	final_grade DECIMAL(5,2),
	FOREIGN KEY (enrollment_id) REFERENCES enrollments(id)students
);


INSERT INTO users (name,email,password,role_id) 
values ('Alexander','alexander@gmail.com','87549896',2);






