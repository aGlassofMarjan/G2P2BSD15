import mic from '../assets/icons/mic.svg'
import cam from '../assets/icons/cam.svg'
import closedCaption from '../assets/icons/closedcaption.svg'
import more from '../assets/icons/more.svg'
import end from '../assets/icons/end.svg'
import chat from '../assets/icons/chat.svg'
import info from '../assets/icons/info.svg'


export default function MainPage({url}) {
    return (
        <>
            <div className="flex justify-center w-screen h-screen ">
                <div className="mb-8 flex grid grid-cols-2 gap-4 p-32 w-full justify-center">
                    <div className="bg-blue-800 w-auto rounded-lg p-8">
                        <div className="flex justify-center text-white">
                            <img className="h-72 w-72 object-cover rounded-full"
                                src="https://plus.unsplash.com/premium_photo-1718358631642-a81ba2e960b0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" srcSet=""/>

                        </div>
                        <div className="relative bottom-0 flex text-white">
                            <p>Yobel Sahala</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="fixed w-screen bg-zinc-800 p-8 bottom-0 flex items-center justify-between h-auto">
                <div className="flex">
                    <p className="text-white">5:50 | asd-zxc-qwe</p>
                </div>
                <div className="flex gap-4">
                    <div className="w-20 h-12 flex items-center justify-center rounded-full hover:bg-zinc-900"><img
                            src={mic} alt="" srcSet=""/></div>
                    <div className="w-20 h-12 flex items-center justify-center rounded-full hover:bg-zinc-900"><img
                            src={cam} alt="" srcSet=""/></div>
                    <div className="w-20 h-12 flex items-center justify-center rounded-full hover:bg-zinc-900"><img
                            src={closedCaption} alt="" srcSet=""/></div>
                    <div className="w-20 h-12 flex items-center justify-center rounded-full hover:bg-zinc-900"><img
                            src={more} alt="" srcSet=""/></div>
                    <div className="w-24 h-12 flex items-center justify-center rounded-full bg-red-700 hover:bg-red-800"><img
                            src={end} alt="" srcSet=""/></div>
                </div>
                <div className="flex">
                    <div className="w-24 h-12 flex items-center justify-center rounded-full hover:bg-zinc-900"><img
                            src={chat} alt="" srcSet=""/></div>
                    <div className="w-24 h-12 flex items-center justify-center rounded-full hover:bg-zinc-900"><img
                            src={info} alt="" srcSet=""/></div>
                </div>

            </div>
        </>
    )
}