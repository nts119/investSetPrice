
App = {
    web3Provider: null,
    contracts: {
      BscTopInvest2: null
    },
    currentAddress: '',
    contractAddress: '0xc03e5ED1e8d2B0f8Ae700ebbdd85C01c16aB0De0',
    contractAbi: [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "topLayer",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "bottomLayer",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "withdrawRate",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "reInvestRate",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "power",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "requireIntroNum",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          }
        ],
        "name": "AddProductLog",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "intro",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "netTop",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          }
        ],
        "name": "AddUserLog",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "cycle",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          }
        ],
        "name": "BurnAndMintLog",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          }
        ],
        "name": "DeleteProductLog",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "grantId",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          }
        ],
        "name": "GrantRewardLog",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "usdtAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "power",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "pay",
            "type": "bool"
          }
        ],
        "name": "InvestLog",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "USDT",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_topLayer",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_bottomLayer",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_withdrawRate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_power",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_requireIntroNum",
            "type": "uint256"
          }
        ],
        "name": "addProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "burnAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_cycle",
            "type": "uint256"
          }
        ],
        "name": "burnAndMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "couponAmount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
          }
        ],
        "name": "deleteProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAllProductStruct",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "topLayer",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bottomLayer",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "withdrawRate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "reInvestRate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "power",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "requireIntroNum",
                "type": "uint256"
              }
            ],
            "internalType": "struct BscTopInvest2.Product[]",
            "name": "productArr",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "getETH",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "getIsInvested",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
          }
        ],
        "name": "getProduct",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "topLayer",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bottomLayer",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "withdrawRate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "reInvestRate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "power",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "requireIntroNum",
                "type": "uint256"
              }
            ],
            "internalType": "struct BscTopInvest2.Product",
            "name": "product",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "getSwapUsdtToToken",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "getToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "getUserInfo",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "intro",
                "type": "address"
              },
              {
                "internalType": "address[]",
                "name": "children",
                "type": "address[]"
              },
              {
                "internalType": "uint256",
                "name": "highProductId",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "netTop",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "netBottom",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "chainIndex",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "isExist",
                "type": "bool"
              }
            ],
            "internalType": "struct BscTopInvest2.User",
            "name": "user",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_grantId",
            "type": "string"
          }
        ],
        "name": "grantReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_intro",
            "type": "address"
          }
        ],
        "name": "invest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_intro",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_userAmount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "investNode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "ntsPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "placementAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "poolTotalAmount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "receiveAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "rewardsToken",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "rootAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "routerPath",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_burnAddress",
            "type": "address"
          }
        ],
        "name": "setBurnAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_couponAmount",
            "type": "uint256"
          }
        ],
        "name": "setCouponAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_price",
            "type": "uint256"
          }
        ],
        "name": "setNtsPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_operateAddress",
            "type": "address"
          }
        ],
        "name": "setOperateAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_receiveAddress",
            "type": "address"
          }
        ],
        "name": "setReceiveAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_rewardsToken",
            "type": "address"
          }
        ],
        "name": "setRewardsToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_routerPath",
            "type": "address"
          }
        ],
        "name": "setRouterPath",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_usdt",
            "type": "address"
          }
        ],
        "name": "setUsdt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bool",
            "name": "_userPancakePrice",
            "type": "bool"
          }
        ],
        "name": "setUserPancakePrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    initWeb3: async function () {
      if (window.ethereum) {
        App.web3Provider = window.ethereum
        web3 = new Web3(App.web3Provider);
        try {
          // await App.changeNetwork()
          await ethereum.enable()
        } catch (error) {
        }
      } else {
        if (window.web3) {
          App.web3Provider = web3.currentProvider
          web3 = new Web3(App.web3Provider);
        } else {
          App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
          web3 = new Web3(App.web3Provider);
        }
      }
      web3.eth.getAccounts((err, accounts) => {
        if (err) {
          return
        }
        App.currentAddress = accounts[0]
        return App.initContract();
      });
    },
    initContract: function () {
      App.contracts.BscTopInvest2 = new web3.eth.Contract(App.contractAbi, App.contractAddress);
      return App.bindEvents();
    },
    bindEvents: function () {
      $(document).on('change', '#select', App.selectFunction);
    },
    selectFunction: function () {
      let index = $('#select').val()
      let functionAbi = App.contractAbi[index]
      $('#' +functionAbi.name + 'Box').show().siblings().hide()

    },
    addProduct:async function (){
            let _productId = $('#_productId').val()
      let _amount = $('#_amount').val()
      let _topLayer = $('#_topLayer').val()
      let _bottomLayer = $('#_bottomLayer').val()
      let _withdrawRate = $('#_withdrawRate').val()
      let _power = $('#_power').val()
      let _requireIntroNum = $('#_requireIntroNum').val()
      
            let data = await App.contracts.BscTopInvest2.methods.addProduct(_productId,_amount,_topLayer,_bottomLayer,_withdrawRate,_power,_requireIntroNum).send({from:App.currentAddress})
          },
          burnAndMint:async function (){
            let _amount = $('#_amount').val()
      let _cycle = $('#_cycle').val()
      
            let data = await App.contracts.BscTopInvest2.methods.burnAndMint(_amount,_cycle).send({from:App.currentAddress})
          },
          deleteProduct:async function (){
            let _productId = $('#_productId').val()
      
            let data = await App.contracts.BscTopInvest2.methods.deleteProduct(_productId).send({from:App.currentAddress})
          },
          getETH:async function (){
            let _amount = $('#_amount').val()
      
            let data = await App.contracts.BscTopInvest2.methods.getETH(_amount).send({from:App.currentAddress})
          },
          getToken:async function (){
            let _token = $('#_token').val()
      let _amount = $('#_amount').val()
      
            let data = await App.contracts.BscTopInvest2.methods.getToken(_token,_amount).send({from:App.currentAddress})
          },
          grantReward:async function (){
            let _user = $('#_user').val()
      let _amount = $('#_amount').val()
      let _grantId = $('#_grantId').val()
      
            let data = await App.contracts.BscTopInvest2.methods.grantReward(_user,_amount,_grantId).send({from:App.currentAddress})
          },
          initialize:async function (){
            
            let data = await App.contracts.BscTopInvest2.methods.initialize().send({from:App.currentAddress})
          },
          invest:async function (){
            let _productId = $('#_productId').val()
      let _intro = $('#_intro').val()
      
            let data = await App.contracts.BscTopInvest2.methods.invest(_productId,_intro).send({from:App.currentAddress})
          },
          investNode:async function (){
            let _productId = $('#_productId').val()
      let _intro = $('#_intro').val()
      let _userAmount = $('#_userAmount').val()
      let signature = $('#signature').val()
      
            let data = await App.contracts.BscTopInvest2.methods.investNode(_productId,_intro,_userAmount,signature).send({from:App.currentAddress})
          },
          renounceOwnership:async function (){
            
            let data = await App.contracts.BscTopInvest2.methods.renounceOwnership().send({from:App.currentAddress})
          },
          setBurnAddress:async function (){
            let _burnAddress = $('#_burnAddress').val()
      
            let data = await App.contracts.BscTopInvest2.methods.setBurnAddress(_burnAddress).send({from:App.currentAddress})
          },
          setNtsPrice:async function (){
            let _price = $('#_price').val()
      
            let data = await App.contracts.BscTopInvest2.methods.setNtsPrice(_price).send({from:App.currentAddress})
          },
          setOperateAddress:async function (){
            let _operateAddress = $('#_operateAddress').val()
      
            let data = await App.contracts.BscTopInvest2.methods.setOperateAddress(_operateAddress).send({from:App.currentAddress})
          },
          setReceiveAddress:async function (){
            let _receiveAddress = $('#_receiveAddress').val()
      
            let data = await App.contracts.BscTopInvest2.methods.setReceiveAddress(_receiveAddress).send({from:App.currentAddress})
          },
          setRewardsToken:async function (){
            let _rewardsToken = $('#_rewardsToken').val()
      
            let data = await App.contracts.BscTopInvest2.methods.setRewardsToken(_rewardsToken).send({from:App.currentAddress})
          },
          setRouterPath:async function (){
            let _routerPath = $('#_routerPath').val()
      
            let data = await App.contracts.BscTopInvest2.methods.setRouterPath(_routerPath).send({from:App.currentAddress})
          },
          setCouponAmount:async function (){
            let _usdt = $('#_disprice').val()
            let amount = new BigNumber(_usdt).multipliedBy(10 ** 18).toFixed()
            console.log(amount)
            let data = await App.contracts.BscTopInvest2.methods.setCouponAmount(amount).send({from:App.currentAddress})
          },
          setUserPancakePrice:async function (){
            let _userPancakePrice = $('#_userPancakePrice').val()
      
            let data = await App.contracts.BscTopInvest2.methods.setUserPancakePrice(_userPancakePrice).send({from:App.currentAddress})
          },
          transferOwnership:async function (){
            let newOwner = $('#newOwner').val()
      
            let data = await App.contracts.BscTopInvest2.methods.transferOwnership(newOwner).send({from:App.currentAddress})
          },
          
  };
  
  (function () {
     App.initWeb3();
  })();
  
  
