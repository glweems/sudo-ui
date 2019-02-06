<template>
	<div class="docs">
		<SudoSidebar v-if="sidebarOpen" title="title" :items="sidebarData"/>
		<div class="content">
			<div class="example">
				<h1>Hero</h1>
				<h4>Hero Component Settings</h4>
				<Hero :title="demo.SudoHero.subtitle"/>
			</div>
			<!-- <div class="example">
				<h1>SudoList</h1>
				<h4>Hero Component Settings</h4>
				<SudoList :items="demo.SudoList.data.items"/>
			</div>
			<div class="example">
				<h1>Default Card</h1>
				<SudoCard :title="demo.SudoCard.data.header" :body="demo.SudoCard.data.body"/>
				<h1>Card with Header</h1>
				<SudoCard
					:header="demo.SudoCard.data.header"
					:title="demo.SudoCard.data.title"
					:body="demo.SudoCard.data.body"
				/>
				<h1>Card with Img</h1>
				<SudoCard
					:img="demo.SudoCard.data.img"
					:title="demo.SudoCard.data.title"
					:body="demo.SudoCard.data.body"
				/>
				<h1>Card with Footer</h1>
				<SudoCard
					:title="demo.SudoCard.data.title"
					:body="demo.SudoCard.data.body"
					:footer="demo.SudoCard.data.footer"
				/>
			</div>-->
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "Docs",
	data() {
		return {
			publicPath: process.env.BASE_URL,
			demo: {
				SudoHero: {
					subtitle: "This is the SudoHero Component."
				},
				SudoList: {
					subtitle: "This is the SudoList Component.",
					data: {
						items: ["item 1", "item 2", "item 3", "item 4"]
					}
				},
				SudoCard: {
					subtitle: "This is the SudoList Component.",
					data: {
						header: "SudoCard",
						img: require("@/assets/logo.png"),
						title: "Title",
						body:
							"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolor! Ipsam enim explicabo necessitatibus est. Laudantium eum, a adipisci ratione, sapiente minus quidem facilis illo distinctio, exercitationem cumque voluptas quod!",
						footer: "Footer"
					}
				}
			}
		};
	},
	computed: {
		...mapState(["docs", "sidebarOpen"]),
		sidebarData() {
			let array = [];
			Object.keys(this.demo).forEach(function(key) {
				array.push(key);
			});
			return array;
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "@/scss/app.scss";
	.docs {
		display: flex;
		justify-content: flex-start;
		align-content: flex-start;
		align-items: flex-start;
	}
	.content {
		width: 100%;
		padding: 1em;
	}
	.example {
		padding: 1em;
		border-bottom: 1px solid map-get($colors, muted);
	}
	@include mobile {
		.docs {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-content: flex-start;
			align-items: flex-start;
		}
	}
</style>