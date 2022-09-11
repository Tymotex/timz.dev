interface GradientTheme {
    name: string;
    css: string;
}

// Various aesthetic gradients to apply to the background.
// Mustn't be empty.
const gradientThemes: GradientTheme[] = [
    {
        name: "🌊 Red Ocean",
        css: `
            linear-gradient(90deg, rgb(88, 24, 40), rgb(20 37 53))
        `,
    },
    {
        name: "🌙 Twilight",
        css: `linear-gradient(70deg, #200122, #4f0202)`,
    },
    {
        name: "🐬 Subnautica",
        css: `linear-gradient(120deg, #000428, #183147)`,
    },
];

export default gradientThemes;
