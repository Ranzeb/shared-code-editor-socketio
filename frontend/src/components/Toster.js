import React from "react";
import { Toaster } from "react-hot-toast";

const Toster = () => {
	return (
		<Toaster
			position="top-right"
			toastOptions={{
				success: {
					theme: {
						primary: '#4aed88'
					}
				}
			}}
		></Toaster>
	);
};

export default Toster;
