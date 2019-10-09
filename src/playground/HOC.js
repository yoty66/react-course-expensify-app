//HOC - A component that renders another component
//Reuse code
//Render Hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = ( props ) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info }</p>
    </div>
);

const withAdminWarning = (WrappedComponent)=> {

    return (props) => (
        <div>
            {props.isAdmin && <p>This is private  info . Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>

    )

};

const withAuthInfo = (WrappedComponent)=> {
    return (props) => (
        <div>
            {props.isAuth ?
                ( <WrappedComponent {...props}/> )
                :<p>not auth</p>
            }
        </div>
    )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthInfo(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="my info"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="my info"/>,document.getElementById('app'));