export default function ShopCard({ cardData }) {
    return (
      <>
        <div className='name'>{ cardData.name }</div>
        <div className='color'>{ cardData.color }</div>
        <div className='img_container'>
          <img className='img' src={ cardData.img } alt={ cardData.name }/>
        </div>
        <div className='footer'>
          <div className='price'>${ cardData.price }</div>
          <button className='add'>ADD TO CART</button>
        </div>
      </>
    );
  }
  