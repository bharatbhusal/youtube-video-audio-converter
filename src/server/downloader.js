// const express = require('express');
// const ytdl = require('ytdl-core');
// const ffmpeg = require('fluent-ffmpeg');
// const fs = require('fs');

// const app = express();

// app.use(express.json());

// app.post('/api/download', (req, res) => {
//     const { url } = req.body;

//     // Generate a unique filename for the downloaded video
//     const videoFileName = `video-${Date.now()}.mp4`;

//     // Download the YouTube video
//     const videoStream = ytdl(url, { quality: 'highest' });
//     videoStream.pipe(fs.createWriteStream(videoFileName));

//     videoStream.on('end', () => {
//         // Convert the downloaded video to an audio MP3 file
//         const audioFileName = `audio-${Date.now()}.mp3`;
//         ffmpeg(videoFileName)
//             .output(audioFileName)
//             .on('end', () => {
//                 // Send the audio file as a response
//                 res.download(audioFileName, () => {
//                     // Cleanup the downloaded and converted files
//                     fs.unlinkSync(videoFileName);
//                     fs.unlinkSync(audioFileName);
//                 });
//             })
//             .run();
//     });
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
