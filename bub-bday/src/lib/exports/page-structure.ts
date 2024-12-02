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
    imagePaths?: string[];
    nextOptions?: PageEdge[] = []

    public constructor(id: number, text: string, imagePaths?: string[], nextOptions?: PageEdge[]) {
        this.id = id;
        this.imagePaths = imagePaths;
        this.text = text;
        this.nextOptions = this.nextOptions
    }

    public addEdge(target: number, text: string): PageNode {
        if (this.nextOptions === undefined) this.nextOptions = []
        this.nextOptions.push(new PageEdge(target, text))
        return this;
    }

    public addImage(imagePath: string): PageNode {
        if (this.imagePaths === undefined) this.imagePaths = []
        this.imagePaths.push(imagePath);
        return this;
    }
}

function makePage(id: number, text: string, imagePath?: string[]): PageNode {
    return new PageNode(id, text)
}

export { PageEdge, PageNode, makePage }