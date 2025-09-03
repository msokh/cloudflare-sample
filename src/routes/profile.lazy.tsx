import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/profile")({
	component: ProfileComponent,
});

function ProfileComponent() {
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

			<h1 className="text-3xl font-bold mb-6">プロフィール</h1>
			<div className="bg-white shadow-lg rounded-lg p-6">
				<div className="flex items-center mb-6">
					<div className="w-24 h-24 bg-gray-300 rounded-full mr-6 flex items-center justify-center">
						<span className="text-2xl">👤</span>
					</div>
					<div>
						<h2 className="text-2xl font-semibold">山田太郎</h2>
						<p className="text-gray-600">フロントエンド開発者</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h3 className="text-lg font-semibold mb-3">スキル</h3>
						<div className="space-y-2">
							<div className="flex items-center">
								<span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
								<span>React / TypeScript</span>
							</div>
							<div className="flex items-center">
								<span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
								<span>Tailwind CSS</span>
							</div>
							<div className="flex items-center">
								<span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
								<span>Node.js</span>
							</div>
						</div>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-3">経歴</h3>
						<p className="text-gray-600">
							5年以上のフロントエンド開発経験があります。
							モダンなWebアプリケーションの開発に携わり、
							ユーザー体験の向上に注力しています。
						</p>
					</div>
				</div>

				<div className="mt-8 flex gap-4 justify-center">
					<Link
						to="/about"
						className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
					>
						会社について
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
