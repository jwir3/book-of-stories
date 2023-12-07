import React from "react";
import { v4 as uuidv4 } from 'uuid';

import "./ShortStory.css";

export const ShortStory = (props) => {
    const id = uuidv4();
    const title = !props.title ? null : (<h1>{props.title}</h1>);
    const paragraphChildren = props.paragraphs.map((value, index) => {
        // Generate a random key for this
        const createdKey = `text-block-${id}-paragraph-${index}`
        return (<p key={createdKey}>{value}</p>)
    });
    return (
        <div className="short-story">
            {title}
            {paragraphChildren}
        </div>
    );
};
