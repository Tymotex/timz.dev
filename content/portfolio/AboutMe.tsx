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
                    Hi! I'm Tim, a final year computer science student at the
                    University of New South Wales (UNSW). I love working on
                    software projects, especially when they're related to
                    frontend/backend development and lower-level infrastructure.
                </p>
                <p>
                    I've interned at Google as a software engineering intern in
                    a site reliability engineering team and I have also taught
                    the data structures and algorithms course,{" "}
                    <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP2521?year=2021">
                        COMP2521
                    </a>
                    , at UNSW for 3 semesters. Software engineering is an
                    absolute blast for me and I enjoy sharing knowledge with
                    others 🤓.
                </p>
            </ContentContainer>
            <SectionDivider text="Hobbies & Interests" />
            <ContentContainer
                maxWidth={"50rem"}
                padding={"12px 32px 12px 32px"}
            >
                <p>What I enjoy outside of programming.</p>
                <UnorderedList>
                    <li>Game development & mod authoring.</li>
                    <li>Guitar &ndash; mainly fingerstyle on acoustic.</li>
                    <li>Powerlifting, even with my frail programmer arms.</li>
                    <li>
                        Gardening (to soothe the soul after dealing with a
                        particularly mind-bending bug).
                    </li>
                    <li>Origami.</li>
                </UnorderedList>
                {/* <ImageGallery
                        images={[
                            {
                                src: "/images/profile/origami-1.png",
                                alt: "Origami rose",
                            },
                            {
                                src: "/images/profile/plants-1.jpg",
                                alt: "Succulents",
                            },
                        ]}
                        width={250}
                        height={150}
                    /> */}
                {/*
                <h2 style={{ marginTop: "32px" }}>
                    My Programming Battlestation
                </h2>
                 <p>
                    Where I churn out <del>buggy</del> software:
                </p>
                <ImageGallery
                    images={[
                        {
                            src: "/images/profile/battlestation-1.jpg",
                            alt: "Blue battlestation",
                        },
                        {
                            src: "/images/profile/battlestation-2.jpg",
                            alt: "Red battlestation",
                        },
                    ]}
                    width={300}
                    height={200}
                /> */}
            </ContentContainer>
            <ContentContainer maxWidth={950} padding={"0px 0px 12px 0px"}>
                <Highlight
                    {...defaultProps}
                    code={`
$ neofetch   # Some information about my main workstation ;)

                   -                     tym@arch 
                  .o+                    -------- 
                 ooo/                    OS: Arch Linux x86_64 
                +oooo:                   Kernel: 5.15.52-1-lts 
               +oooooo:                  Uptime: N/A
               -+oooooo+:                Packages: 1363 (pacman), 6 (flatpak) 
             /:-:++oooo+:                Shell: zsh 5.9 
            /++++/+++++++:               Resolution: 2560x1440, 3440x1440, 2560x1440 
           /++++++++++++++:              WM: i3 
          /+++ooooooooooooo/             Theme: Arc-Dark [GTK2/3] 
         ./ooosssso++osssssso+           Icons: breeze-dark [GTK2/3] 
        .oossssso-/ossssss+              Terminal: alacritty 
       -osssssso.      :ssssssso.        CPU: AMD Ryzen 5 5600X (12) @ 3.700GHz 
      :osssssss/        osssso+++.       GPU: NVIDIA GeForce GTX 1060 6GB 
     /ossssssss/        +ssssooo/-       Memory: 8119MiB / 31998MiB 
   /ossssso+/:-        -:/+osssso+-
  +sso+:-                 .-/+oso:                               
 ++:.                           -/+/                             
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
