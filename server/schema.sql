CREATE DATABASE chat;

USE chat;

/* Describe your table here.*/

CREATE TABLE users (
  id INT AUTO_INCREMENT, 
  username VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE room (
--   id INT AUTO_INCREMENT,
--   roomName VARCHAR(255) NOT NULL, 
--   PRIMARY KEY (id)
-- );

CREATE TABLE messages (
  id INT AUTO_INCREMENT, 
  message VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  room VARCHAR (255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
  -- FOREIGN KEY (room) REFERENCES room(id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

