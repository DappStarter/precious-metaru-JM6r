require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remember protect inner argue outer gate'; 
let testAccounts = [
"0x0ffad185db7c5c1eec92d82a44c43b83e9aa16fdc7b4167c3241101709974ae7",
"0x5726412f6150096834e43eeac600f06a7187183e0fdb005268bc1ddc484b51ea",
"0xb641c077cf7ecb10d9aa7dfd4abae2a1907e42f2fc30126e4850237569a5f765",
"0x5ed928bf9aafc2df048baafb9293421d9cbd983f53edfb62e0adaccec767324c",
"0x188d770b4bf92ef4c0a3640fdd4ddb17ab578afe95b763a9d93383a5c29d4510",
"0x9a2c2b0a07a0d530488a5dd4d5f34cb338837fab7863f92f702c43ecf96ae3ab",
"0x2b7523b5566343f571808e8456d8d6f60b861ae629f839c5313be804ff2a30cc",
"0x008eb49ca8460d8e158739211f3480d90c80bf541292258c3398af8471d10e6f",
"0xb1e6f39dbfa509d6151e0420fb839f4f18821d070bf404a39817b9c4ba361862",
"0x7e7ff61a36a69df3d1df680b50560c55ac00c607f05f0fd5d359cd7b54d2a4d9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

