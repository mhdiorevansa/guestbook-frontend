"use client";

import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/constants/contract";

export default function Home() {
	const { isConnected } = useAccount();
	const [message, setMessage] = useState("");
	const [success, setSuccess] = useState(false);

	const { writeContractAsync, isPending } = useWriteContract();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSuccess(false);
		try {
			await writeContractAsync({
				address: CONTRACT_ADDRESS as `0x${string}`,
				abi: CONTRACT_ABI,
				functionName: "writeMessage",
				args: [message],
			});
			setSuccess(true);
			setMessage("");
		} catch (err) {
			console.error("❌ Gagal kirim pesan:", err);
		}
	};

	return (
		<main className="flex flex-col items-center justify-center min-h-screen p-6">
			<h1 className="text-3xl font-bold mb-6">📖 Buku Tamu Web3</h1>
			<ConnectButton />
			{isConnected && (
				<form onSubmit={handleSubmit} className="mt-6 w-full max-w-md">
					<textarea
						className="w-full border rounded p-2 mb-2"
						rows={3}
						placeholder="Tulis pesanmu..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button
						type="submit"
						className="bg-blue-600 text-white px-4 py-2 rounded"
						disabled={isPending || !message}>
						{isPending ? "Mengirim..." : "Kirim Pesan"}
					</button>
					{success && <p className="text-green-600 mt-2">✅ Pesan berhasil dikirim!</p>}
				</form>
			)}
		</main>
	);
}
