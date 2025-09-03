import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
	component: AboutComponent,
});

function AboutComponent() {
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

			<h1 className="text-3xl font-bold mb-6">私たちについて</h1>
			<div className="max-w-4xl">
				<p className="text-gray-600 mb-6 leading-relaxed">
					私たちは、革新的なWebアプリケーションの開発に情熱を注ぐチームです。
					最新の技術を活用し、ユーザーにとって価値のある体験を提供することを
					使命としています。
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					<div className="text-center p-4">
						<div className="text-4xl mb-3">🚀</div>
						<h3 className="text-lg font-semibold mb-2">革新性</h3>
						<p className="text-gray-600">
							常に最新技術を追求し、革新的なソリューションを提供
						</p>
					</div>
					<div className="text-center p-4">
						<div className="text-4xl mb-3">💡</div>
						<h3 className="text-lg font-semibold mb-2">創造性</h3>
						<p className="text-gray-600">
							独創的なアイデアで、ユーザーの期待を超える体験を創造
						</p>
					</div>
					<div className="text-center p-4">
						<div className="text-4xl mb-3">🤝</div>
						<h3 className="text-lg font-semibold mb-2">協力</h3>
						<p className="text-gray-600">
							チームワークを重視し、最高品質の成果物を実現
						</p>
					</div>
				</div>

				<div className="bg-gray-50 p-6 rounded-lg">
					<h2 className="text-xl font-semibold mb-4">技術スタック</h2>
					<div className="flex flex-wrap gap-2">
						<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
							React
						</span>
						<span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
							TypeScript
						</span>
						<span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
							Tailwind CSS
						</span>
						<span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
							Node.js
						</span>
						<span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
							Cloudflare
						</span>
					</div>
				</div>

				<div className="mt-8 flex gap-4 justify-center">
					<Link
						to="/profile"
						className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
					>
						プロフィールを見る
					</Link>
					<Link
						to="/contact"
						className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
					>
						お問い合わせ
					</Link>
				</div>
			</div>
		</div>
	);
}
