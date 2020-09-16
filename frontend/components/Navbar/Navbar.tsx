import React, { ReactNode } from "react";
import Link from "next/link";

interface INavbar {
	children: ReactNode;
}

const Navbar = ({ children }: INavbar): JSX.Element => {
	return (
		<nav>
			<div>
				<Link href="/main">Main page</Link>
			</div>
			<div>
				<Link href="/userprofile">your profile</Link>
			</div>
			<div>
				<Link href="/users"> Users</Link>
			</div>

			<div>{children}</div>
		</nav>
	);
};

export default Navbar;
