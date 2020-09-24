import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetch from '../actions';

const Search = () => {
    const { err, load } = useSelector(state => {
        return {
            load: state.isFetching,
            err: state.error
        }
    })

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetch());

    }
    if (err) {
        console.log(err);
    }
    if(load) {
        return <div>fetching the data</div>
    }

    return <button onClick={handleClick}>fetch cat data</button>

    
}
export default Search;