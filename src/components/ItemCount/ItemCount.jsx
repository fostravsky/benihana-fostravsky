import {useState} from 'react';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1);

    const add = () => count < stock && setCount(count + 1)

    const substract = () => count > 1 && setCount(count - 1)
    
    return (
        <div className='m-3'>
            <button className='btn btn-light m-2' onClick={() => substract()}>-</button>
                {count}
            <button className='btn btn-light m-2' onClick={() => add()}>+</button>
            <button className='btn btn-primary m-2'><i className="fa-solid fa-cart-plus"></i></button>
        </div>
    );
}

export default ItemCount;