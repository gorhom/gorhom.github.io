import Link from "next/link";

interface OSSLink {
	key: string;
	link: string;
	name: string;
	description: string;
}

const data: OSSLink[] = [
	{
		key: "bottom-sheet",
		link: "https://gorhom.github.io/react-native-bottom-sheet/",
		name: "React Native Bottom Sheet",
		description:
			"A performant interactive bottom sheet with fully configurable options 🚀",
	},
	{
		key: "animated-tabs",
		link: "https://github.com/gorhom/react-native-animated-tabbar",
		name: "React Native Tabs",
		description:
			"A 60FPS animated tab bar with a variety of cool animation presets 😎",
	},
	{
		key: "sticky-items",
		link: "https://github.com/gorhom/react-native-sticky-item",
		name: "React Native Sticky Items",
		description: "An interactive sticky item inspired by Facebook Stories.",
	},
	{
		key: "paper-onboarding",
		link: "https://github.com/gorhom/react-native-paper-onboarding",
		name: "React Native Paper Onboarding",
		description: "A material design UI slider for React Native.",
	},
	{
		key: "portal",
		link: "https://github.com/gorhom/react-native-portal",
		name: "React Native Portal",
		description:
			"A simplified portal implementation for ⭕️ React Native & Web ⭕️.",
	},
	{
		key: "showcase-template",
		link: "https://github.com/gorhom/showcase-template",
		name: "React Native Showcase Template",
		description:
			"A React Native template that helps developers to showcase their amazing libraries examples.",
	},
];

export function OSSLinks() {
	return (
		<div>
			{data.map((item) => (
				<Link
					key={item.key}
					className="flex flex-col space-y-1 mb-4"
					href={item.link}
					target="_blank"
				>
					<div className="w-full flex flex-col space-x-0 md:space-x-2">
						<p className="text-neutral-900 dark:text-neutral-100 font-medium text-nowrap">
							{item.name}
						</p>
						<p className="text-neutral-600 dark:text-neutral-400 m-0">
							{item.description}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
}
