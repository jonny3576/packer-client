import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {HomeView} from './views/HomeView';
import {BiddingProcessView} from "./views/BiddingProcessView";
import {RoutesListView} from "./views/RoutesListView";
import {RegistrationView} from "./views/RegistrationView";
import {LoginView} from "./views/LoginView";
import {AuthService} from "./services/AuthService";
import {DeliveryMonitorView} from "./views/DeliveryMonitorView"
import {AsyncUserTypeRouting} from "./views/AsyncUserTypeRouting";
import {UserService} from "./services/UserService";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Packer',
            routes: [
                {component: HomeView, path: '/', exact: true},
                {
                    render: (props) => {
                        if (AuthService.isAuthenticated()) {
                            return (<BiddingProcessView {...props} />)
                        } else {
                            return (<Redirect to={'/login'}/>)
                        }
                    }, path: '/route/:id', exact: true
                },
                {
                    render: function (props) {
                        if (AuthService.isAuthenticated()) {
                            return (<AsyncUserTypeRouting {...props} component={RoutesListView} missingCheckbox="driver"
                                                           query={UserService.isUserADriver}/>)
                        } else {
                            return (<Redirect to={'/login'}/>)
                        }
                    }, path: '/beAdriver', exact: true
                },
                {
                    render: (props) => {
                        if (AuthService.isAuthenticated()) {
                            return (<DeliveryMonitorView{...props}/>)
                        } else {
                            return (<Redirect to={'/login'}/>)
                        }
                    }, path: '/deliverymonitor/:id', exact: true
                },
                {component: RegistrationView, path: '/register', exact: true},
                {component: LoginView, path: '/login', exact: true}

            ]
        };
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>))}
                    </Switch>
                </Router>
            </div>
        );
    }
}

