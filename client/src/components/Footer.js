

function Footer() {
    return (
			<div className="bg-primary-light p-1 w-full h-full flex justify-center text-jost text-sm font-semibold antialiased ">
				<a
					href="https://github.com/rakshitjain13/Yogame"
					target="_blank"
					rel="noreferrer"
					className="flex"
				>
					<img
						src="https://img.icons8.com/material-outlined/18/000000/github.png"
						alt="Git"
					/>{" "}
					Github
				</a>
				, made by ❤ from
				<a
					href="https://github.com/rakshitjain13"
					target="_blank"
					rel="noreferrer"
					className="flex ml-1 mr-1"
				>
					Rakshit
				</a>
				and
				<a
					href="https://github.com/mukhrit"
					target="_blank"
					rel="noreferrer"
					className="flex ml-1"
				>
					Mukhrit
				</a>
			</div>
		);
}

export default Footer;
