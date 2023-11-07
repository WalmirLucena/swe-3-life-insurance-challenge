CREATE DATABASE identity;
CREATE USER 'walmir'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
GRANT ALL ON identityApi.* TO 'walmir'@'%';

FLUSH PRIVILEGES;

USE identity;
