import CompilerIDE from './CompilerIDE.svelte';

const app = new CompilerIDE({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;