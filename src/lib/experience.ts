export interface Experience {
	company: string;
	role: string;
	employment: string;
	period: string;
	location?: string;
	workMode?: string;
	summary?: string;
	highlights?: string[];
}

export const experiences: Experience[] = [
	{
		company: 'Automathing',
		role: 'CTO & Co-Founder',
		employment: 'Self-employed',
		period: 'April 2025 — Present',
		location: 'Quebec, Canada',
		workMode: 'Hybrid',
		summary:
			"I lead the technical vision and architecture, with a mission to deliver platforms that are both highly innovative and absolutely reliable. My day-to-day involves leveraging deep expertise in cloud technologies, complex system integration, and scalable SaaS design to engineer our products for success, ensuring our architecture can handle exponential growth while maintaining peak performance."
	},
	{
		company: 'Lab2View Sarl',
		role: 'Senior Software Engineer',
		employment: 'Contract, Full-time',
		period: 'July 2025 — January 2026',
		location: 'Douala V, Littoral, Cameroon',
		workMode: 'On-site',
		highlights: [
			'Led development and maintenance of the complete administration interface for a neobank application (back-office for operations, compliance, finance, support & risk)',
			'Implemented advanced management of users, transactions, KYC/KYB, fraud detection, limits & refunds through REST APIs, with complex state handling, optimized caching and optimistic updates',
			'Drove the evolution of the corporate website (showcase, marketing onboarding, legal & regulatory pages)',
			'Built a scalable design system and reusable components, optimizing performance and accessibility on data-intensive interfaces',
			'Mentored junior/mid developers, ran thorough code reviews, and improved frontend processes (testing, CI/CD, Storybook, quality standards)',
			'Collaborated closely with Product, Backend, Compliance, UX/UI and Data teams to translate complex, regulated business requirements into intuitive, secure and scalable interfaces amid rapid user and transaction growth'
		]
	},
	{
		company: 'Martha IA',
		role: 'Full Stack Developer',
		employment: 'Part-time',
		period: 'July 2024 — November 2025',
		location: 'New York, United States',
		workMode: 'Remote',
		summary:
			'Drove the development of cutting-edge AI solutions as a full-stack developer at MarthaAI, across the entire software development lifecycle from conceptualization to deployment — using SvelteKit to craft highly responsive front-ends and efficient back-ends, leveraging AI to solve complex problems and deliver transformative functionality to users.'
	},
	{
		company: 'BBP Digital',
		role: 'Full-stack Developer',
		employment: 'Full-time',
		period: 'June 2019 — June 2025',
		location: 'Douala, Cameroon',
		highlights: [
			'Implemented responsive interfaces with a user-friendly experience, working closely with UX designers',
			'Developed the backend with a microservices architecture and integrated APIs',
			'Wrote unit tests and ran code reviews to improve code quality'
		]
	},
	{
		company: 'Workbud',
		role: 'Software Engineer',
		employment: 'Full-time',
		period: 'April 2022 — May 2025',
		location: 'Communauté urbaine de Douala, Littoral, Cameroon',
		highlights: [
			'Project analysis and implementation of responsive, user-friendly interfaces',
			'Collaborated closely with developers and UX designers; wrote unit and integration tests',
			'Ran code reviews to improve code quality and mentored less experienced developers',
			'Implemented the backend with a microservices architecture and integrated APIs',
			'Re-designed the user interface of Node-RED, a no-code/low-code automation platform',
			'Deployed and operated services on AWS EC2'
		]
	},
	{
		company: 'Numerica Ideas',
		role: 'Technical Writer',
		employment: 'Part-time',
		period: 'December 2022 — January 2025',
		location: 'Douala VI, Littoral, Cameroon',
		workMode: 'Remote',
		highlights: [
			'Wrote in-depth technical articles putting AWS cloud services in the spotlight, including "Lambda Cold Starts Optimization Strategies", "Serverless Visual Design with AWS Application Composer" and "Lambda Performance Improvement with SnapStart"',
			'Presented innovative serverless and cloud architecture solutions',
			'Coordinated internal community activities and contributed to the NumericaIdeas community'
		]
	}
];
