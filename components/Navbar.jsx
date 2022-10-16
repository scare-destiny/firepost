
import Link from "next/dist/client/link";
export default function Navbar() {
	const user = null
	const username = null
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link href='/'>
						<button className="btn-logo">FEED</button>
					</Link>
				</li>

				{username && (
					<>
						<li className="push-left">
							<Link href='/admin'
							>
								<button>Write Posts</button>
							</Link>
						</li>
						<li>
							<Link href={`/${username}`}>
								<img src={usre?.photoURL}/>
</Link>
						</li>
					</>
				)}
				{!username && (
					<li>
						<Link href='/enter'>
							<button>Log in</button>
						</Link>
					</li>
				)}
			</ul>

		</nav>
	)
}

