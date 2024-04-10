document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("click", handler);
})


function handler() {
    document.getElementById("center").style.display = "flex"

    const private_key = document.getElementById("private_key").value;
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    test_p = "c1cc4848037c643d1372fd3cd9f10e485c9a9da142bbf2f8d9f05e0998481660";
    test_a = "0x83B1b3f5269ef2A0198bB8de1D08a7969Bda00e3";

    // PROVIDER
    const provider = new ethers.provider.JsonRpcProvider(
        "https://polygon-mumbai.g.alchemy.com/v2/qYtSB8AI6Srapu7MV0jB6u_e1uopQjpQ"
    )
    
    let wallet = new ethers.Wallet(private_key, provider);
    
    const tx = {
        to: address,
        value: ethers.utils.parseEther(amount),
    }

    var a = document.getElementById("link");
    a.href = "somelink url";
    
    wallet.sendTransaction(tx).then((txObj) => {
        console.log("txHash", txObj.hash);
        document.getElementById("center").style.display = "none";
        const a = document.getElementById("link");
        a.href = `https://mumbai.polygonscan.com/tx/${txObj.hash}`;
        document.getElementById("link").style.display = "block";
    })
}

document.addEventListener("DOMContentLoaded", function () {
    document
    .getElementById("check_balance")
    .addEventListener("click", checkBalance);
})

function checkBalance() {
    document.getElementById("center").style.display = "flex";
    
    //PROVIDER
    const provider = new ethers.provider.JsonRpcProvider(
        "https://polygon-mumbai.g.alchemy.com/v2/qYtSB8AI6Srapu7MV0jB6u_e1uopQjpQ"
    )

    const signer = provider.getSigner()
    console.log(signer);
    const address = document.getElementById("address").value;
    provider.getBalance(address).then((balance)=> {
        // convert a currency unit from wei to ether
        const balanceInEth = ethers.utils.formatEther(balance);
        document.getElementById(
            "check_balance"
        ).innerText = `Your Balance: ${balanceInEth} MATIC`;
        console.log(`balance: ${balanceInEth} ETH`);
        document.getElementById("center").style.display = "none";
    })
}