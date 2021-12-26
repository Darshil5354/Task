## React-Redux Login and Fetching Data using Redux | React-Hooks ##

- JWT Authentication Flow for User Login, Register, Logout , Fetching Data
- Project Structure for React Redux JWT Authentication, Router, Axios
- Working with Redux Actions, Reducers, Store using redux-toolkit
- Creating React Function Components with Hooks & Form Validation
- React Function Components for accessing protected Resources (Authorization)
- Dynamic Navigation Bar in React App

## Libraries Used

   "@reduxjs/toolkit": "^1.6.1", // redux-thunk included in toolkit
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "antd": "^4.17.4",  // used for ViewDetails | AddPost components
    "axios": "^0.21.4", // used for fetching jsonplaceholder data
    "bootstrap": "^4.6.0", // designed for login|register|navbar components
    "formik": "^2.2.9", // used for building forms login|register
    "history": "^5.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.5",
    "react-router-dom": "^5.3.0", // used for routing
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1",
    "yup": "^0.32.9" // javascript schema builder
### Set port
.env
```
PORT=8081
```

### Note:
Open `src/services/auth-header.js` and modify `return` statement for appropriate back-end and don't forget it change the API_URL.

```js
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    return { 'x-access-token': user.accessToken };             // for Node.js Express back-end
  } else {
    return {};
  }
}
```

### Note:

I have given common access to the DataFetching Components addpost and viewpost as there is no backend attached and so it might not work properly

### Project setup

In the project directory, you can run:

```
npm install
# or
yarn install
```

or

### Compiles and hot-reloads for development

```
npm start
# or
yarn start
```

Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

The page will reload if you make edits.

### Note: 

I have used mixture of Bootstrap and Antd in login-dashboard-register page and for viewing details fetched from jsonplaceholder api, respectively.

