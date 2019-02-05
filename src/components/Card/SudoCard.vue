
<template>
	<div class="card">
		<div v-if="header" class="header">{{header}}</div>
		<div v-if="img" class="img">
			<img :src="img">
		</div>
		<div class="body">
			<p class="title">Default Card</p>
			<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "SudoCard",
	props: {
		header: { type: String, required: false },
		title: { type: String, required: false },
		body: { type: String, required: false },
		footer: { type: String, required: false },
		img: { type: String, required: false }
	}
	// components: { CardImg }
};
</script>

<style lang="scss" scoped>
	@import "@/scss/app.scss";
	.card {
		margin: 1em 0 1em 0;
		background-clip: border-box;
		@include background(dark);
		border: 1px solid rgba(0, 0, 0, 0.125);
		border-radius: 0.25rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		min-width: 0;
		overflow-wrap: break-word;
		position: relative;
		.card-img {
			text-align: center;
			width: 100%;
			margin-bottom: 1em;
			position: relative;
			.overlay-link {
				position: absolute;
				right: 0;
				left: 0; // top: 20px;
				top: 40%;
			}
		}
		.header {
			background-color: rgba(0, 0, 0, 0.03);
			border-bottom: 1px solid rgba(0, 0, 0, 0.125);
			border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
			box-sizing: border-box;
			margin-bottom: 0;
			padding: 0.75rem 1.25rem;
			display: flex;
			align-items: center;
			justify-content: space-between; // @include padding-x(1em); // @include padding-top(.75em); // @include padding-bottom(.75em); // @include border-bottom(white);
			.icon {
				display: none;
				transition: all 50ms ease-in-out;
				justify-self: flex-end;
				&:hover {
					transform: scale(1.025);
				}
			}
		}
		.title {
			// @include padding-x(1.25em);
			// @include padding-bottom(.5em);
			font-weight: bold;
			font-size: 1.125em;
		}
		.body {
			box-sizing: border-box;
			flex: 1 1 auto;
			padding: 1.25rem;
		}
		.link {
			background-color: transparent;
			box-sizing: border-box;
			// @include color(primary);
			margin-left: 1.25rem;
			text-decoration: none;
			font-weight: bold;
			padding-top: 1em !important;
		}
		.link:nth-of-type(1) {
			margin-left: 0;
		}
		button {
			align-self: flex-end;
			// @include margin-x(1em);
			// @include margin-bottom(1em);
		}
		.footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
			// @include padding-x(1em);
			// @include padding-top(.75em);
			// @include padding-bottom(.75em);
			// @include border-top(white);
			.icon {
				transition: all 50ms ease-in-out;
				justify-self: flex-end;
				&:hover {
					transform: scale(1.025);
				}
			}
		}
	}
</style>