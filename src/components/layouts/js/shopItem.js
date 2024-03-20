export default function ShopItem({ itemData }) {
    return (
      <>
        <div className='img_container_item'>
          <img className='img' src={ itemData.img } alt={ itemData.name }/>
        </div>
        <div className='name_item'>{ itemData.name }</div>
        <div className='color_item'>{ itemData.color }</div>
        <div className='price_item'>${ itemData.price }</div>
        <div>
          <button className='add_item'>ADD TO CART</button>
        </div>
        
      </>
    );
  }
  