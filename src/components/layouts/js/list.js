import ShopItem from './shopItem';

export default function ListView({ items }) {
  return (
    <div className='list_vew'>
      {items.map((el, index) => (
        <div key={index}  className='item'>
          <ShopItem itemData = {el}/>
        </div>
      ))}
    </div>
  );
}
