import Recognition from "@/components/Awards/Recognition";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Awards/Header";

export default function Home() {
	return (
		<div className='flex flex-col'>
			<div className='flex flex-col justify-center items-center w-full'>
				<Header />

				<Recognition />
			</div>
			<Footer />
		</div>
	);
}
