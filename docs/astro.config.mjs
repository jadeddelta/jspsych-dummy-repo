// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	trailingSlash: 'never',
	integrations: [
		starlight({
			title: 'jsPsych',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jspsych/jsPsych' }],
			sidebar: [
				{ label: 'Tutorials', collapsed: true, autogenerate: { directory: 'tutorials' } },
				{ label: 'Overview', collapsed: true, autogenerate: { directory: 'overview' } },
				{ label: 'Plugins', collapsed: true, autogenerate: { directory: 'plugins' } },
				{ label: 'Extensions', collapsed: true, autogenerate: { directory: 'extensions' } },
				{ label: 'Reference', collapsed: true, autogenerate: { directory: 'reference' } },
				{ label: 'Developers', collapsed: true, autogenerate: { directory: 'developers' } },
				{ label: 'Support', collapsed: true, autogenerate: { directory: 'support' } },
				{ label: 'About', collapsed: true, autogenerate: { directory: 'about' } },
				{ label: 'Newsletter', collapsed: true, autogenerate: { directory: 'newsletter' }}
			],
		}),
	],
});
