import React, { useContext } from "react";
import EnvironmentContext from "contexts/environmentContext";

// eslint-disable-next-line no-unused-vars
const Index = props => {
    const { env } = useContext(EnvironmentContext);

    return (
        <>
            <h1>ciao</h1>
            <p>
                <small>PLATFORM</small>: <strong>{env.PLATFORM}</strong>
            </p>
        </>
    );
};

export default Index;
