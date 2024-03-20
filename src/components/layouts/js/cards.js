import ShopCard from './shopCard';

export default function CardsView({ cards }) {
  return (
    <div className='cards_vew'>
      {cards.map((el, index) => (
        <div key={index}  className='card'>
          <ShopCard cardData = {el}/>
        </div>
      ))}
    </div>
  );
}
