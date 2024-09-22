import { OSSLinks } from "app/components/oss";
import Link from "next/link";

export default function Page() {
	return (
		<section>
			<h1 className="mt-16 mb-4 text-6xl font-bold tracking-tighter">
				Mo Gorhom
			</h1>
			<p className="mb-4 text-4xl text-neutral-400">
				I write code for work and fun, mostly while listening to&nbsp;
				<Link href="https://music.apple.com/nl/artist/avicii/298496035?l=en-GB">
					Avicii
				</Link>
				.
			</p>
			<div className="my-8">
				<h3 className="mb-4 text-3xl font-semibold tracking-tighter">
					Open Source
				</h3>
				<OSSLinks />
			</div>
		</section>
	);
}
