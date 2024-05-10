import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const UserDetail = () => {
  const location = useLocation();
  const [walletHash, setWalletHash] = useState("");

  const { walletHash: userWalletHash } = location.state || {};

  useState(() => {
    if (userWalletHash) {
      setWalletHash(userWalletHash);
    }
  }, [userWalletHash]);

  return (
    <div style={{ marginTop: "50px" }}>
      <h1>User Profile</h1>
      {walletHash && (
        <div>
          <strong>Wallet Hash:</strong> {walletHash}
        </div>
      )}
    </div>
  );
};

export default UserDetail;
