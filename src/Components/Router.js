import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Header from "Components/Header";

export default () => (
    <Router>
      <>
      <Header />
      <Switch>
        <Route path="/"  exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/tv/popular"  render={() => <h1>popular</h1>} />
        <Route path="/search"  component={Search} />
        <Route path="/movie/:id" component={Detail} />  {/* props 객체의 match:prams에 키이름의 'id'에 해당하는 값이 잡힌다  /movie/:photo로 바꾸면 키이름도 photo로 바꿈*/}
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
      </>
    </Router>
)