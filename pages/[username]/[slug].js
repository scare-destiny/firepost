import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Page({}) {
	return (
		<div>
			<Link
				href={{
					pathname: '/username',
					query: { username: 'zhenka1122' },
				}}
			>
				<a>Zhenka's profile</a>
			</Link>
		</div>
	)
}
