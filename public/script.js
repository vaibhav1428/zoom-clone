const socket = io('/')


const  VideoGrid = document.getElementById('video-grid');
console.log(VideoGrid)
const MyVideo = document.createElement('video');
MyVideo.muted=true;



let myVideostream;

// on webcam
navigator.mediaDevices.getUserMedia({
    video:true,
    audio:false
}).then(stream=>{
myVideostream=stream;
addVideostream(MyVideo,stream);

}) 


// socket.io
socket.emit('join-room',ROOM_ID);
socket.on('user-connected',()=>{
    connectToUser();
})

const connectToUser=()=>{
console.log('new-user')
}



// on camera
const addVideostream=(video,stream)=>{
 video.srcObject = stream;
 video.addEventListener('loadedmetadata',()=>{
    video.play();
})

VideoGrid.append(video);
}