import React, {useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

import './ChapterWithGraphic.scss';

const addBackgroundImageToDivWithId = (imageSrc, id) => {
    let element = document.getElementById(`${id}`);
    console.log(`Adding ${imageSrc} as background image for element with id: ${id}`);
    element.style.backgroundImage = `url(${imageSrc})`;
};

export const ChapterWithGraphic = (props) => {
    const id = uuidv4();

    useEffect(() => addBackgroundImageToDivWithId(props.image, id), [])

    const paragraphChildren = props.paragraphs.map((value, index) => {
        // Generate a random key for this
        const createdKey = `text-block-${id}-paragraph-${index}`
        return (<p key={createdKey}>{value}</p>)
    });

    return (
        <div className="chapter">
            <div id={id} className="chapter-header">
                <h1>{props.number}: {props.title}</h1>
            </div>
            {paragraphChildren}
        </div>
    );
}
