import logo from "./logo.svg";
import Caver from "caver-js";

import "./App.css";

const KAIKAS_PROVIDER = window.klaytn;
const KAIKAS_CAVER = new Caver(KAIKAS_PROVIDER);
const DEFAULT_ADDRESS = "0x0000000000000000000000000000000000000000";

function App() {
  const isValidKaikasAccounts = (accounts) => {
    return !!accounts && accounts.length > 0 && isValidAddress(accounts[0]);
  };
  const isValidAddress = (address) => {
    return (
      !!address &&
      address !== "" &&
      address !== DEFAULT_ADDRESS &&
      KAIKAS_CAVER.utils.isAddress(address)
    );
  };

  const getKaikasAddress = () => {
    if (!KAIKAS_PROVIDER) {
      alert(
        "카이카스를 설치해 주세요. 카이카스는 PC 웹에서만 사용 가능합니다."
      );
      window.open(
        "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi"
      );
      return;
    }
    KAIKAS_PROVIDER.enable().then((accounts) => {
      // 1. 현재 연결된 지갑 주소 체크
      if (!isValidKaikasAccounts(accounts)) {
        alert("올바르지 않은 계정 정보입니다. 잠시 후 다시 시도해 주세요.");
        return;
      }
      // 2. 현재 연결된 지갑 주소 받아오기
      console.log("주소값: ", accounts[0]);
    });
  };

  return (
    <div className="App">
      <button onClick={getKaikasAddress}>Connect Wallet</button>
    </div>
  );
}

export default App;
