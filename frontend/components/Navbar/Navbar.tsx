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
						<Link href="/main">Main page</Link>

						<Link href="/userprofile">your profile</Link>

						<Link href="/users"> Users</Link>
						<button onClick={handleSignOut}>
							<Link href="/">Sign Out</Link>
						</button>
					</>
				)}
			</S.container>
			<div>{children}</div>
		</>
	);
};

export default Navbar;
