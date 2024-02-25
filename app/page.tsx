import Image from "next/image";
import Avatar from "@/public/avatar.jpg";

export default function Home() {
	return (
		<section className="h-screen flex  ">
			<div className="w-full  ml-auto mr-auto flex">
				<div className="grid grid-rows-[auto_auto_auto] grid-cols-1 text-primary uppercase text-sm md:grid-cols-3 md:gap-4 xl:text-[170px]">
					<h1 className="text-primary uppercase font-bold row-span-2  self-center text-5xl leading-[83%] md:col-span-3 md:text-[110px] ">
						<div>Mario</div>
						<div>Pineda</div>
					</h1>
					<p className=" max-w-[360px] row-span-1 md:text-base">
						Creating user-friendly designs, taking digital awesomeness to new
						heights. Experience the perfect blend of creativity and
						functionality in every pixel -It's like digital magic!
					</p>
					<p className="row-span-1 justify-self-start md:text-base">
						Front End Developer
					</p>
					<Image
						src={Avatar}
						alt="avatar"
						className="w-full max-w-[65%]  aspect-square  rounded-full "
					/>
				</div>
			</div>
		</section>
	);
}
