# NTU Web Application Programming

|HW|Description|
|---|---|
|HW1|HTML + CSS|
|HW2|HTML + CSS + Javascript|
|HW3|React|
|HW4|React + RESTful + JQuery|

## React

```
cd /Users/angelwang/Desktop/台大/碩二下/4_Web\ APP\ 開發/HW/
yarn create react-app YOUR_APP_NAME
cd YOUR_APP_NAME
yarn add bootstrap
yarn add typed.js
// yarn add glightbox
// yarn add swiper
// yarn add isotope-layout
yarn add axios jquery
yarn start
```

## Final Project - Frontend
https://github.com/angel870326/animal-cloud-adoption

### Create project
```
cd PATH
yarn create next-app
```

### Add dependencies
```
cd YOUR_APP_NAME
yarn add @mui/material @emotion/react @emotion/styled
yarn add @fontsource/roboto @mui/icons-material
yarn add @mui/styles
yarn add @mui/x-data-grid
yarn add prop-types
yarn add react-countup
```
Reference:
1. Mui: https://v4.mui.com/getting-started/installation/
2. react-countup: https://www.npmjs.com/package/react-countup
3. react-countup with next 13 issue fixed (@AndjelaRis): https://github.com/glennreyes/react-countup/issues/805

### Add devDependencies
```
yarn add --dev --exact prettier
yarn add -D eslint-config-prettier
echo {}> .prettierrc.json
touch .prettierignore
yarn add --dev @testing-library/react
```
Reference: https://prettier.io/docs/en/install.html

### Run
```
yarn dev
yarn next build
yarn next start
```

### Not used
```
git config --global user.email "angel870326@gmail.com"
git config --global user.name "angel870326"
yarn add styled-components
yarn add -D eslint-plugin-prettier
yarn add -D eslint-plugin-jest
```

---

## Final Project - Backend

### Backend Setup
#### 1. Install Homebrew
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
* Check if installed successfully:
  ```
  brew -v
  ```

#### 2. Install MySQL Server (8.0.33)
```
brew install mysql mycli
```
* Check MySQL version before installing: 
  ```
  brew info mysql
  ```

#### 3. Install MySQL Workbench (8.0.33)
https://dev.mysql.com/downloads/workbench/

#### 4. Install Java OpenJDK (17.0.7)
https://learn.microsoft.com/en-us/java/openjdk/download#openjdk-17

#### 5. Install Maven
```
brew install maven
```


### Create Database from CSV Files
#### In Terminal:
```
brew services start mysql
```
#### In MySQL Workbench:
* Step 0: Build Connection (local instance 3306 usually built)<br>
* Step 1: Edit Connection<br>
  Click on the Advanced tab and provide an extra line in the Others text input: ```OPT_LOCAL_INFILE=1```
  <img width="903" alt="mysql-connection" src="https://github.com/angel870326/NTU_Web_Application_Programming/assets/44830635/5df3cd8b-769c-4b9e-bd56-893664860530">
* Step 2: Create Database & Tables<br>
  [Execute SQL Commands](https://github.com/angel870326/NTU_Web_Application_Programming/blob/main/animal-cloud-adoption.sql)


### Account Setup (in animal-cloud-adoption)
#### 1. Open application.properties (in terminal)
```
open ./backend/src/main/resources/application.properties
```
#### 2. Fill in your host, port, db name, username, password for database
Modify
```
spring.datasource.url=jdbc:mysql://${db_host}:${db.port}/${db_db_name}
spring.datasource.username=${db_username}
spring.datasource.password=${db_password}
```
To
```
spring.datasource.url=jdbc:mysql://localhost:3306/animal-cloud-adoption-db
spring.datasource.username=root
```
#### 3. Fill in your port, username and password for database mail
Modify
```
spring.mail.port=${mail_port}
spring.mail.username=${mail_username}
spring.mail.password=${mail_password}
```
to
```
spring.mail.port=3306
spring.mail.username=xxxx@gmail.com
spring.mail.password=xxxx
```


**In Terminal:**





Reference:
1. Install MySQL for macOS: https://myapollo.com.tw/blog/install-mysql-using-homebrew/
2. Homebrew: https://brew.sh/
3. How to use MySQL: https://ithelp.ithome.com.tw/articles/10247808
4. Import csv file into MySQL: https://blog.n8n.io/import-csv-into-mysql/
5. Fix MySQL error 3948: https://blog.csdn.net/m0_52952956/article/details/125012666






