interface ShowcaseLink {
    label: string;
    link: string;
}

interface OverlayLink {
    icon: string; // Importing the image to display in the hover overlay
    label: string; // Text to be displayed on hovering over the project image
    link: string; // Hyperlink to open in a new tab when image is clicked
}

export interface Project {
    title: string;
    thumbnail: string;
    // Raw HTML source code for a blog post tied with this project
    description: string;
    technologies: string[];
    furtherLinks: ShowcaseLink[];
    overlay: OverlayLink;
    gif?: string;
    rating: number;
    tags?: string[];
}
