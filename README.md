# 📱RN - SWAPI📱

`rn-swapi` is a mobile app that allows you to browse star wars movies from Star Wars API.

This app uses SWAPI. Check out its documentation for more details:
[LINK TO SWAPI DOCUMENTATION](https://swapi.dev/documentation)

## ⚡Technologies⚡

- **React Native** (for creating mobile app)
- **TypeScript**: (for static typing and better code readability)
- **Axios**: (for sending requests)
- **Expo Router**: (for routing)
- **Async Storage**: (for storing data locally)
- **React Native Stars**: (to allow user to rate movie using Stars component)

## 💎Features💎 

- **Browsing Star Wars movies**: App allows you to browse Star Wars movies from SWAPI. 
  It also has search bar so you can search for movie you want.
- **Movie information**: Each movie has its subpage where you can see opening crawl from it.
- **Watch later list**: You can save movies to the "Watch later list" so you can see what movies you saved.
- **Star rating**: You can rate each movie using Stars component. 
  !!! DISCLAIMER !!! once you rated movie you cannot delete its rating (I did it intentionally) but you can 
  change its rating for lower or higher

## 🔗Installation🔗

To install app locally on your PC do these steps:

1. Clone repository:
    ```bash
    git clone https://github.com/Pabl01802/rn-swapi.git
    ```
2. Go to project folder:
    ```bash
    cd rn-swapi
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Launch app using expo:
    ```bash
    npx expo start
    ```

## 📄Project structure📄

- **/app**: Main folder with app pages and layout
- **/components**: Reusable UI components
  - **/common**: Reusable UI components that are commonly used (e.g. Loading component)
- **/interfaces**: There you can look for interfaces I created
- **/hooks**: My custom hooks
- **/utils**: Utility file where URL and colors are stored

## If you have any suggestions on what I can change, add or remove just contact me via email: kacper.pawlak25@gmail.com📧
### Thanks for reading and enjoy my app. Cheers! :)🎉 
