import React, { useState, useEffect } from 'react';
import ListNode from './ListNode.jsx';
import LinkedList from '../LinkedList.js';
import ControlBar from './ControlBar.jsx';

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);

function List() {
    const [list, setList] = useState([]);
    const [newNode, setNewNode] = useState('');
    const [animatingNodeId, setAnimatingNodeId] = useState(null);
    const [action, setAction] = useState(null); 

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
            const lastNode = linkedList.getLast();
            setAnimatingNodeId(lastNode.id);
            setAction('adding');
            setTimeout(() => {
                convertListToArray();
                setAnimatingNodeId(null); 
            }, 500); 
            setNewNode('');
        }
    };

    const handleRemove = () => {
        if (linkedList.size > 0) {
            const lastNode = linkedList.getLast();
            setAnimatingNodeId(lastNode.id);
            setAction('removing');
            setTimeout(() => {
                linkedList.pop();
                convertListToArray();
                setAnimatingNodeId(null);
            }, 500);
        }
    };

    const handleReverse = () => {
        setAction('reversing');
        setTimeout(() => {
            linkedList.reverse();
            convertListToArray();
            setAction(null);
        }, 500);  
    };

    return (
        <div className='listWrapper'>
            <div className='listArea'>
                <div className='linkedList'>
                    {list.map(({ node, index }) => {
                        const nextNode = node.next ? list.find(item => item.node === node.next) : null;
                        const nextIndex = nextNode ? nextNode.index : null;
                        const animationClass = action === 'reversing' ? 'reversing' : (node.id === animatingNodeId ? action : '');
                        return (
                            <ListNode
                                key={node.id}
                                value={node.data}
                                index={index}
                                next={nextIndex}
                                animationClass={animationClass}
                            />
                        );
                    })}
                </div>
            </div>
            <ControlBar
                newNode={newNode}
                setNewNode={setNewNode}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                handleReverse={handleReverse}
            />
        </div>
    );
}

export default List;
