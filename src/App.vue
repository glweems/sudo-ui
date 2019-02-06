<template>
	<div id="app">
		<Example :name="hero.name" :desc="hero.desc">
			<Hero :title="hero.data.title" :subtitle="hero.data.subtitle" :msg="hero.data.msg"/>
		</Example>
		<Example :name="list.name" :desc="list.desc">
			<List :items="list.data.items"/>
		</Example>
		<Example :name="card.name" :desc="card.desc">
			<Card
				:header="card.data.header"
				:title="card.data.title"
				:body="card.data.body"
				:img="card.data.img"
				:footer="card.data.footer"
			/>
		</Example>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
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

<style lang="scss">
	#app {
		max-width: 100%;
		margin: 1em;
	}
</style>

