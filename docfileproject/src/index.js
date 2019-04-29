import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import cors from 'cors';
// import express from 'express';

import StartPage from "./pages/startpage/startPage";

// var app = express()

// app.use(cors())
// app.get('/products/:id', function (req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for all origins!' })
// })

// app.listen(80, function () {
//     console.log('CORS-enabled web server listening on port 80')
// })

const CoreApp = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/home" component={StartPage} />
            <Redirect from="/" to="/home" />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<CoreApp />, document.getElementById("root"));
