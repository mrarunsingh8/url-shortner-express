-- create the databases
CREATE DATABASE IF NOT EXISTS short;

-- create the users for each database
CREATE USER 'short'@'%' IDENTIFIED BY 'short';

GRANT ALL PRIVILEGES ON short.* TO 'short'@'%';
GRANT CREATE, ALTER, INDEX, LOCK TABLES, REFERENCES, UPDATE, DELETE, DROP, SELECT, INSERT ON `short`.* TO 'short'@'%';

FLUSH PRIVILEGES;