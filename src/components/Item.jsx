import { useState } from "react";
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';

const Item = (props) => {
    const [stock, setStock] = useState(props.item.stock);

    const restarStock = (e,restar) => {
        e.preventDefault();
        if (stock > 0 && restar <= stock) {
            setStock((c)=>c-restar);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu compra ha sido realizada',
                showConfirmButton: false,
                timer: 2500
              });
        }
        else Swal.fire('No queda más en stock');
    };

    return (
        <>
            <li class="card bg-warning">
                <h5>{props.item.title}</h5>
                <img src={props.item.pictureUrl} width="150px"/>
                <h3>S/. {props.item.price}</h3>
                <h6>Stock: {stock}</h6>
                <ItemCount stock={stock} initial={1} onAdd={restarStock}/>
            </li>
        </>
    )
};

export default Item;