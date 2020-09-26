import React from 'react';

import { useSelector } from 'react-redux';
import Fact from './Fact';

const List = () => {
    const facts = useSelector(state => state.facts);
    console.log(facts)

    return (
        <div>
            {facts?.map(fact => <Fact key={fact._id} fact={fact} />)}
        </div>
    )
}
export default List;