/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from '../App';
import Page from '../components/Page';
import BasicForm from '../components/forms/BasicForm';
import BasicTable from '../components/tables/BasicTables';
import AdvancedTable from '../components/tables/AdvancedTables';
import AsynchronousTable from '../components/tables/AsynchronousTable';
import Login from '../components/pages/Login';
import Echarts from '../components/charts/Echarts';
import Recharts from '../components/charts/Recharts';
import Dashboard from '../components/dashboard/Dashboard';
import NotFound from '../components/pages/NotFound';
import AuthBasic from '../components/auth/Basic';
import RouterEnter from '../components/auth/RouterEnter';
import KpiTable from '../components/tables/KpiTable';
export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { store } = this.props;
        const { auth } = store.getState().httpData;
        if (!auth || !auth.data.permissions.includes(permission)) hashHistory.replace('/404');
        return component;
    };
    render() {
        return (
            <Router history={hashHistory}>
                <Route path={'/'} components={Page}>
                    <IndexRedirect to="/app/dashboard/index" />
                    <Route path={'app'} component={App}>
                        <Route path={'form'}>
                            <Route path={'basicForm'} component={BasicForm} />
                        </Route>
                        <Route path={'table'}>
                            <Route path={'kpiTable'} component={KpiTable} />
                            <Route path={'basicTable'} component={BasicTable} />
                            <Route path={'advancedTable'} components={AdvancedTable} />
                            <Route path={'asynchronousTable'} components={AsynchronousTable} />
                        </Route>
                        <Route path={'chart'}>
                            <Route path={'echarts'} component={Echarts} />
                            <Route path={'recharts'} component={Recharts} />
                        </Route>
                        <Route path={'dashboard/index'} component={Dashboard} />
                        <Route path="auth">
                            <Route path="basic" component={AuthBasic} />
                            <Route path="routerEnter" component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)} />
                        </Route>
                    </Route>
                    <Route path={'login'} components={Login} />
                    <Route path={'404'} component={NotFound} />
                </Route>
            </Router>
        )
    }
}