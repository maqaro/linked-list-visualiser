import Node from './Node.jsx'

function List(){
    return(
        <div className='controlBox'>
            <div className='inputSection'>
                <input className='valueBox' placeholder='Enter node value'></input>
                <button className='addButton'>Add Node</button> <br/>
            </div>
            <div className='buttonSection'>
                <button className='removeButton'>Remove Node</button>
                <button className='reverseButton'>Reverse List</button> 
            </div>

        </div>
    )
}

export default List