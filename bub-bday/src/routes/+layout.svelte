<script>
    import tokyo from "$lib/assets/tokyo.png";
    import wavy from "$lib/assets/wavy.png";
    import tall from "$lib/assets/tall.png";
    let { children } = $props();
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
    />
</svelte:head>
<master>
    <welcome>
        {@render children()}
    </welcome>
    <img src={tall} alt="bubu" class="permimg" id="tall" />
    <img src={wavy} alt="bubu" class="permimg" id="wavy" />
    <img src={tokyo} alt="bubu" class="permimg" id="tokyo" />
</master>

<style lang="postcss">
    master {
        display: block;
        height: 100vh;
    }
    welcome {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
    #tall {
        right: 90px;
        top: 10px;
        animation-delay: -6s;
    }
    #wavy {
        top: 10px;
        left: 10px;
        animation-delay: -3s;
    }
    #tokyo {
        bottom: 10px;
        left: 40px;
        animation-delay: -8s;
    }
    .permimg {
        display:inline;
        position: absolute;
        height: auto;
        width: auto;
        max-height: 30vh;
        transform: ro;
        -webkit-animation: spin 10s linear infinite;
        -moz-animation: spin 10s linear infinite;
        -o-animation: spin 10s linear infinite;
        animation: spin 10s linear infinite;
        z-index: -1;
    }
    :global(html) {
        background-color: rgb(255, 198, 236);
        width: 100vw;
        display: block;
        color: rgb(245, 245, 245);
    }
    :global(body) {
        padding: 0;
        margin: 0;
        overflow: hidden;
        /* cursor: url("$lib/assets/candle.png"), auto; */
        text-align: center;
        font-family: Poppins, Cambria, Cochin, Georgia, Times, "Times New Roman",
            serif;
    }
    :global(a) {
        color: inherit;
        text-underline-offset: 3px;
    }
    :global(h1) {
        color: whitesmoke;
    }

    @-webkit-keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-moz-keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-o-keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>
