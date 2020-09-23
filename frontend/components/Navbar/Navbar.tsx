import React, { ReactNode, useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import * as S from "./Navbar.style";
import Link from "next/link";

interface INavbar {
	children: ReactNode;
}

const Navbar = ({ children }: INavbar): JSX.Element => {
	const [id, setId] = useState<string>("");
	const router = useRouter();

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

	const handleSignOut = async () => {
		await router.push("/");
		localStorage.clear();
		location.reload();
	};

	return (
		<>
			<S.container>
				{id && (
					<>
						<Link href="/main">
							<a>Main page</a>
						</Link>

						<Link href={`/userprofile/${id}`}>
							<a>your profile</a>
						</Link>

						<Link href="/users">
							<a> Users</a>
						</Link>
						<button onClick={handleSignOut}>
							<Link href="/">
								<a>Sign Out</a>
							</Link>
						</button>
					</>
				)}
			</S.container>
			<div>{children}</div>
		</>
	);
};

export default Navbar;
