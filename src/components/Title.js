import React from 'react';

export const Title = (props) => {
    console.log(props);
    return (
        <h2>{props.greeting}</h2>
    );
}

export default Title;