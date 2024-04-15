import Highlight, { defaultProps } from "prism-react-renderer";
import ContentContainer from "src/components/Container/ContentContainer";
import { SectionDivider } from "src/components/Divider";
import { ImageGallery } from "src/components/ImageGallery";
import UnorderedList from "src/components/UnorderedList";

interface Props {}

const AboutMe: React.FC<Props> = () => {
    return (
        <>
            <ContentContainer maxWidth={"50rem"} padding={"0 32px"}>
                <p>
                    Hi! I'm Tim, a software engineer at Google and a computer
                    science graduate from the University of New South Wales
                    (UNSW). I love working on large-scale computing
                    infrastructure and I enjoy working on web apps and game
                    development outside of work.
                </p>
                <p>
                    I've interned at Google as a software engineering intern in
                    a site reliability engineering team and I have also taught
                    the data structures and algorithms course,{" "}
                    <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP2521?year=2021">
                        COMP2521
                    </a>
                    , at UNSW for 3 semesters. Software engineering is an
                    absolute blast for me and I enjoy{" "}
                    <a href="https://wiki.timz.dev">sharing knowledge </a>
                    with others 🤓.
                </p>
            </ContentContainer>
            <SectionDivider text="Hobbies & Interests" />
            <ContentContainer
                maxWidth={"50rem"}
                padding={"12px 32px 12px 32px"}
            >
                <p>What I enjoy outside of programming 🕹️</p>
                <UnorderedList>
                    <li>Game development & mod authoring.</li>
                    <li>Guitar &ndash; mainly fingerstyle on acoustic.</li>
                    <li>Powerlifting.</li>
                    <li>Electronics projects.</li>
                    <li>Origami.</li>
                    <li>Mechanical keyboards.</li>
                    <li>
                        <a href="https://www.reddit.com/r/unixporn/">
                            UNIX ricing
                        </a>
                        .
                    </li>
                    <li>Murdering innocent houseplants.</li>
                </UnorderedList>
                <ImageGallery
                    images={[
                        {
                            src: "/images/profile/battlestation-1.jpg",
                            alt: "Blue battlestation",
                        },
                        {
                            src: "/images/profile/origami-1.jpg",
                            alt: "Origami rose",
                        },
                        {
                            src: "/images/profile/mechanical-keyboard.jpg",
                            alt: "Mechanical keyboard",
                        },
                        {
                            src: "/images/profile/plants-1.jpg",
                            alt: "Succulents",
                        },
                        {
                            src: "/images/profile/unix-ricing.png",
                            alt: "UNIX ricing",
                        },
                    ]}
                    width={300}
                    height={240}
                />
            </ContentContainer>
            <br />
            <SectionDivider text="Developer Stats" />
            <ContentContainer>
                <div role="presentation">
                    <img
                        src="https://github-readme-stats.vercel.app/api/wakatime?username=Tymotex&langs_count=5&custom_title=Top%205%20Languages&hide=Other&theme=nightowl"
                        alt="Top Languages from WakaTime"
                        style={{
                            margin: "24px auto",
                            display: "block",
                            maxWidth: "100%",
                        }}
                    />
                </div>
                <div role="presentation">
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=Tymotex&show_icons=true&theme=nightowl"
                        alt="Tymotex GitHub stats"
                        style={{
                            margin: "0 auto",
                            display: "block",
                            maxWidth: "100%",
                        }}
                    />
                </div>
            </ContentContainer>
            <ContentContainer maxWidth={950} padding={"0px 0px 12px 0px"}>
                <Highlight
                    {...defaultProps}
                    code={`
$ neofetch  # My main workstation specs ;)

                   -                     tym@arch
                  .o+                    --------
                  ooo/                   OS ➜ Arch Linux x86_64
                 +oooo:                  ├ Kernel ➜ 5.15.55-1-lts
                +oooooo:                 ├ Uptime ➜ 25 mins
               -+oooooo+:                └ Packages ➜ 1477 (pacman), 6 (flatpak)
              /:-:++oooo+:
             /++++/+++++++:              PC ➜ arch
            /++++++++++++++:             ├ CPU ➜ Ryzen 5 5600X (12) @ 3.7GHz [23.3°on]
           /+++ooooooooooooo/            ├ Memory ➜ 6404MiB / 31998MiB (20%)
         ./ooosssso++osssssso+           ├ GPU ➜ NVIDIA GeForce GTX 1060 6GB
        .oossssso-    /ossssss+          └ Resolution ➜ 2560x1440, 3440x1440, 2560x1440
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.       WM ➜ i3
     /ossssssss/        +ssssooo/-       ├ Bar ➜ Polybar
    /ossssso+/:-        -:/+osssso+-     └ Compositor ➜ Compton
   +sso+:-                   .-/+oso:
  ++:.                            -/+/   TTY ➜ alacritty
 .                                   /   ├ Shell ➜ zsh 5.9                        
                    `}
                    language="bash"
                >
                    {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                    }) => (
                        <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span
                                            {...getTokenProps({
                                                token,
                                                key,
                                            })}
                                        />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </ContentContainer>
        </>
    );
};

export default AboutMe;
