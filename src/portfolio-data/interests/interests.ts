import images from './images';

export interface Interest {
    name: string;
    description: string;
    imageUrl: string;
}

const interests: Interest[] = [
    {
        name: 'Game Development',
        description: `Sci-fi, strategy, RPGs and retro.`,
        imageUrl: images.gameDev,
    },
    {
        name: 'Reading',
        description: `
                Programmer blogs, science books, biographies.
            `,
        imageUrl: images.reading,
    },
    {
        name: 'Acoustic & Electric Guitar',
        description: `
                Alternative/Indie music.
            `,
        imageUrl: images.guitar,
    },
    {
        name: 'Lifting',
        description: `
                Clean & jerks, snatches and powerlifting.
            `,
        imageUrl: images.powerlifting,
    },
    {
        name: 'Electronics',
        description: `
                Raspberry pi, home automation.
            `,
        imageUrl: images.electronics,
    },
    {
        name: 'Listening to Podcasts',
        description: `
                Lex Fridman, Andrew Huberman, Jocko Willink, Sam Harris.
            `,
        imageUrl: images.podcasts,
    },
    {
        name: 'Tutoring',
        description: `
                Programming, physics and maths.
            `,
        imageUrl: images.teaching,
    },
    {
        name: 'Gardening',
        description: `
                
            `,
        imageUrl: images.gardening,
    },
    {
        name: 'Origami',
        description: `
                Modular origami.
            `,
        imageUrl: images.origami,
    },
];

export default interests;
