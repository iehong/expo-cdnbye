import ExpoCdnbyeModule from "./src/ExpoCdnbyeModule";

interface Cdnbye {
  parseStreamUrl(url: string): string;
}

export default ExpoCdnbyeModule as Cdnbye;
