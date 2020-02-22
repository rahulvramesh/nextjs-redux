import React from "react";
import {connect} from "react-redux";



const ProfileView = props => (
    <div>
            <div>Prop from Redux {props.foo}</div>
            <div>Prop from getInitialProps {props.custom}</div>
    </div>
);


ProfileView.getInitialProps = ({store, isServer, pathname, query}) => {
    store.dispatch({type: 'FOO', payload: 'foo'}); // The component can read from the store's state when rendered
    return {custom: 'custom'}; // You can pass some custom props to the component from here
}


export default connect(state => state)(ProfileView);