const axios = require('axios');

async function getAllCoinsBinance(){
    try {
        const response = await axios.get('https://api.binance.com/api/v3/ticker/price');
        const data = response.data;
        return data;
      } catch (error) {
        console.error(`Error: ${error}`);
      }
}

async function getAllCoinsCryptocom(){
    try {
        const response = await axios.get('https://api.crypto.com/v2/public/get-ticker');
        const data = response.data.result.data;
        return data;
      } catch (error) {
        console.error(`Error: ${error}`);
      }
}

function getPercentageDifference(data) {

    const { binancePrice, cryptoComPrice, coin} = data

    if (binancePrice === null || cryptoComPrice === null) {
        return null;
    }
    let calc = Math.abs(binancePrice - cryptoComPrice);
    let average = (binancePrice + cryptoComPrice) / 2;

    let difference = (calc / average) * 100;

    return {
        coin,
        difference,
        highest: {
                platform:binancePrice > cryptoComPrice ? 'Binance' : 'Crypto.com',
                price: binancePrice > cryptoComPrice ? binancePrice : cryptoComPrice
            },
        lowest: {
                platform: binancePrice < cryptoComPrice ? 'Binance' : 'Crypto.com',
                price: binancePrice < cryptoComPrice ? binancePrice : cryptoComPrice
            },
    };
}

async function main(){
    const [binanceCoins, cryptoComCoins] = await Promise.all([getAllCoinsBinance(), getAllCoinsCryptocom()])

    const mergeCoins = []

    const transformed = binanceCoins.reduce((obj, item) => {
        obj[item.symbol] = { symbol: item.symbol, price: item.price };
        return obj;
      }, {});


    for (let coin of cryptoComCoins){
        let nameCoin = null;
        if (coin.i.includes('_')){
            nameCoin = coin.i.replace("_","")
        } else if (coin.i.includes('-')){
            nameCoin = coin.i.replace("/", "")
        } else {
            nameCoin = coin.i
        }
        
        const biananceCoin = transformed[nameCoin]
        if (biananceCoin){

            if (parseFloat(biananceCoin.price) === parseFloat(coin.a)){
                continue;
            } else {
                
                const data = {
                    binancePrice: parseFloat(biananceCoin.price),
                    cryptoComPrice: parseFloat(coin.a),
                    coin: nameCoin
                }
                const diff = await getPercentageDifference(data);
                mergeCoins.push(diff)
            }
        }
    }

    mergeCoins.sort((a, b) => b.difference - a.difference);

    for (let info of mergeCoins){
        console.log(`El activo digital ${info.coin} tiene una diferencia del ${info.difference}%. El precio más alto está en ${info.highest.platform} con ${info.highest.price} y el más bajo en ${info.lowest.platform} con ${info.lowest.price}.`);
    }
}

main()