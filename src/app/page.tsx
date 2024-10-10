"use client"
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, cookieStorage, createStorage, http } from 'wagmi';
import {
  mainnet,
  sepolia,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


import { ConnectButton } from '@rainbow-me/rainbowkit';
import { PromtInstaller } from '@/components/PromtInstaller';
import { PushNotificationManager } from '@/components/PushNotificationManager';
import { SignNounceButton } from '@/components/SignNounceButton';
import { ThemePickerButton } from '@/components/ThemePickerButton';
import { useTheme } from 'next-themes';


const config = getDefaultConfig({
  appName: 'a_product_name',
  projectId: 'your_project_id',
  // wallets: ['metamask', 'walletconnect', 'walletlink'],
  chains: [mainnet,
    sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [mainnet.id]: http('an_alchemy_url'),
    [sepolia.id]: http('an_alchemy_url'),
  },
});

const queryClient = new QueryClient();

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={theme === "dark" ? darkTheme() : lightTheme()}>
            {/* Your App */}
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
              <ConnectButton />
              <PromtInstaller />
              <PushNotificationManager />
              <SignNounceButton />
              <ThemePickerButton />
            </div>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
