import React, {useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

import './CompletelyBlueViewport.scss';

export const CompletelyBlueViewport = (props) => {
    const id = uuidv4();

    const userAgent = window.navigator.userAgent;
    return (
        <div id={id} className="wholeViewport">
            {userAgent}
        </div>
    );
}
