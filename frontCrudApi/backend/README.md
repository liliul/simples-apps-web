## Iniciando o backend
```bash
npm install

npm run mydev
```

## Conexão com mysql
```bash
create database frontCrudApi;

use frontCrudApi;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL
);
```
