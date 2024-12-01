<script lang="ts">
    import { pages } from "$lib/exports/text";
    import { base } from "$app/paths";

    let { pageNum } = $props();

    let currentPage = $derived(pages[pageNum]);
    let text: string = $derived(currentPage.text);
    let imagePath = $derived(currentPage.imagePath);
    let nextOptions = $derived(currentPage.nextOptions);
</script>

<flipwrapper>
    <p>{text}</p>
    <br />
    {#if imagePath !== undefined}
        <!-- <img src={imagePath} class="img" alt="n/a" /> -->
    {/if}
    <br />
    {#if nextOptions !== undefined}
        {#each nextOptions as option: PageEdge}
            <a href="{base}/quiz/{option.targetId}">
                {option.text}
            </a>
        {/each}
    {/if}
</flipwrapper>

<style>
    flipwrapper {
        margin: 0 10vw 0 10vw;
    }
</style>
