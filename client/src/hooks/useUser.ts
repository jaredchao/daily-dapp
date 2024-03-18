
import { useMemo } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';

export function useUser() {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const { openConnectModal } = useConnectModal();

  // 登录逻辑
  const login = async () => {
     openConnectModal()
  };


  const withAutoLogin = (fn = () => {}) => {
    return () => {
      isConnected ? fn() : login();
    }
  }

  // 登出逻辑
  const logout = async () => {
    disconnect();
  };

  // 用户数据，这里只包括了地址，你可以扩展包含更多信息
  const user = useMemo(() => ({
    address,
    isConnected,
  }), [address, isConnected]);

  return { user, login, logout, withAutoLogin };
}
