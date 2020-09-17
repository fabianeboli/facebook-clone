import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";

interface INavbar {
	children: ReactNode;
}

const Navbar = ({ children }: INavbar): JSX.Element => {
	const [id, setId] = useState<string>("");

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

	const handleSignOut = () => {
		localStorage.clear();
		location.reload();
	};

	return (
		<nav>
			{id && (
				<>
					<div>
						<Link href="/main">Main page</Link>
					</div>
					<div>
						<Link href="/userprofile">your profile</Link>
					</div>
					<div>
						<Link href="/users"> Users</Link>
					</div>
					<button onClick={handleSignOut}>
						<Link href="/">Sign Out</Link>
					</button>
				</>
			)}
			<div>{children}</div>
		</nav>
	);
};

export default Navbar;
