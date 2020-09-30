import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as S from "./Navbar.style";
import Link from "next/link";
import { client } from "../../pages/_app";
import { useDispatch } from "react-redux";
import { clearId } from "../../reducers/loginReducer";

interface INavbar {
	children: ReactNode;
}

const Navbar = ({ children }: INavbar): JSX.Element => {
	const [id, setId] = useState<string>("");
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

	const handleSignOut = async () => {
		await router.push("/");
		localStorage.clear();
		dispatch(clearId());
		client.resetStore();
		location.reload();
	};

	return (
		<>
			<S.header>CloneBook</S.header>
			{id && (
				<S.container>
					<Link href="/main">
						<S.a>Main page</S.a>
					</Link>

					<Link href={`/userprofile/${id}`}>
						<S.a>your profile</S.a>
					</Link>

					<Link href="/users">
						<S.a> Users</S.a>
					</Link>
					<button onClick={handleSignOut}>
						<Link href="/">
							<S.a>Sign Out</S.a>
						</Link>
					</button>
				</S.container>
			)}
			<div>{children}</div>
		</>
	);
};

export default Navbar;
