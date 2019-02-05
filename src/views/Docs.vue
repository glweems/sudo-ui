<template>
	<div class="docs">
		<SudoSidebar v-if="sidebarOpen" title="title" :items="sidebarData"/>
		<div class="content">
			<div class="example">
				<h1>Hero</h1>
				<h4>Hero Component Settings</h4>
				<SudoHero title="Hero Component"/>
			</div>
			<div class="example">
				<h1>SudoList</h1>
				<h4>Hero Component Settings</h4>
				<SudoList :items="demo.SudoList.data.items"/>
			</div>
			<div class="example">
				<h1>Default Card</h1>
				<SudoCard/>
				<h1>Card with Img</h1>
				<SudoCard :img="pubImg('logo.png')"/>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "Docs",
	data() {
		return {
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
						title: "Title",
						body:
							"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolor! Ipsam enim explicabo necessitatibus est. Laudantium eum, a adipisci ratione, sapiente minus quidem facilis illo distinctio, exercitationem cumque voluptas quod!",
						footer: "Footer"
					}
				}
			}
		};
	},
	methods: {
		pubImg: img => {
			return process.env.BASE_URL + img;
		}
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
</style>