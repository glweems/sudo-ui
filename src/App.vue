<template>
	<div id="app">
		<!-- Navbar -->
		<Navbar :brand="navbar.data.brand"/>
		<!-- Sidebar -->
		<Sidebar :sections="sidebar.data.sections"/>
		<!-- Examples -->
		<div class="content">
			<Example :key="hero.name" :name="hero.name" :desc="hero.desc">
				<Hero :title="hero.data.title" :subtitle="hero.data.subtitle" :msg="hero.data.msg"/>
			</Example>
			<Example :key="list.name" :name="list.name" :desc="list.desc">
				<List :items="list.data.items"/>
			</Example>
			<Example :key="card.name" :name="card.name" :desc="card.desc">
				<Card
					:header="card.data.header"
					:title="card.data.title"
					:body="card.data.body"
					:img="card.data.img"
					:footer="card.data.footer"
				/>
			</Example>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			navbar: {
				name: "Navbar",
				data: {
					brand: {
						name: "Sudo-Ui",
						link: "/"
					}
				}
			},
			sidebar: {
				data: {
					sections: {
						installation: {
							link: "/",
							items: ["Step 1", "Step 2"]
						},
						components: {
							link: "/",
							items: ["Navbar", "Sidebar", "Hero", "List", "Card"]
						}
					}
				}
			},
			hero: {
				name: "Hero",
				desc: "This is a Hero Component",
				data: {
					title: "This is a Hero Component",
					subtitle: "subtitle",
					msg: "This is the message for the Hero component."
				}
			},
			list: {
				name: "List",
				desc: "this is a list component",
				props: {
					items: {
						type: "Array"
					}
				},
				data: { items: ["Item 1", "Item 2", "Item 3"] }
			},
			card: {
				name: "Card",
				desc: "This is a card Component",
				data: {
					header: "This is a card header",
					title: "This is a card",
					body: "This is some random text for the card body",
					footer: "This is a card footer",
					img: require("@/assets/logo.png")
				}
			}
		};
	}
};
</script>

<style lang="scss" scoped>
	@import "@/scss/sudo-ui.scss";
	#app {
		display: grid;
		grid-template-columns: 20% 80%;
		justify-content: space-between;
		grid-row-gap: 10px;
		max-width: 100vw;
	}

	.navbar {
		grid-column: 1 / span 2;
	}

	.content {
		width: 80%;
		justify-self: center;
		margin: 0 1em 0 1em;
	}
</style>

