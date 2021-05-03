const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1619937967771,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1619938019333,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1619938078449,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "12c6c6b0ab1211eb8ad8c971b64f2374",
    "transactionID": "31a8f710ab1211eb8ad8c971b64f2374"
    },
    {
    "amount": 20,
    "sender": "sdfsdf",
    "recipient": "ppopok",
    "transactionID": "4f685250ab1211eb8ad8c971b64f2374"
    },
    {
    "amount": 30,
    "sender": "sdfsdf",
    "recipient": "ppopok",
    "transactionID": "50a195a0ab1211eb8ad8c971b64f2374"
    }
    ],
    "nonce": 63399,
    "hash": "000033e00a51c0f3822b20bfcc351cc903aa1a5c8023dcf4c89a5a8b5484d72c",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    "index": 4,
    "timestamp": 1619938166873,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "12c6c6b0ab1211eb8ad8c971b64f2374",
    "transactionID": "54bfd070ab1211eb8ad8c971b64f2374"
    },
    {
    "amount": 40,
    "sender": "sdfsdf",
    "recipient": "ppopok",
    "transactionID": "65f750c0ab1211eb8ad8c971b64f2374"
    },
    {
    "amount": 50,
    "sender": "sdfsdf",
    "recipient": "ppopok",
    "transactionID": "67120f90ab1211eb8ad8c971b64f2374"
    },
    {
    "amount": 60,
    "sender": "sdfsdf",
    "recipient": "ppopok",
    "transactionID": "6a57ebc0ab1211eb8ad8c971b64f2374"
    },
    {
    "amount": 70,
    "sender": "sdfsdf",
    "recipient": "ppopok",
    "transactionID": "6cbf4ed0ab1211eb8ad8c971b64f2374"
    }
    ],
    "nonce": 22636,
    "hash": "00003bbd6a6887887057ba8c85b743a9770090c28029eac004b26c80206d9b3b",
    "previousBlockHash": "000033e00a51c0f3822b20bfcc351cc903aa1a5c8023dcf4c89a5a8b5484d72c"
    },
    {
    "index": 5,
    "timestamp": 1619938171454,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "12c6c6b0ab1211eb8ad8c971b64f2374",
    "transactionID": "8974b420ab1211eb8ad8c971b64f2374"
    }
    ],
    "nonce": 33757,
    "hash": "0000c74a87f20a2dd9d563de40d97b4f95d3491dcacf141c29fe39b6dfb6990c",
    "previousBlockHash": "00003bbd6a6887887057ba8c85b743a9770090c28029eac004b26c80206d9b3b"
    },
    {
    "index": 6,
    "timestamp": 1619938172643,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "12c6c6b0ab1211eb8ad8c971b64f2374",
    "transactionID": "8c3051b0ab1211eb8ad8c971b64f2374"
    }
    ],
    "nonce": 35624,
    "hash": "000012bb80cc7a9bb26ea983199f74757516a1a560a9709ad8010378c088bb7c",
    "previousBlockHash": "0000c74a87f20a2dd9d563de40d97b4f95d3491dcacf141c29fe39b6dfb6990c"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "12c6c6b0ab1211eb8ad8c971b64f2374",
    "transactionID": "8ce45f70ab1211eb8ad8c971b64f2374"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    };

    console.log('VALIS: ', bitcoin.chainIsValid(bc1.chain));