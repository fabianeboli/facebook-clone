import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { FIND_USER_BY_ID, UPLOAD_AVATAR } from "../../queries/user.query";
import { IFriend } from "../Friends/Friend/Friend";
import { v4 as uuid } from "uuid";
import Post, { IPost } from "../Posts/Post/Post";
import * as S from "./UserProfile.style";
import Popup from "../Popup/Popup";
import Link from "next/link";
import FriendRequests from "../FriendRequests/FriendRequests";
import Spinner from "../Spinner/Spinner";

interface IUserProfile {
	id: string;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const UserProfile = ({ id }: IUserProfile): JSX.Element => {
	const { data, loading } = useQuery(FIND_USER_BY_ID, {
		variables: { id },
		onError: (error) => console.log(error),
	});

	const [uploadFile] = useMutation(UPLOAD_AVATAR);

	const handleSubmitFile = async (event: ChangeEvent) => {
		event.preventDefault();
		const file = event.target.files[0];
		await uploadFile({ variables: { id, file } });
	};

	if (loading) return <Spinner />;

	const user = data.findUserById;

	return (
		<S.container>
			<S.profileContainer>
				<S.infoDetails>
					<S.userAvatar
						src={user.avatar || "/images/user-solid.svg"}
						alt="User avatar"
					/>

					<div>
						<S.info>
							Name{" "}
							<S.highlight>
								{" "}
								{user.firstName} {user.lastName}{" "}
							</S.highlight>{" "}
						</S.info>
						<S.info>
							{" "}
							Email <S.highlight>{user.email} </S.highlight>{" "}
						</S.info>
						<S.info>
							{" "}
							Gender <S.highlight>{user.gender} </S.highlight>{" "}
						</S.info>
						<S.info>
							Date of Birth <S.highlight>{user.dateOfBirth} </S.highlight>{" "}
						</S.info>
					</div>
				</S.infoDetails>

				<h3> Change Avatar</h3>
				{localStorage.getItem("id") === id && (
					<input
						type="file"
						required
						onChange={(event) => handleSubmitFile(event)}
					/>
				)}
				<div>
					<h3>{user.firstName}'s friends </h3>
					<S.friendContainer>
						{user.friends.map((friend: IFriend) => (
							<Link key={uuid()} href={`/userprofile/${friend.id}`}>
								<a>
									<Popup>
										{friend.firstName} {friend.lastName}
									</Popup>
									<S.friendAvatar
										src={friend.avatar || "/images/user-solid.svg"}
										alt={`${friend.firstName} ${friend.lastName}`}
									/>
								</a>
							</Link>
						))}
					</S.friendContainer>
				</div>
				<div>{localStorage.getItem("id") === id && <FriendRequests />}</div>
			</S.profileContainer>
			<div>
				{localStorage.getItem("id") === id && (
					<div>
						<h1>Your Posts </h1>
						{user.posts.map((post: IPost) => (
							<Post
								key={uuid()}
								id={post.id}
								user={user}
								content={post.content}
								date={post.date}
								likes={post.likes}
								comments={[]}
							/>
						))}
					</div>
				)}
			</div>
		</S.container>
	);
};

export default UserProfile;
