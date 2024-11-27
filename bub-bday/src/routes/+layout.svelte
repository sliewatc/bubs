<script>
    let { children } = $props();
</script>

<master>
    {@render children()}
</master>

<style lang="postcss">
    :global(html) {
        background-color: rgba(255, 167, 224, 1);
        width: 100vw;
        display: block;
    }
</style>
