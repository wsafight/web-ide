import CompilerIDE from './CompilerIDE.svelte';

const app = new CompilerIDE({
	target: document.body,
	props: {
		keywords: [
			'let',
			'if'
		]
	}
});

export default app;