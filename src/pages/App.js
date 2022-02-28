import React, { useMemo } from 'react';
import Navbar from "../components/Navbar.component";
import Background from "../components/Background.component";
import ThemeState from "../contexts/theme/ThemeState";
import Web3 from "web3";
import ERC721EXT from '../config/abi/ERC721EXT.json'
import ABI from './ABI';

const web3 = new Web3("wss://rinkeby.infura.io/ws/v3/2f2122659ad94cadb2abe7a93725b13c")

const App = () => {

    const erc721extContract = useMemo(() => {
        return new web3.eth.Contract(ERC721EXT.abi, "0x08B447f91a8D70DE8FCf5b1870cb252C4f39C2bD")
    }, [])

    const callFunction = async (method, data) => {
        console.log(data)
        try {
            return erc721extContract.methods[method](...Object.values(data)).call();
        }
        catch (error) {
            alert(error);
        }
    }

    const getReadableFunctions = (abis) => {
        return abis?.filter(abi => abi.type === 'function' && abi.stateMutability === 'view')
    }

    return (
        <ThemeState>
            <Background>
                <Navbar name={'Auto-Generating Component Test'} />
                {
                    getReadableFunctions(ERC721EXT.abi).map((data, index) => <ABI key={index} data={data} request={callFunction} />)
                }

            </Background>
        </ThemeState>
    );
};

export default App;
