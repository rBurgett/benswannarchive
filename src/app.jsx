import React from 'react';

const App = ({ children }) => {
    return (
        <div className="container-fluid">
            <h1>Hi!</h1>
            {children}
        </div>
    );
};
App.propTypes = {
    children: React.PropTypes.element
};

export default App;
