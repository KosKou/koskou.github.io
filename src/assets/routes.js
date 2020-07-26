import React from "react";
import Home from "../views/Landing/Home";

//Landing
// const Home = React.lazy(() => import('../views/Landing/Home'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', name: 'Home', component: Home, exact: true, roles: ["USER","ADMIN"] }
];

export default routes;