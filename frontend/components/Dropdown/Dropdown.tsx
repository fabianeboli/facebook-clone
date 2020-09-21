import React, { useState } from "react";
import * as S from "./Dropdown.style";

interface IDropdown {
	children: React.ReactNode;
	title: string;
}

const Dropdown = ({ children, title }: IDropdown): JSX.Element => {
	const [active, setActive] = useState<boolean>(true);

	return (
		<>
			<S.openButton active={!active} onClick={() => setActive(true)}>
				<S.arrowLeft size={24} />
			</S.openButton>

			<S.container active={active}>
				{active && (
					<>
						<S.closeButtonContainer>
							<S.title>{title} </S.title>
							<S.closeButton active={active} onClick={() => setActive(false)}>
								{" "}
								<S.arrowRight size={24} />{" "}
							</S.closeButton>
						</S.closeButtonContainer>

						{children}
					</>
				)}
			</S.container>
		</>
	);
};

export default Dropdown;
