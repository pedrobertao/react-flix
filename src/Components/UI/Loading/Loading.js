import React from 'react';

import './Loading.css';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';

const loader = (props) => {
    return (
        <Container>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </Container>
    )
}

export default loader;