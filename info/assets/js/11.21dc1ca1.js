(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{209:function(e,t,a){"use strict";a.r(t);var s=a(28),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"setup-a-full-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-a-full-node"}},[e._v("#")]),e._v(" Setup a Full Node")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("If you have not already installed the drop daemon "),a("code",[e._v("dropd")]),e._v(", please refer to "),a("a",{attrs:{href:"install"}},[e._v("Installing Dropil Chain")]),e._v(" before continuing.")])]),e._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("p",[e._v("In order to setup a fresh full node, make sure you don't already have a folder on your system at path "),a("code",[e._v("C:\\.dropd")]),e._v(".")]),e._v(" "),a("p",[e._v("First, initialize the drop daemon by executing the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dropd init <MONIKER> --chain-id dropilchain\n")])])]),a("p",[e._v("Replace "),a("code",[e._v("<MONIKER>")]),e._v(" with an identifier of your choosing (i.e "),a("code",[e._v("my-dropil-chain-node")]),e._v(").")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Testnet chain-id is "),a("code",[e._v("dropilchain-testnet")])])])]),e._v(" "),a("p",[e._v("This will create the previously mentioned .dropd folder in your C:\\ drive or root directory of your computer/server.")]),e._v(" "),a("h2",{attrs:{id:"genesis-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genesis-file"}},[e._v("#")]),e._v(" Genesis File")]),e._v(" "),a("p",[e._v("Download the Dropil Chain genesis file from our Github "),a("a",{attrs:{href:"https://github.com/dropil/dropilchain/blob/master/genesis.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" (testnet genesis file can be found "),a("a",{attrs:{href:"https://github.com/dropil/dropilchain-testnet/blob/master/genesis.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(") and replace the automatically generated genesis file in the path "),a("code",[e._v("C:\\.dropd\\config\\genesis.json")]),e._v(" using the downloaded file.")]),e._v(" "),a("h2",{attrs:{id:"start-dropd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-dropd"}},[e._v("#")]),e._v(" Start "),a("code",[e._v("dropd")])]),e._v(" "),a("p",[e._v("Start the drop daemon with the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dropd start --minimum-gas-prices 5.0udrop --moniker <MONIKER> --rpc.laddr tcp://0.0.0.0:26657 --p2p.seeds <SEEDS>\n")])])]),a("p",[e._v("Replace "),a("code",[e._v("<MONIKER>")]),e._v(" with the identifier you previously chose. Replace "),a("code",[e._v("<SEEDS>")]),e._v(" with a comma separated list of validator seeds you would like your node to communicate with. You can find a list of seeds that are trusted by Dropil below or you can use seeds found elsewhere.")]),e._v(" "),a("h3",{attrs:{id:"trusted-mainnet-validator-seeds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trusted-mainnet-validator-seeds"}},[e._v("#")]),e._v(" Trusted Mainnet Validator Seeds")]),e._v(" "),a("p",[e._v("We will add trusted seeds when mainnet is launched.")]),e._v(" "),a("h3",{attrs:{id:"trusted-testnet-validator-seeds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trusted-testnet-validator-seeds"}},[e._v("#")]),e._v(" Trusted Testnet Validator Seeds")]),e._v(" "),a("p",[e._v("This is a list of testnet seeds you can connect to that are considered trusted by most people including Dropil.")]),e._v(" "),a("ul",[a("li",[e._v("dropil-testnet-validator-1: "),a("code",[e._v("512f115566a9957da91a15ce91537ae41ef6324e@147.135.37.119:26656")])]),e._v(" "),a("li",[e._v("dropil-testnet-validator-2: "),a("code",[e._v("f3c64b4ddb0eaa274b03a4b7a62b38670d30afb7@147.135.37.118:26656")])]),e._v(" "),a("li",[e._v("dropil-testnet-validator-3: "),a("code",[e._v("5b3030d37d4883d672a716f8887ef477d378593a@147.135.37.208:26656")])]),e._v(" "),a("li",[e._v("dropil-testnet-validator-4: "),a("code",[e._v("341988b34334e2dcac9ef5c41d7d9eb811398314@147.135.37.233:26656")])])]),e._v(" "),a("p",[e._v("Example "),a("code",[e._v("--p2p.seeds")]),e._v(" string:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("512f115566a9957da91a15ce91537ae41ef6324e@147.135.37.119:26656,f3c64b4ddb0eaa274b03a4b7a62b38670d30afb7@147.135.37.118:26656,5b3030d37d4883d672a716f8887ef477d378593a@147.135.37.208:26656,341988b34334e2dcac9ef5c41d7d9eb811398314@147.135.37.233:26656\n")])])]),a("h2",{attrs:{id:"node-syncing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-syncing"}},[e._v("#")]),e._v(" Node Syncing")]),e._v(" "),a("p",[e._v("Once you have executed the command, your node will begin syncing all blocks until it has caught up to the current state. The speed at which your node catches up varies greatly depending on your network speed. You will know it's completed syncing once each block is taking roughly 5 seconds.")]),e._v(" "),a("h2",{attrs:{id:"congratulations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#congratulations"}},[e._v("#")]),e._v(" Congratulations!")]),e._v(" "),a("p",[e._v("You have now setup a full node on Dropil Chain! You now have full access to the network and drop daemon "),a("code",[e._v("dropd")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);