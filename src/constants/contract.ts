export const CONTRACT_ADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // ganti sesuai deploy kamu

export const CONTRACT_ABI = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				indexed: false,
				internalType: "string",
				name: "text",
				type: "string",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "timestamp",
				type: "uint256",
			},
		],
		name: "NewMessage",
		type: "event",
	},
	{
		inputs: [],
		name: "getMessages",
		outputs: [
			{
				components: [
					{
						internalType: "address",
						name: "sender",
						type: "address",
					},
					{
						internalType: "string",
						name: "text",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "timestamp",
						type: "uint256",
					},
				],
				internalType: "struct Guestbook.Message[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "messages",
		outputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				internalType: "string",
				name: "text",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "timestamp",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_text",
				type: "string",
			},
		],
		name: "writeMessage",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
