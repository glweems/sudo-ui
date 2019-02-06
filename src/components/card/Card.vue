
<template>
	<div class="card">
		<div v-if="header" class="card-header">
			<span>{{header}}</span>
		</div>
		<div class="card-content">
			<div v-if="img" class="card-img">
				<img :src="img">
			</div>
			<div class="card-body">
				<p class="card-title">{{title}}</p>
				<span>{{body}}</span>
			</div>
		</div>
		<div v-if="footer" class="card-footer">
			<span>{{footer}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "Card",
	props: {
		header: { type: String, required: false },
		title: { type: String, required: false },
		body: { type: String, required: false },
		footer: { type: String, required: false },
		img: { type: String, required: false }
	},
	data() {
		return {
			publicPath: process.env.BASE_URL
		};
	}
};
</script>

<style lang="scss" scoped>
	@import "@/scss/sudo-ui.scss";

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
		}
		.card-header {
			font-size: 110%;
			font-weight: bold;
			background-color: rgba(0, 0, 0, 0.03);
			border-bottom: 1px solid rgba(0, 0, 0, 0.125);
			border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
			box-sizing: border-box;
			margin-bottom: 0;
			padding: 0.75rem 1.25rem;
			display: flex;
			align-items: center;
			.icon {
				display: none;
				transition: all 50ms ease-in-out;
				justify-self: flex-end;
				&:hover {
					transform: scale(1.025);
				}
			}
		}
		.card-title {
			font-weight: bold;
			font-size: 1.125em;
		}
		.card-body {
			box-sizing: border-box;
			flex: 1 1 auto;
			padding: 1.25rem;
		}
		.card-link {
			background-color: transparent;
			box-sizing: border-box;
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
		}
		.card-footer {
			font-size: 110%;
			font-weight: bold;
			background-color: rgba(0, 0, 0, 0.03);
			border-bottom: 1px solid rgba(0, 0, 0, 0.125);
			border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
			box-sizing: border-box;
			margin-bottom: 0;
			padding: 0.75rem 1.25rem;
			display: flex;
			align-items: center;
			.icon {
				display: none;
				transition: all 50ms ease-in-out;
				justify-self: flex-end;
				&:hover {
					transform: scale(1.025);
				}
			}
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