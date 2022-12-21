import React, { useContext } from "react";
import EnvironmentContext from "contexts/environmentContext";

// eslint-disable-next-line no-unused-vars
const Index = props => {
    const { environment } = useContext(EnvironmentContext);

    return (
        <>
            <h1>Welcome to Cloudflare React Application</h1>
            <p>
                <small>PLATFORM</small>: <strong>{environment.PLATFORM}</strong>
            </p>
        </>
    );
};

export default Index;
