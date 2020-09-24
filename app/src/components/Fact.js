import React from 'react';

const Fact = () => ({fact}) => {
    const {text, upvotes} = fact;
    return (
        <div>
            <h2>{text}</h2>
            <h2>{`upvotes: ${upvotes}`}</h2>
        </div>
    )
}
export default Fact;