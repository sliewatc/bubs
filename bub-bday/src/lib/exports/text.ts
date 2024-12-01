

class PageEdge {
    targetId: number;
    text: string;

    public constructor(targetId: number, text: string) {
        this.targetId = targetId;
        this.text = text;
    }
}

class PageNode {
    id: number;
    text: string;
    imagePath?: string;
    nextOptions?: PageEdge[] = []

    public constructor(id: number, text: string, imagePath?: string, nextOptions?: PageEdge[]) {
        this.id = id;
        this.imagePath = imagePath;
        this.text = text;
        this.nextOptions = this.nextOptions
    }

    public addEdge(target: number, text: string): PageNode {
        if (this.nextOptions === undefined) this.nextOptions = []
        this.nextOptions.push(new PageEdge(target, text))
        return this;
    }

    public updateImage(imagePath: string): PageNode {
        this.imagePath = imagePath;
        return this;
    }
}

function makePage(id: number, text: string, imagePath?: string): PageNode {
    return new PageNode(id, text)
}

interface PageMap {
    [key: number]: PageNode
}

const pages : PageMap = {
    0: makePage(0, "Hi bb. Time's been going really... ").addEdge(1, "fast!!").addEdge(2, "slow :("),
    1: makePage(1, "That's right :p. I can't believe you're 24. Remember this?").addEdge(3, "aww").addEdge(4, "eww").updateImage("/"),
    2: makePage(2, "I know you're joking. -1 points though.").addEdge(3, "->>>"),
    3: makePage(3, "We've travelled the world together").addEdge(5,"->"),
    4: makePage(4, "-1 point >:( I think we're super cute together.").addEdge(5, "I agree"),
    5: makePage(5, "We've eaten at way too many restaurants").addEdge(6, "yum, whatever, next").addEdge(7, "show me more"),
    6: makePage(6, "We've cried at garrix at least once (more coming)").addEdge(8, "😭"),
    7: makePage(7, "BIG BACK").addEdge(6, "I'm fat"),
    8: makePage(8, "I love you Christy.")
}

export { PageEdge, PageNode, pages }