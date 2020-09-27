import React from "react";
import * as S from "./Popup.style";

interface IPopup {
	children: React.ReactNode;
}

export const Popup = ({ children }: IPopup): JSX.Element => {
	return <S.text>{children}</S.text>;
};

export default Popup;
