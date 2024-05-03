export const Spaaaces = () => {
	return (
		<>
			<div className="section-1">
				<div className="page-heading">
					<h1>Spaaaces</h1>
					<a href="https://spaaaces.vercel.app" target="_blank">
						spaaaces.vercel.app
					</a>
				</div>
				<p className="page-description">
					Spaaaces is an interactive 3D interior design web app, built with React, Three.js and
					React Three Fiber. Spaaaces is still <strong>under development</strong>.
				</p>
			</div>
			<div className="section-2">
				<div>
					<h2>Introduction</h2>
					<p>
						Spaaaces is a cutting-edge web application that harnesses the power of modern web
						technologies to elevate the interior design experience. By leveraging the capabilities
						of React, Three.js, and other state-of-the-art libraries, Spaaaces offers a seamless and
						intuitive platform for users to create, customise, and explore 3D representations of
						their living spaces, all within the convenience of a web browser.
					</p>
				</div>
				<div>
					<h2>Technologies</h2>
					<ul>
						<li>
							<b>React</b> - I leveraged this powerful front-end library to build a robust and
							responsive user interface, ensuring a seamless experience across various devices and
							platforms.
						</li>
						<li>
							<b>Zustand</b> - This lightweight and efficient state management solution allowed me
							to maintain a predictable and centralised state, simplifying the management of complex
							application data flows.
						</li>
						<li>
							<b>Three.js</b> - A high-performance 3D graphics library which enabled real-time
							rendering and manipulation of detailed 3D models, bringing virtual living spaces to
							life.
						</li>
						<li>
							<b>React Three Fiber</b> - A React renderer for Three.js which seamlessly integrates
							3D graphics capabilities with React's component-based architecture, enabling the
							creation of highly interactive and visually captivating 3D environments within a web
							application.
						</li>
						<li>
							<b>React Three Drei</b> - A broad collection of helper utilities specifically designed
							for React Three Fiber, accelerating development and enhancing the app's functionality
							with pre-built components and abstractions.
						</li>
						<li>
							<b>uuid</b> - I employed this library to generate universally unique identifiers
							(UUIDs), ensuring reliable and efficient identification and tracking of unique
							elements within the application.
						</li>
					</ul>
				</div>
				<div>
					<h2>Architecture and Design Decisions</h2>
					<p>
						One of the key architectural decisions was the separation of the application into two
						distinct views: Floorplan View and Design View. This division was driven by the need to
						provide users with a streamlined and focused experience tailored to each specific task.
						The Floorplan View offers an intuitive and uncluttered canvas for users to create and
						manipulate their floor plans with precision, while the Design View immerses them in a
						richly detailed 3D environment, enabling them to bring their designs to life.
					</p>
				</div>
				<div>
					<h2>Key Features</h2>
					<p>
						Spaaaces features two seamlessly integrated modes: Floorplan View and Design View. The
						Floorplan View empowers users to effortlessly create custom floor plans on an expansive
						infinite grid canvas. Once the floor plan is finalised, users can transition to the
						immersive Design View, where they can bring their vision to life by applying textures to
						floors and walls, meticulously curating a collection of furniture pieces, and precisely
						positioning them within the virtual space.
						<br />
						<br />
						Furthermore, Spaaaces offers the convenience of locally saving and retrieving scenes,
						enabling users to revisit and refine their designs at any time, as well as the ability
						to export the entire scene for sharing or archiving purposes.
					</p>
				</div>
			</div>
		</>
	);
};
