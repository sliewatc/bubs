<script lang="ts">
    import { pages } from "$lib/exports/text";
    import { base } from "$app/paths";

    let { pageNum } = $props();

    let currentPage = $derived(pages[pageNum]);
    let text: string = $derived(currentPage.text);
    let imagePaths = $derived(currentPage.imagePaths);
    let nextOptions = $derived(currentPage.nextOptions);
</script>

<flipwrapper>
    <div class="shared received">
        <p>{text}</p>
    </div>
    {#if imagePaths !== undefined}
        <div class="imagescroller">
            {#each imagePaths as path: string}
                <img src={path} class="textimg" alt="n/a" />
            {/each}
        </div>
    {/if}
    {#if nextOptions !== undefined}
        {#each nextOptions as option: PageEdge}
            <a href="{base}/quiz/{option.targetId}" class="sent">
                <div class="shared sent">{option.text}</div>
            </a>
        {/each}
    {/if}
</flipwrapper>

<style>
    flipwrapper {
        margin: 0 10vw 0 10vw;
        display: flex;
        flex-direction: column;

        a {
            text-decoration: none;
        }
    }
    .shared {
        --sentColor: #58b1f0;
        --receiveColor: #f6f6f6;
        --bg: rgb(255, 198, 236);
        position: relative; /* Setup a relative container for our psuedo elements */
        max-width: 255px;
        margin-bottom: 15px;
        padding: 10px 20px;
        line-height: 24px;
        word-wrap: break-word; /* Make sure the text wraps to multiple lines if long */
        border-radius: 25px;
        text-shadow: unset;

        &:hover {
            --sentColor: #32a3f4;
        }

        &:before {
            width: 20px;
        }
        &:after {
            width: 26px;
            background-color: var(--bg); /* All tails have the same bg cutout */
        }

        &:before,
        &:after {
            position: absolute;
            bottom: 0;
            height: 25px; /* height of our bubble "tail" - should match the border-radius above */
            content: "";
        }
        p {
            margin: 0;
            font-size: 1em;
        }
    }
    .sent {
        align-self: flex-end;
        color: white;
        background: var(--sentColor);
        text-align: left;
        &:before {
            right: -7px;
            background-color: var(--sentColor);
            border-bottom-left-radius: 16px 14px;
        }

        &:after {
            right: -26px;
            border-bottom-left-radius: 10px;
        }
    }
    .received {
        align-self: flex-start;
        color: black;
        background: var(--receiveColor);
        margin-bottom: 20px;
        text-align: left;

        &:before {
            left: -7px;
            background-color: var(--receiveColor);
            border-bottom-right-radius: 16px 14px;
        }

        &:after {
            left: -26px;
            border-bottom-right-radius: 10px;
        }
    }
    .textimg {
        max-width: 40vw;
        max-height: 40vh;
        height: auto;
        width: auto;
        align-self: flex-end;
        margin-bottom: 20px;
        border-radius: 10px;
    }
    .imagescroller {
        align-self: flex-start;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        max-width: 80vw;

        img {
            margin-right: 10px;

            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>
