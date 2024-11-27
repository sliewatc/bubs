<script>
    let { children } = $props();
</script>

<master>
    {@render children()}
</master>

<style lang="postcss">
    :global(html) {
        background-color: rgb(255, 198, 236);
        width: 100vw;
        display: block;
    }
</style>
