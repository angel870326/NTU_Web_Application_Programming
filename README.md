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

## Final Project
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

### Backend
1. Install Homebrew
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Check if installed successfully:
```
brew -v
```

2. Install MySQL (8.0.33)
```
brew install mysql mycli
```
Check MySQL version before installing: 
```
brew info mysql
```



Reference:
1. Install MySQL for macOS: https://myapollo.com.tw/blog/install-mysql-using-homebrew/
2. Homebrew: https://brew.sh/





