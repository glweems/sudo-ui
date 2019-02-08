<template>
	<div class="CodeSnippet">
		<p v-if="title">{{ title }}</p>
		<pre>
<code>
<slot/></code>
		</pre>
	</div>
</template> 

<script>
export default {
	name: "CodeSnippet",
	props: { title: { type: String, required: false } }
};
</script>

 <style lang="scss" scoped>
	pre {
		background: white;
		padding: 0 1rem;
		border-radius: 0.1rem;
		code {
			color: black;
		}
	}
</style>
