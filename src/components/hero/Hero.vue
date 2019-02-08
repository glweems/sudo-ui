<template>
	<div :class="active">
		<h1 class="heading">{{ title }}</h1>
		<h3 class="subtitle">{{ subtitle }}</h3>
		<p class="msg">{{ msg }}</p>
	</div>
</template>

<script>
export default {
	name: "Hero",
	props: {
		title: { type: String },
		subtitle: { type: String },
		msg: { type: String },
		left: { type: Boolean },
		right: { type: Boolean }
	},
	beforeMount() {
		this.findOptions();
	},
	data() {
		return {
			active: ["hero"]
		};
	},
	methods: {
		findOptions() {
			if (this.left) {
				this.setOption("left");
			}
			if (this.right) {
				this.setOption("right");
			}
		},
		setOption(option) {
			this.active.push(option);
		}
	}
};
</script>

