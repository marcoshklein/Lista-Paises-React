import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Paises from "./../components/Paises";
import PaisDetalhe from "./../components/PaisDetalhe";
import PaisEdicao from "../components/PaisEdicao";


const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Paises} />
    <Route path="/detalhe" component={PaisDetalhe} />
    <Route path="/edicao" component={PaisEdicao} />
  </Switch>
  </BrowserRouter>
);

export default Routes;