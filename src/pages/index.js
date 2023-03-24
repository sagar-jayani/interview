import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Layout from "../components/Layout_Com";
import Home from "./Home";
import BASE_URL from "../_constant/index";


export default function index({ socket }) {
    return (
        <>
            <Layout>
                <Switch>
                    <Route exact path={BASE_URL.BASE_URL}>
                        <Home />
                    </Route>
                </Switch>
            </Layout>
        </>
    );
}
