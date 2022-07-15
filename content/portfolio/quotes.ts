export interface Quote {
    quote: string;
    author: string;
    source?: string;
    url?: string;
}

const quoteBank: Quote[] = [
    {
        quote: "Software and cathedrals are much the same – first we build them, then we pray.",
        author: "Sam Redwine",
    },
    {
        quote: "C programmers never die. They are just cast into void.",
        author: "Alan Perlis",
    },
];

export const getRandomQuote = (): Quote => {
    return quoteBank[Math.floor(Math.random() * quoteBank.length)];
};
