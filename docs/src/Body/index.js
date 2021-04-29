import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Theme from '../Components/Theme';
import Text from '../Components/Text';
import Layout from '../Components/Layout';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Loader from '../Components/Loader';
import Icons from '../Components/Icons';
import FlatList from '../Components/FlatList';
import Header from '../Components/Header';
import BottomNavBar from '../Components/BottomNavBar';
import {MDXProvider} from '@mdx-js/tag';
import CodeBlock from "./CodeBlock";

const components = {
    h1: props => (
        <h1 style={{fontSize: '3rem', marginBottom: '20px'}} {...props} />
    ),
    pre: props => <div style={{fontSize: '16px'}} {...props} />,
    code: props => <CodeBlock {...props} />,
    p: props => <p style={{marginBottom: '20px'}} {...props} />,
    span: props => <span style={{fontSize: '14px'}} {...props} />,
}

function Body() {
    return (
        <MDXProvider components={components}>
            <Switch>
                <Route path="/theme">
                    <Theme />
                </Route>
                <Route path="/text">
                    <Text />
                </Route>
                <Route path="/layout">
                    <Layout />
                </Route>
                <Route path="/button">
                    <Button />
                </Route>
                <Route path="/input">
                    <Input />
                </Route>
                <Route path="/loader">
                    <Loader />
                </Route>
                <Route path="/icons">
                    <Icons />
                </Route>
                <Route path="/flatlist">
                    <FlatList />
                </Route>
                <Route path="/header">
                    <Header />
                </Route>
                <Route path="/bottomnavbar">
                    <BottomNavBar />
                </Route>
            </Switch>
        </MDXProvider>
    );
}

export default Body;
