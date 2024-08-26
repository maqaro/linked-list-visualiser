import React, { useState, useEffect } from 'react';
import ListNode from './ListNode.jsx';
import LinkedList from '../LinkedList.js';
import ControlBar from './ControlBar.jsx';

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);

function List() {
    const [list, setList] = useState([]);
    const [newNode, setNewNode] = useState('');
    const [animationClass, setAnimationClass] = useState('');

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
            setAnimationClass('adding');
            setTimeout(() => {
                convertListToArray();
                setAnimationClass('');
            }, 500);
        }
    };

    const handleRemove = () => {
        setAnimationClass('removing');
        setTimeout(() => {
            linkedList.pop();
            convertListToArray();
            setAnimationClass('');
        }, 500); 
    };

    const handleReverse = () => {
        setAnimationClass('reversing');
        setTimeout(() => {
            linkedList.reverse();
            convertListToArray();
            setAnimationClass('');
        }, 500);  
    };

    return (
        <div className='listWrapper'>
            <div className='listArea'>
                <div className='linkedList'>
                    {list.map(({ node, index }) => {
                        const nextNode = node.next ? list.find(item => item.node === node.next) : null;
                        const nextIndex = nextNode ? nextNode.index : null;
                        return (
                            <ListNode
                                key={index}
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
