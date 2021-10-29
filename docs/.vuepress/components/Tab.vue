<template>
	<section>
		<input :id="parentId + '-' + id" :name="parentId" type="radio" :checked="active">
		<label :for="parentId + '-' + id" class="tab-link btn btn-outline-secondary" v-html="name" v-on:click="this.setTab()"></label>
		<div class="tab"><slot /></div>
	</section>
</template>

<script>
	export default {
		props: {
			name: { required: true },
			default: { default: false },
			os: { default: undefined }
		},

		data: () => ({
			active: false,
			platforms: {
				"Win32": "windows",
				"MacIntel": "macos",
				"MacPPC": "macos"
			}
		}),

		computed: {
			id() { return this.name.toLowerCase().replace(/ /g, '-'); },
			parentId() { return this.$parent.$parent.$props.id.toLowerCase().replace(/ /g, '-'); },
			parentIdSafe() { return this.parentId.replace(/[\-\/\\^$*+?.()|[\]{}]/g, "\\$&"); }
		},

		created() {
			this.active = this.default === "";
		},

		mounted() {
			// Try to get tab from URL
			const urlTab = decodeURI(window.location.href).match(RegExp(`[?&]${this.parentIdSafe}=(.*?)(?=\&|#|$)`));
			if(urlTab && urlTab.length > 1) {
				if(urlTab[1] === this.id)
					this.active = true;
			} else {
				// Try to get tab for OS
				if(this.os === this.platforms[navigator.platform])
					this.active = true;
				else if(this.os === "other" && !this.$parent.$parent.$slots.default().some(r => r.props.os === this.platforms[navigator.platform]))
					this.active = true;
			}
		},

		methods: {
			setTab() {
				let url = window.location.href;
				if(url.match(RegExp(`[?&]${this.parentIdSafe}=`))) { // Already has a tab param
					url = url.replace(RegExp(`([?&]${this.parentIdSafe}=)(.*?)(?=\&|#|$)`), "$1" + this.id)
				} else if(url.match(/\?/)) { // Already has other search params
					url = url.replace(/[?&].*?(?=#|$)/, `$&&${this.parentId}=` + this.id);
				} else { // No search params
					url = url.replace(/(?=#|$)/, `?${this.parentId}=` + this.id);
				}
	
				if(url != window.location.href) { // Don't update if not changed
					history.pushState({}, "", encodeURI(url));
				}
			}
		}
	};
</script>
