import React from 'react';

const ControlBox = ({ newNode, setNewNode, handleAdd, handleRemove, handleReverse }) => {
    return (
        <div className='controlBox'>
            <div className='inputSection'>
                <input
                    className='valueBox'
                    placeholder='Enter node value'
                    value={newNode}
                    onChange={(e) => setNewNode(e.target.value)}
                />
                <button className='addButton' onClick={handleAdd}>Add Node</button>
            </div>
            <div className='buttonSection'>
                <button className='removeButton' onClick={handleRemove}>Remove Node</button>
                <button className='reverseButton' onClick={handleReverse}>Reverse List</button>
            </div>
        </div>
    );
};

export default ControlBox;