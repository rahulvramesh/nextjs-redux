import React from "react";
import {connect} from "react-redux";

import Layout from "../components/Layout";


const ProfileView = props => (
    <div>
        <Layout>
            <div>Prop from Redux {props.foo}</div>
            <div>Prop from getInitialProps {props.custom}</div>
        </Layout>
    </div>
);


ProfileView.getInitialProps = ({store, isServer, pathname, query}) => {
    store.dispatch({type: 'FOO', payload: 'foo'}); // The component can read from the store's state when rendered
    return {custom: 'custom'}; // You can pass some custom props to the component from here
}


export default connect(state => state)(ProfileView);