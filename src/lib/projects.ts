export interface Project {
	name: string;
	href: string;
	/** Authored HTML (bold/links) — trusted static content, not user input. */
	description: string;
}

export const projects: Project[] = [
	{
		name: 'Upload S3 Service',
		href: 'https://github.com/messaismael/send-email-service',
		description:
			'A service to upload file to a <strong>AWS S3 Bucket</strong> using <strong>NodeJS</strong>, <strong>ExpressJs</strong> and <strong>TypeScript</strong>.'
	},
	{
		name: 'Send Email Service',
		href: 'https://github.com/messaismael/send-email-service',
		description:
			"As his name guide, it's a service that allows you to send Emails. In short it's a <strong>Lambda</strong> function that sends Emails using <strong>AWS SES</strong>."
	},
	// {
	// 	name: 'Fashion Style',
	// 	href: 'https://github.com/messaismael/fashion-style',
	// 	description:
	// 		'Fashion style is and platform for sales online that that is bootstrapped with <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">Create React App</a>, using Redux, Bootstrap and Strippe.js.'
	// },
	{
		name: 'FocusTimer',
		href: 'https://github.com/messaismael/Pomodoro-Clock',
		description:
			"It's a cutomized Pomodoro Clock. Available on linux, windows, chrome extension and as <a href=\"https://codepen.io/messaismael/full/BaaRQWa\" target=\"_blank\" rel=\"noopener noreferrer\">web application</a>."
	},
	// {
	// 	name: 'Native calculator',
	// 	href: 'https://github.com/messaismael/native-calculator',
	// 	description: 'Simple calculator in React Native.'
	// },
	{
		name: 'URL-shortener-Microservice',
		href: 'https://github.com/messaismael/URL-Shortener-Microservice',
		description: 'A microservice that generates a short url for given url.'
	},
	// {
	// 	name: 'Metric-converter',
	// 	href: 'https://github.com/messaismael/FCC-Metric-converter',
	// 	description:
	// 		'A microservice that allows you to convert kg(kilograms), l(liters), km(kilometers) to lbs(pounds), gal(gallons), mi(mile) respectively.'
	// },
	// {
	// 	name: 'Quote-machine',
	// 	href: 'https://github.com/messaismael/quote-machine-electronJS',
	// 	description:
	// 		'An application that generates a random quote on click, its executable is generated with ElectronJS.'
	// },
	// {
	// 	name: 'Issues-tracker',
	// 	href: 'https://github.com/messaismael/Fcc-issue-tracker',
	// 	description: 'A microservice that allows developers to manage issues.'
	// },
	// {
	// 	name: 'Heat-map',
	// 	href: 'https://github.com/messaismael/FCC-Heat-map',
	// 	description: 'A data visualization application for temperatures.'
	// },
	// {
	// 	name: 'Bar-chart',
	// 	href: 'https://github.com/messaismael/Bar-chart',
	// 	description: 'A data visualization for United States GDP.'
	// }
];
