import React from 'react';

import "./TextBlock.css";

export const TextBlock = (props) => {
    const id = 'blah';
    const title = !props.title ? null : (<h1>{props.title}</h1>);
    const paragraphChildren = props.paragraphs.map((value, index) => {
        // Generate a random key for this
        const createdKey = `text-block-${id}-paragraph-${index}`
        return (<p key={createdKey}>{value}</p>)
    });
    return (
        <div className="text-block">
            {title}
            {paragraphChildren}
        </div>
    );
}
