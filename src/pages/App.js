import React, { useMemo, useState } from 'react';
import Navbar from "../components/Navbar.component";
import Background from "../components/Background.component";
import ThemeState from "../contexts/theme/ThemeState";
import Web3 from "web3";
import ERC721EXT from '../config/abi/ERC721EXT.json'

const web3 = new Web3("wss://rinkeby.infura.io/ws/v3/2f2122659ad94cadb2abe7a93725b13c")

const App = () => {

    const [balance, setBalance] = useState(0);
    const [address, setAddress] = useState("");

    const erc721extContract = useMemo(() => {
        return new web3.eth.Contract(ERC721EXT.abi, "0x08B447f91a8D70DE8FCf5b1870cb252C4f39C2bD")
    }, [])

    const getBalance = async () => {
        const tmpBalance = await erc721extContract.methods.balanceOf(address).call();
        console.log(tmpBalance);
        setBalance(tmpBalance)
    }

    return (
        <ThemeState>
            <Background>
                <Navbar name={'Get Balance of NFT contract'} />
                <div style={{ display: 'flex' }}>
                    <input style={{ marginLeft: 25, marginRight: 25, width: 350 }} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Type address of account" />
                    <button className={`btn btn-dark`} onClick={getBalance}>
                        Get Balance of NFT
                    </button>
                </div>
                <div style={{ marginLeft: 25, marginTop: 25 }}>
                    {`Balance of User: ${balance}`}
                </div>

            </Background>
        </ThemeState>
    );
};

export default App;
