import {useState, useEffect} from 'react';

function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]); //기본값이 없으면 coins이 undefiend가 됨
    useEffect(() => {
      fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        console.log(json)

      });
    }, []);
    

  return (
      <div>
        <h1>The Coins! {loading?"":`(${coins.length})`}</h1>
          {loading ? (<strong>Loading..</strong>) : 
          (<select>
            {coins.map((item) => <option key={item.id}>{item.name} ({item.symbol}) : ${item.quotes.USD.price}</option>) }
          </select>)}
          {/* 챌린지 : input으로 내가 코인 환산하기 */}
      </div>
  );
}

export default Coin;
