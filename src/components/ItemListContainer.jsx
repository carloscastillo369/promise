import ItemList from './ItemList';

const ItemListContainer = (props) => (
    <div class="ItemListContainer bg-light">
        <h1 class="text-primary">{props.message}</h1>
        <ItemList items={props.items}/>
    </div>
);

export default ItemListContainer;