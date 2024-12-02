import fireworks from "$lib/assets/album/fireworks.jpg"
import golden from "$lib/assets/album/golden.jpg"
import illenium from "$lib/assets/album/illenium.jpg"
import mirror from "$lib/assets/album/mirror.jpg"
import painting from "$lib/assets/album/painting.jpg"
import punta from "$lib/assets/album/punta.jpg"
import rose from "$lib/assets/album/rose.jpg";
import shib from "$lib/assets/album/shib.jpg"
import sushibday from "$lib/assets/album/sushibday.jpeg"

import { PageNode, PageEdge, makePage } from "$lib/exports/page-structure"

interface PageMap {
    [key: number]: PageNode
}

const pages: PageMap = {
    0: makePage(0, "Hi bb. Time's been going really... ").addEdge(1, "fast!!").addEdge(2, "slow :("),
    1: makePage(1, "That's right :p. I can't believe you're 24. Remember this?").addEdge(3, "aww").addEdge(4, "eww").addImage(rose),
    2: makePage(2, "I know you're joking. -1 points though.").addEdge(3, "->>>"),
    3: makePage(3, "We've travelled the world together").addEdge(5, "->").addImage(shib),
    4: makePage(4, "-1 point >:( I think we're super cute together.").addEdge(5, "I agree").addImage(sushibday),
    5: makePage(5, "We've eaten at way too many restaurants").addEdge(6, "yum, whatever, next").addEdge(7, "show me more"),
    6: makePage(6, "We've cried at garrix at least once (more coming)").addEdge(8, "😭").addImage(illenium).addImage(fireworks),
    7: makePage(7, "BIG BACK").addEdge(6, "I'm fat"),
    8: makePage(8, "I love you Christy.")
}

export { pages }