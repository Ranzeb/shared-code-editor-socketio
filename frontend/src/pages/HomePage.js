import React from "react";
import useHomeUtils from "../hooks/useHomeUtils";
import "../index.css";

const HomePage = () => {
	const {
		roomId,
		setRoomId,
		userName,
		setUserName,
		createNewRoom,
		joinRoom,
		handleInputInter,
	} = useHomeUtils();

	return (
		<div className="homePageWrapper">
			<div className="fromWrapper">
				<div className="logo">
					<h2 className="logoLabel">Mock Interview</h2>
				</div>
				<h4 className="mainLabel">Paste Invitation Room Id</h4>
				<div className="inputgroup">
					<input
						className="inputBox"
						type="text"
						onChange={(e) => setRoomId(e.target.value)}
						value={roomId}
						placeholder="Room Id"
						onKeyUp={handleInputInter}
					/>
					<input
						className="inputBox"
						type="text"
						placeholder="Username (minimum 4 characters)"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						onKeyUp={handleInputInter}
					/>
					<button onClick={joinRoom} className="btn joinBtn">
						join
					</button>
					<span className="createInfo">
						if you don't have a room id,&nbsp;
						<a onClick={createNewRoom} className="check" href="/#">
							click here
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
