export const Portfolio = () => {
	return (
		<>
			<div className="section-1">
				<div className="page-heading">
					<h1>Portfolio</h1>
					<a href="" onClick={e => e.preventDefault()}>
						cmrn-yng.com
					</a>
				</div>
				<p className="page-description">
					A minimal and responsive portfolio built using React and animated with Framer Motion. 3D
					elements were made possible by Three.js.
				</p>
			</div>
			<div className="section-2">
				<div>
					<h2>Technologies</h2>
					<ul>
						<li>
							<b>React</b> - A powerful front-end library I used to build a robust and responsive
							user interface, ensuring a seamless experience across a diverse range of devices and
							platforms.
						</li>
						<li>
							<b>Framer Motion</b> - Leveraged to infuse the portfolio with smooth animations and
							seamless transitions.
						</li>
						<li>
							<b>Three.js</b> - A high-performance 3D graphics library, used to create the 3D ASCII
							render of my name.
						</li>
						<li>
							<b>React Three Fiber</b> - A React renderer which seamlessly bridges the gap between
							React's component-based architecture and Three.js's powerful 3D graphics capabilities.
							Allowed me to incorporate immersive 3D elements into the portfolio with ease and
							efficiency.
						</li>
					</ul>
				</div>
				<div>
					<h2>Architecture Considerations</h2>
					<p>
						Recognising the ever-evolving nature of a developer's journey, I purposefully designed
						the project's architecture with scalability and extensibility in mind. As I continue to
						gain invaluable experience and embark on new endeavors, integrating future works and
						accomplishments into my portfolio becomes a simple and quick process.
						<br />
						<br />
						The codebase is meticulously structured, enabling me to effortlessly introduce a new
						plain HTML document containing project details. Leveraging the power of React's
						component-based architecture, these additions will be automatically formatted and
						rendered with a consistent and visually appealing layout.
						<br />
						<br />
						Furthermore, by leveraging the capabilities of Vercel as the deployment platform, any
						updates or additions to the codebase are automatically built and deployed, eliminating
						the need for manual intervention. This streamlined process ensures that my portfolio
						remains up-to-date, reflecting my latest accomplishments and maintaining a polished,
						professional presence online.
					</p>
				</div>
			</div>
		</>
	);
};
