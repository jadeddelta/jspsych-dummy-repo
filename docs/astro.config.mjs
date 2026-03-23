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
				{ label: 'Tutorials', autogenerate: { directory: 'tutorials' } },
				{ label: 'Overview', autogenerate: { directory: 'overview' } },
				{ label: 'Plugins', autogenerate: { directory: 'plugins' } },
				{ label: 'Extensions', autogenerate: { directory: 'extensions' } },
				{ label: 'Reference', autogenerate: { directory: 'reference' } },
				{ label: 'Developers', autogenerate: { directory: 'developers' } },
				{ label: 'Support', autogenerate: { directory: 'support' } },
				{ label: 'About', autogenerate: { directory: 'about' } },
				{ label: 'Newsletter', autogenerate: { directory: 'newsletter' }}
			],
		}),
	],
});
