import Image from "next/image";
import Avatar from "@/public/avatar.jpg";

export default function Home() {
	return (
		<div className="">
			<div className="flex flex-col min-h-screen  items-center justify-center">
				<Image src={Avatar} alt="avatar" className="w-[50vw]" />
				<h1 className="text-black font-bold text-6xl text-center uppercase">
					Front End <br />
					Developer
				</h1>
				<div className="absolute  bottom-[15%] w-[34px] h-[55px] cursor-pointer ">
					<div className="w-[3px] h-[35px] py-[10px] px-[15px] border border-black opacity-75 box-content rounded-[25px]">
						<div className="w-[3px] h-[10px] rounded-[25%] bg-black animate-scroll"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
