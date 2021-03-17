import Item from './Item';

const ItemList = (props) => (
  <>
    <ul>
      {props.items.map((item,index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  </>
);

export default ItemList;