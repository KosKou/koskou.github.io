import React from "react";
import Home from "../views/Landing/Home";
import ASK1 from "../views/FAQ/MONTH1/ASK1";

//Landing
// const Home = React.lazy(() => import('../views/Landing/Home'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', name: 'Home', component: Home, exact: true, roles: ["USER","ADMIN"] },
    { path: '/ask', name: 'ASK', component: ASK1, exact: true, roles: ["USER","ADMIN"] },
];

export default routes;
