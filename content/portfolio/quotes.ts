export interface QuoteData {
    quote: string;
    author?: string;
    source?: string;
    url?: string;
}

// TODO: Refactor this into a set. It certainly does not need to be an array.
const quoteBank: QuoteData[] = [
    {
        quote: "Software and cathedrals are much the same – first we build them, then we pray.",
        author: "Sam Redwine",
    },
    {
        quote: "C programmers never die. They are just cast into void.",
        author: "Alan Perlis",
    },
    {
        quote: "Without requirements or design, programming is the art of adding bugs to an empty text file.",
        author: "Louis Srygley",
    },
    {
        quote: "What's the object-oriented way to become wealthy? Inheritance.",
        source: "https://www.hongkiat.com/blog/programming-jokes/",
    },
    {
        quote: "What do computers and air conditioners have in common?? They both become useless when you open windows.",
        source: "https://www.hongkiat.com/blog/programming-jokes/",
    },
    {
        quote: "A programmer had a problem. He decided to use Java. He now has a ProblemFactory.",
        source: "https://www.hongkiat.com/blog/programming-jokes/",
    },
    {
        quote: "How did the programmer die in the shower? He read the shampoo bottle instructions: 'Lather. Rinse. Repeat.'",
        source: "https://www.devtopics.com/best-programming-jokes/",
    },
    {
        quote: "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
        source: "https://www.devtopics.com/best-programming-jokes/",
    },
    {
        quote: "What’s the best thing thing about UDP jokes? I don’t care if you get them.",
    },
    {
        quote: "Some people, when confronted with a problem, think, 'I know, I'll use threads' - and then two they hav erpoblesms.",
        source: "https://www.reddit.com/r/AskReddit/comments/1kvhmz/whats_the_best_programming_joke_that_you_know/",
    },
    {
        quote: 'A programmer is told to "go to hell", he finds the worst part of that statement is the "go to"',
        source: "https://www.reddit.com/r/AskReddit/comments/2kvhmz/whats_the_best_programming_joke_that_you_know/",
    },
    {
        quote: "An SEO expert walks into a bar, pub, liquor store, brewery, alcohol, beer, whiskey, vodka.",
        source: "https://www.reddit.com/r/AskReddit/comments/2kvhmz/whats_the_best_programming_joke_that_you_know/",
    },
    {
        quote: "An SEO expert walks into a bar, pub, liquor store, brewery, alcohol, beer, whiskey, vodka.",
        source: "https://www.reddit.com/r/AskReddit/comments/2kvhmz/whats_the_best_programming_joke_that_you_know/",
    },
    {
        quote: "Why doesn't C++ have automatic garbage collection? Because there would be nothing left.",
        source: "https://www.reddit.com/r/AskReddit/comments/2kvhmz/whats_the_best_programming_joke_that_you_know/",
    },
    {
        quote: "There are two hard problems in computer science: cache invalidation, naming things, and off-by-one errors.",
    },
];

export const getRandomQuote = (excludeQuote?: QuoteData): QuoteData => {
    // If an excludeQuote is provided, then ensure not to select it next.
    const quotes =
        excludeQuote !== undefined
            ? quoteBank.filter(
                  (currQuote) => currQuote.quote != excludeQuote.quote,
              )
            : quoteBank;
    return quotes[Math.floor(Math.random() * quotes.length)];
};
