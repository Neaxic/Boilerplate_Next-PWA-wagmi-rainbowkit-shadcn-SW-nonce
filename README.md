Use this for your next crypto application, as a boilerplate.
It contains configuration for all the bareminimum parts.

It has a full wagmi + rainbowkit setup + viem configuration (It does not contain ethersjs)
It has a service worker setup for reciving notifications already
It has a setup for signing a nonce from the server
It acts as a PWA, approved by chromes lighthouse
It uses shadcn out of the box, but swappable if wanted.
It has no extra bloat

If you wish to use this to full potential, with a server that hands out nounces for client to sign, and a valid notification system, you have to set up a server with the endpoints provided. - This boilerplate does not also contain the server, this is purely client.

Clone repo
`MAC / Linux: "nvm use" OR "nvm use v20.8.0" on Windows`
`npm run dev`
