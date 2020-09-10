// import fs from "fs";
// import cloudinary from "cloudinary";
// const createUploadStream = (fileName: string, cb: any): any => {
// 	return cloudinary.v2.uploader.upload_stream(
// 		{ public_id: fileName },
// 		(error, file) => cb(error, file)
// 	);
// };

// const addFile = async (_parent, { file }) => {
// 	const { stream, filename, mimetype, encoding } = await file;
// 	const bucket = new mongodb.GridFSBucket(db._db);
// 	const uploadStream = bucket.openUploadStream(filename);
// 	await new Promise((resolve, reject) => {
// 		stream.pipe(uploadStream).on("error", reject).on("finish", resolve);
// 	});
// 	return { _id: uploadStream.id, filename, mimetype, encoding };
// };

// // const multipleUploadsResolver = (root: any, { files }: { files: any }) => {
// // 	return Promise.all(
// // 		files.map((f: any) => singleFileUploadResolver(null, { file: f }))
// // 	);
// // };
