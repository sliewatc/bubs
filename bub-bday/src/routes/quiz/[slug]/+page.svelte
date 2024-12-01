<script lang="ts">
    import Flipper from "./flipper.svelte";
    import type { PageData } from './$types';

	let { data } : { data: PageData } = $props();
    let page = $derived(data.slug)
</script>

<Flipper pageNum={page}/>
