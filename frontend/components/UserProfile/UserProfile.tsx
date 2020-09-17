import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { FIND_USER_BY_ID, UPLOAD_AVATAR } from "../../queries/user.query";
import { IFriend } from "../Friends/Friend/Friend";
import { v4 as uuid } from "uuid";
import Post, { IPost } from "../Posts/Post/Post";
import Posts from "../Posts/Posts";

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

	if (loading) return <div>Loading ...</div>;

	const user = data.findUserById;

	return (
		<div>
			<h1>User Profile</h1>
			<figure>
				<picture>{/* <img src={user.avatar} /> */}</picture>
			</figure>
			<h4>
				Name: {user.firstName} {user.lastName}
			</h4>
			<h4>Email: {user.email}</h4>
			<h4>Gender: {user.gender}</h4>
			<h4>Date of Birth: {user.dateOfBirth}</h4>

			{localStorage.getItem("id") === id && (
				<S.input
					type="file"
					required
					onChange={(event) => handleSubmitFile(event)}
				/>
			)}

			<div>
				{user.firstName}s friends
				<div>
					{user.friends.map((friend: IFriend) => (
						<div key={uuid()}>
							<div>{friend.avatar}</div>
							<h6>
								{friend.firstName} {friend.lastName}
							</h6>
						</div>
					))}
				</div>
			</div>
			{localStorage.getItem("id") === id && (
				<div>
					<h3>{user.firstName}s Posts</h3>
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
	);
};

export default UserProfile;
