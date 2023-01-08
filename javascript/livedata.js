// for famous crypto section
var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var bnb=document.getElementById("binancecoin");
var sol=document.getElementById("solana");
var btc_cap=document.getElementById("bitcoinMarketCap");
var eth_cap=document.getElementById("ethereumMarketCap");
var bnb_cap=document.getElementById("binanceMarketCap");
var sol_cap=document.getElementById("solanaMarketCap");

// for Market update
      //  Coins
var btc1=document.getElementById("bitcoin1");
var eth1=document.getElementById("ethereum1");
var bnb1=document.getElementById("binancecoin1");
var sol1=document.getElementById("solana1");
var teth1=document.getElementById("tether1");
var xrp1=document.getElementById("xrp1");
var card1=document.getElementById("cardano1");
var pol1=document.getElementById("polkadot1")
var dog1=document.getElementById("dogecoin1");
var lite1=document.getElementById("litecoin1");
var stellar1=document.getElementById("stellar1");
var chain1=document.getElementById("chainlink1");
 
       // for market cap 
 var btc2=document.getElementById("bitcoinMarketCap1");
var eth2=document.getElementById("ethereumMarketCap1");
var bnb2=document.getElementById("binancecoinMarketCap1");
var sol2=document.getElementById("solanaMarketCap1");
var teth2=document.getElementById("tetherMarketCap1");
var xrp2=document.getElementById("xrpMarketCap1");
var card2=document.getElementById("cardanoMarketCap1");
var pol2=document.getElementById("polkadotMarketCap1")
var dog2=document.getElementById("dogecoinMarketCap1");
var lite2=document.getElementById("litecoinMarketCap1");
var stellar2=document.getElementById("stellarMarketCap1");
var chain2=document.getElementById("chainlinkMarketCap1");

     // NFT coins
        // for price
var flow1=document.getElementById("flow1");
var ape1=document.getElementById("apecoin1");
var dec1=document.getElementById("decentraland1");
var enjin1=document.getElementById("enjin1");
var chiliz1=document.getElementById("chiliz1");
var azuki1=document.getElementById("azuki1");
var edda1=document.getElementById("edda1");
var play1=document.getElementById("playdapp1")
var opu1=document.getElementById("opulous1");
var nftx1=document.getElementById("nftx1");
var dino1=document.getElementById("dino1");
var nftrade1=document.getElementById("nftrade1");

     // for market Cap
     var flow2=document.getElementById("flowMarketCap1");
     var ape2=document.getElementById("apecoinMarketCap1");
     var dec2=document.getElementById("decentralandMarketCap1");
     var enjin2=document.getElementById("enjinMarketCap1");
     var chiliz2=document.getElementById("chilizMarketCap1");
     var azuki2=document.getElementById("azukiMarketCap1");
     var edda2=document.getElementById("eddaMarketCap1");
     var play2=document.getElementById("playdappMarketCap1")
     var opu2=document.getElementById("opulousMarketCap1");
     var nftx2=document.getElementById("nftxMarketCap1");
     var dino2=document.getElementById("dinoMarketCap1");
     var nftrade2=document.getElementById("nftradeMarketCap1");

var liveprice = {
    "async":true,
     "scroosDomain":true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Csolana%2Cripple%2Ccardano%2Cpolkadot%2Cdogecoin%2Clitecoin%2Cstellar%2Cchainlink%2Capecoin%2Cflow%2Cdecentraland%2Cenjincoin%2Cchiliz%2Cazuki%2Ceddaswap%2Cplaydapp%2Copulous%2Cnftx%2Cdinoegg%2Cnftrade&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&precision=4 ",
    
    "method" : "GET",
    "headers": {}
    
    }
$.ajax(liveprice).done(function (response) {
     console.log(response);
        // for famous crypto section
         btc.innerHTML=response.bitcoin.usd;
         eth.innerHTML=response.ethereum.usd;
         bnb.innerHTML=response.binancecoin.usd;
         sol.innerHTML=response.solana.usd;

         btc_cap.innerHTML=response.bitcoin.usd_market_cap;
         eth_cap.innerHTML=response.ethereum.usd_market_cap;
         bnb_cap.innerHTML=response.binancecoin.usd_market_cap;
         sol_cap.innerHTML=response.solana.usd_market_cap;

         // for market update
              //Coins
                 // for price 
         btc1.innerHTML=response.bitcoin.usd;
         eth1.innerHTML=response.ethereum.usd;
         bnb1.innerHTML=response.binancecoin.usd;
         sol1.innerHTML=response.solana.usd;
         teth1.innerHTML=response.tether.usd;
         xrp1.innerHTML=response.ripple.usd;
         card1.innerHTML=response.cardano.usd;
         pol1.innerHTML=response.polkadot.usd;
         dog1.innerHTML=response.dogecoin.usd;
         lite1.innerHTML=response.litecoin.usd;
         chain1.innerHTML=response.chainlink.usd;
         stellar1.innerHTML=response.stellar.usd;
              
              // for market cap
              btc2.innerHTML=response.bitcoin.usd_market_cap;
              eth2.innerHTML=response.ethereum.usd_market_cap;
              bnb2.innerHTML=response.binancecoin.usd_market_cap;
              sol2.innerHTML=response.solana.usd_market_cap;
              teth2.innerHTML=response.tether.usd_market_cap;
              xrp2.innerHTML=response.ripple.usd_market_cap;
              card2.innerHTML=response.cardano.usd_market_cap;
              pol2.innerHTML=response.polkadot.usd_market_cap;
              dog2.innerHTML=response.dogecoin.usd_market_cap;
              lite2.innerHTML=response.litecoin.usd_market_cap;
              chain2.innerHTML=response.chainlink.usd_market_cap;
              stellar2.innerHTML=response.stellar.usd_market_cap;

             // NFT Coins
                // for price
         
         ape1.innerHTML=response.apecoin.usd;
         flow1.innerHTML=response.flow.usd;
         dec1.innerHTML=response.decentraland.usd;
         enjin1.innerHTML=response.enjincoin.usd;
         chiliz1.innerHTML=response.chiliz.usd;
         azuki1.innerHTML=response.azuki.usd;
         edda1.innerHTML=response.eddaswap.usd;
         play1.innerHTML=response.playdapp.usd;opu1.innerHTML=response.opulous.usd;
         nftx1.innerHTML=response.nftx.usd;
         dino1.innerHTML=response.dinoegg.usd;
         nftrade1.innerHTML=response.nftrade.usd;
         
         // for market Cap

         ape2.innerHTML=response.apecoin.usd_market_cap;
         flow2.innerHTML=response.flow.usd_market_cap;
         dec2.innerHTML=response.decentraland.usd_market_cap;
         enjin2.innerHTML=response.enjincoin.usd_market_cap;
         chiliz2.innerHTML=response.chiliz.usd_market_cap;
         azuki2.innerHTML=response.azuki.usd_market_cap;
         edda2.innerHTML=response.eddaswap.usd_market_cap;
         play2.innerHTML=response.playdapp.usd_market_cap;
         opu2.innerHTML=response.opulous.usd_market_cap;
         nftx2.innerHTML=response.nftx.usd_market_cap;
         dino2.innerHTML=response.dinoegg.usd_market_cap;
         nftrade2.innerHTML=response.nftrade.usd_market_cap;



    });
