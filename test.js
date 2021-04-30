const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(123,'1sdf', 'sio');
bitcoin.createNewTransaction(100, 'ALEXskhpeo', 'JENaosdhfo');
bitcoin.createNewBlock(9089, 'asdf', 'asdf');

bitcoin.createNewTransaction(10, 'ALEXskhpeo', 'JENaosdhfo');
bitcoin.createNewTransaction(20, 'ALEXskhpeo', 'JENaosdhfo');
bitcoin.createNewTransaction(30, 'ALEXskhpeo', 'JENaosdhfo');

console.log(bitcoin.createNewTransaction(50,'a','b'));