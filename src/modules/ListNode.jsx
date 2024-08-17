import React from 'react';

function ListNode({ value, index, next }) {
    return (
        <div className='nodeWrapper'>
            <div className='node'>
                <span className='nodeValue'>{value}</span>
                <p className='nodeIndex'>{`Index: ${index}`}</p>
                <p className='nodeNext'>{`Next: ${next == null ? 'null' : next}`}</p>
            </div>
            {next !== null && <div className='arrow'>→</div>}
        </div>
    );
}

export default ListNode;