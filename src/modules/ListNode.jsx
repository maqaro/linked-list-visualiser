import React from 'react';

function ListNode({ value, index, next }) {

    return (
        <div className='node'>
            <span className='nodeValue'>{value}</span>
            <p className='nodeIndex'>{`Index: ${index}`}</p>
            <p className='nodeNext'>{`Next: ${next == null ? 'null' : next}`}</p>
        </div>
    );
}

export default ListNode;