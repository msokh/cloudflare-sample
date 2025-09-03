import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="container mx-auto p-8">
			<h1 className="text-4xl font-bold text-center mb-8">
				Cloudflare Sample App
			</h1>
			<p className="text-center text-gray-600 mb-12 text-lg">
				モダンなWebアプリケーションのサンプルです
			</p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
				<Link
					to="/about"
					className="block p-6 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors duration-200"
				>
					<div className="text-center">
						<div className="text-4xl mb-3">ℹ️</div>
						<h3 className="text-xl font-semibold mb-2 text-blue-800">About</h3>
						<p className="text-blue-600">私たちについて詳しく知る</p>
					</div>
				</Link>

				<Link
					to="/profile"
					className="block p-6 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors duration-200"
				>
					<div className="text-center">
						<div className="text-4xl mb-3">👤</div>
						<h3 className="text-xl font-semibold mb-2 text-green-800">
							Profile
						</h3>
						<p className="text-green-600">チームメンバーの紹介</p>
					</div>
				</Link>

				<Link
					to="/contact"
					className="block p-6 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors duration-200"
				>
					<div className="text-center">
						<div className="text-4xl mb-3">📧</div>
						<h3 className="text-xl font-semibold mb-2 text-purple-800">
							Contact
						</h3>
						<p className="text-purple-600">お問い合わせはこちら</p>
					</div>
				</Link>
			</div>

			<div className="text-center mt-12">
				<p className="text-gray-500">
					各カードをクリックして、詳細ページに移動できます
				</p>
			</div>
		</div>
	);
}
