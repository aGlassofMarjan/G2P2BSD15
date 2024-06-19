import mic from "../assets/icons/mic.svg";
import cam from "../assets/icons/cam.svg";
import closedCaption from "../assets/icons/closedcaption.svg";
import more from "../assets/icons/more.svg";
import end from "../assets/icons/end.svg";
import chat from "../assets/icons/chat.svg";
import info from "../assets/icons/info.svg";
import io from "socket.io-client";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "simple-peer";


export default function MainPage({ url }) {
    const [me, setMe] = useState("");
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const [idToCall, setIdToCall] = useState("");
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();
    const socket = io.connect(`${url}`);
    const navigate = useNavigate()


    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            setStream(stream);
            myVideo.current.srcObject = stream;
        });
    
        socket.on("me", (id) => {
            setMe(id);
        });
    
        socket.on("callUser", (data) => {
            setReceivingCall(true);
            setCaller(data.from);
            setName(data.name);
            setCallerSignal(data.signal);
        });
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream,
          });
          peer.on("stream", (stream) => {
            userVideo.current.srcObject = stream;
          });
    }, []);



  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    navigate("/home")
  };

  return (
    <>
      <div className="flex justify-center w-screen h-screen ">
        <div className="mb-8 flex grid grid-cols-2 gap-4 p-32 w-full justify-center">
          <div className="video-container">
            <div className="video">
                <video
                  playsInline
                  muted
                  ref={myVideo}
                  autoPlay
                  style={{ width: "300px" }}
                />
            </div>
            <div className="video">
                <video
                  playsInline
                  ref={userVideo}
                  autoPlay
                  style={{ width: "300px" }}
                />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed w-screen bg-zinc-800 p-8 bottom-0 flex items-center justify-between h-auto">
        <div className="flex">
          <p className="text-white">5:50 | asd-zxc-qwe</p>
        </div>
        <div className="flex gap-4">
          <div className="w-20 h-12 flex items-center justify-center rounded-full hover:bg-zinc-900">
            <img src={mic} alt="" srcSet="" />
          </div>
          <div className="w-20 h-12 flex items-center justify-center rounded-full hover:bg-zinc-900">
            <img src={cam} alt="" srcSet="" />
          </div>
          <div className="w-20 h-12 flex items-center justify-center rounded-full hover:bg-zinc-900">
            <img src={closedCaption} alt="" srcSet="" />
          </div>
          <div className="w-20 h-12 flex items-center justify-center rounded-full hover:bg-zinc-900">
            <img src={more} alt="" srcSet="" />
          </div>
          <div onClick={leaveCall} className="w-24 h-12 flex items-center justify-center rounded-full bg-red-700 hover:bg-red-800">
            <img src={end} alt="" srcSet="" />
          </div>
        </div>
        <div className="flex">
          <div className="w-24 h-12 flex items-center justify-center rounded-full hover:bg-zinc-900">
            <img src={chat} alt="" srcSet="" />
          </div>
          <div className="w-24 h-12 flex items-center justify-center rounded-full hover:bg-zinc-900">
            <img src={info} alt="" srcSet="" />
          </div>
        </div>
      </div>
    </>
  );
}
