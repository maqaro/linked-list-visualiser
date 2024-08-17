import React, { useState, useEffect } from 'react';
import ListNode from './ListNode.jsx';
import LinkedList from '../LinkedList.js';

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);

function List() {
    const [list, setList] = useState([]);
    const [newNode, setNewNode] = useState('');
    const [length, setLength] = useState(3);

    const convertListToArray = () => {
        const arr = [];
        let current = linkedList.head;
        let index = 0;
        while (current) {
            arr.push({ node: current, index });
            current = current.next;
            index++;
        }

        setList(arr);
    };

    useEffect(() => {
        convertListToArray();
    }, []);

    const handleAdd = () => {
        if (newNode) {
            linkedList.push(parseInt(newNode, 10));
            setNewNode('');
            convertListToArray();
        }
    };

    const handleRemove = () => {
        linkedList.pop();
        convertListToArray();
    };

    const handleReverse = () => {
        linkedList.reverse();
        convertListToArray();
    };

    return (
        <div className='listWrapper'>
            <div className='listArea'>
                <div className='linkedList'>
                    {list.map(({ node, index }) => (
                        <ListNode
                            key={index}
                            value={node.data}
                            index={index}
                            next={node.next ? list.find(item => item.node === node.next).index : null}
                        />
                    ))}
                </div>
            </div>
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
        </div>
    );
}

export default List;