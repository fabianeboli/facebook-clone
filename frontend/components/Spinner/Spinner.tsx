import React from "react";
import * as S from "./Spinner.style";

const Spinner = () => {
	return (
		<S.backdrop>
			<S.spinner size={80} />
		</S.backdrop>
	);
};

export default Spinner;
