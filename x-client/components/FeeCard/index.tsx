import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
    return (
        <div className="border border-r-0 border-l-0 border-b-0 p-5 hover:bg-slate-900 translate-all cursor-pointer">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-1">
                    <Image
                        src="https://avatars.githubusercontent.com/u/95288495?v=4"
                        alt="user-image"
                        height={50}
                        width={50}
                    />
                </div>
                
                <div className="col-span-11">
                    <h5>Priyanshu Sinha</h5>
                    <p>Hi there. I am trying to build a social media applicatipn</p>
                    <div className="flex justify-between t-5 text-xl items-center p-2 w-[90%]">
                        <div>
                            <BiMessageRounded />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <AiOutlineHeart />
                        </div>
                        <div>
                            <BiUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedCard