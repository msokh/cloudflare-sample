import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contact")({
	component: ContactComponent,
});

function ContactComponent() {
	return (
		<div className="container mx-auto p-8">
			<div className="mb-6">
				<Link
					to="/"
					className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
				>
					← ホームに戻る
				</Link>
			</div>

			<h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
			<p className="text-gray-600 mb-4">
				お気軽にお問い合わせください。通常24時間以内にご返信いたします。
			</p>
			<div className="bg-gray-100 p-6 rounded-lg mb-8">
				<h2 className="text-xl font-semibold mb-4">連絡先情報</h2>
				<p className="mb-2">📧 Email: contact@example.com</p>
				<p className="mb-2">📱 電話: 03-1234-5678</p>
				<p>📍 住所: 東京都渋谷区...</p>
			</div>

			<div className="flex gap-4 justify-center">
				<Link
					to="/about"
					className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
				>
					会社について
				</Link>
				<Link
					to="/profile"
					className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
				>
					チーム紹介
				</Link>
			</div>
		</div>
	);
}
