require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue repeat magic huge inflict kiwi slot gentle'; 
let testAccounts = [
"0xdf26eb2f243c8c5c12b2301eb89a67498bb7bbccfcbcf94c18a55bd2474e8462",
"0x526c09561147b596ae7ac4925c157d993df57bfa0eee85ec8d7511582a43f796",
"0xceba64cb329cda78d259ffb88218ee35c72647f6aaa63352746424961756df55",
"0x7488c2399a03f96a92c3da3c4d214a936202c1fbc578b885d03f893be9545c69",
"0x1417647030bd79ce1d18883dec3ad28d2834480ebefadefbf7ace84a2a0c36d0",
"0x1847e6853473ed4ddadb8cdd4244ec1555f68cddc9478f7809f7e6c259a8458d",
"0x6c384099b75a9ff6fc3155c76fa5975e3e310d218cba63a3af52ec72a03b7d80",
"0xeee500e036c518a03e8cd1e1a60bc2f36e9b3922d00644aa3bade57285e0715c",
"0xccf815ea0d74e71cb8586fc72f271fddacd02cc1536ec7b047140752f60b5d98",
"0xd3b2edf1045ba5ad60cf74fa2558aa23a66483b98066a0b9d722c78398e9ea6d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


