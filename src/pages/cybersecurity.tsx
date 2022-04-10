import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { PageBreadcrumbs } from 'src/components/cybersecurity/breadcrumbs';
import { ParallaxBanner } from 'src/components/cybersecurity/parallax-banner';
import styles from '../components/templates/CybersecurityBlog.module.scss';
import { CybersecurityLayout } from '../layouts';
import { Expandable } from 'src/components/expandable';

const CybersecurityBlogs = () => {
    // TODO: tmp, find a better place to store and retrieve this:
    const writeups = [
        { name: 'substitution', path: 'substitution', source: 'COMP6841' },
        { name: 'stonks', path: 'stonks', source: 'picoCTF' },
        { name: 'GET-aHEAD', path: 'get-ahead', source: 'picoCTF' },
        { name: 'Mind Your Ps and Qs', path: 'mind-your-ps-and-qs', source: 'picoCTF' },
        { name: "Static ain't always noise", path: 'static-aint-always-noise', source: 'picoCTF' },
        { name: 'Shuffle', path: 'shuffle', source: 'COMP6841' },
        { name: 'Matryoshka doll', path: 'matryoshka-doll', source: 'picoCTF' },
        { name: 'crackme-py', path: 'crackme-py', source: 'picoCTF' },
        { name: 'tunn3l v1s10n', path: 'tunn3l-v1s10n', source: 'picoCTF' },
        { name: 'Easy Peasy', path: 'easy-peasy', source: 'picoCTF' },
        { name: 'Bus Buddies', path: 'bus-buddies', source: 'COMP6841' },
        { name: 'Sec Edu', path: 'sec-edu', source: 'COMP6841' },
        { name: 'Substitute Teacher', path: 'substitute-teacher', source: 'COMP6841' },
        { name: 'Cookie Monster', path: 'cookie-monster', source: 'COMP6841' },
        { name: 'Insp3ct0r', path: 'insp3ct0r', source: 'picoCTF' },
        { name: 'The Numbers', path: 'the-numbers', source: 'picoCTF' },
        {
            name: 'Wireshark doo dooo do doo...',
            path: 'wireshark-doo-dooo-do-doo',
            source: 'picoCTF',
        },
        { name: 'Easy1', path: 'easy1', source: 'picoCTF' },
        { name: 'Where are the robots', path: 'where-are-the-robots', source: 'picoCTF' },
        { name: 'logon', path: 'logon', source: 'picoCTF' },
        { name: 'dont-use-client-side', path: 'dont-use-client-side', source: 'picoCTF' },
        { name: 'Pixelated', path: 'pixelated', source: 'picoCTF' },
        { name: 'basic-file-exploit', path: 'basic-file-exploit', source: 'picoCTF' },
        { name: 'art_assignment', path: 'art_assignment', source: 'picoCTF' },
        { name: 'block_game', path: 'block_game', source: 'COMP6841' },
        { name: 'first_contact', path: 'first_contact', source: 'COMP6841' },
    ];

    return (
        <CybersecurityLayout>
            <Helmet>
                <title>Cybersecurity Blogs</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.content}>
                    <PageBreadcrumbs></PageBreadcrumbs>
                    <h1 className={styles.title}>Cybersecurity &mdash; CTFs</h1>
                    <p>
                        This is a collection of guides, explanations and write-ups I have written
                        over my journey into CTFs.
                    </p>
                    <h2 className={styles.title}>Introduction</h2>
                    {/* TODO: Turn these uls into components. Feed props. Style them later. */}
                    <ul>
                        <li>
                            <Link to="/cybersecurity/introduction">Introduction to CTFs</Link>
                        </li>
                        <li>
                            <Link to="/cybersecurity/kali-setup">
                                Kali Linux on VMWare setup guide for Windows/Linux host machines
                            </Link>
                        </li>
                    </ul>
                    <br />
                    <h2 className={styles.title}>Topics & Core Concepts</h2>
                    <Expandable text="Web Exploitation">
                        <img
                            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/185076da-5fdb-4a1b-b773-84073bb7e443/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T004040Z&X-Amz-Expires=86400&X-Amz-Signature=da0d112a7c33bd8cdcc63586936345bb3b67cce944518a6b8de7ab9dfcd31cea&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"
                            style={{
                                display: 'block',
                                margin: '10px auto',
                                boxShadow:
                                    'rgba(50, 50, 93, 0.25) 0px 13px 27px - 5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
                            }}
                            width={300}
                        />
                        <p>
                            Web exploitation is about attacking websites and web apps through
                            techniques that mainly involve sending through malicious input to the
                            servers via their web frontend. Web security vulnerabilities are often
                            the most prevalent in real software systems, making it critical that
                            you’re aware of the common vulnerabilities and attacks as a frontend or
                            backend engineer.
                        </p>
                        <ul>
                            <li>
                                <Link to="/cybersecurity/sql-injection">SQL Injection</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/xss">XSS (Cross-Site Scripting)</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/csrf">
                                    CSRF (Cross-Site Request Forgery)
                                </Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/ssrf">
                                    SSRF (Server-Side Request Forgery)
                                </Link>
                            </li>
                        </ul>
                    </Expandable>
                    <Expandable text="Binary Exploitation">
                        <img
                            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4670064-8af6-409d-be52-25dfbcaa2fcf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T004444Z&X-Amz-Expires=86400&X-Amz-Signature=89f2b83a4ddd44618c23354ee3d2512a12c7410ea40615efb52722fd014e6c23&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"
                            style={{
                                display: 'block',
                                margin: '10px auto',
                                boxShadow:
                                    'rgba(50, 50, 93, 0.25) 0px 13px 27px - 5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
                            }}
                            width={300}
                        />
                        <p>
                            Binary exploitation focuses on identifying and exploiting
                            vulnerabilities in executables with the goal of gaining control of a
                            root shell or getting processes running on remote servers to run some
                            malicious code or leak secret data.
                        </p>
                        <p>
                            Note about terminology: in general, the terms ‘binary’ and ‘executable’
                            are used interchangeably.
                            <ul>
                                <li>
                                    Speaking precisely, a binary or <em>binary file</em> is simply a
                                    file in binary format which may or may not be executable. For
                                    example, an .mp3 file’s contents are binary but you cannot
                                    execute a .mp3 file.
                                </li>
                                <li>
                                    Executables, on the other hand, are files that you can directly
                                    execute which may or may not be in binary format. For example, a
                                    file containing Python code with the shebang line
                                    <code>#!/usr/bin/python3</code> with executable permissions
                                    counts as an executable (and clearly it’s not a binary file
                                    since its contents are raw Python code).
                                </li>
                            </ul>
                            They’re often used interchangeably because compilers often output files
                            that are both in <em>binary format and executable</em>, eg.{' '}
                            <code>a.out</code>
                            produced by <code>gcc</code>, ELF files, bytecode files, etc.
                        </p>
                        <ul>
                            <li>
                                <Link to="/cybersecurity/endianness">Endianness</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/elf-files">ELF Files</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/program-memory-layout">
                                    Program Memory Layout
                                </Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/buffer-overflow-attacks">
                                    Buffer Overflow Attacks
                                </Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/format-string-attacks">
                                    Format String Attacks
                                </Link>
                            </li>
                        </ul>
                    </Expandable>
                    <Expandable text="Cryptography">
                        <img
                            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eb59c978-6bb8-4eaa-9f1c-c0c3c1b944c9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T004557Z&X-Amz-Expires=86400&X-Amz-Signature=43c78eadba297e1a4479dc598e021cb35fff29f90eca92e001b84379c8006b20&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"
                            style={{
                                display: 'block',
                                margin: '10px auto',
                                boxShadow:
                                    'rgba(50, 50, 93, 0.25) 0px 13px 27px - 5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
                            }}
                            width={300}
                        />
                        <p>
                            In Greek, ‘crypto’ means ‘secret’. Cryptography is the set of techniques
                            and theories around using ‘codes’ to securely communicate messages in
                            the presence of <em>adversaries</em> — malicious parties who want to
                            know the content of those messages. We rely on encryption schemes for so
                            many things in modern computing systems, for example, to encrypt the web
                            traffic that contains our bank details, passwords, confidential
                            communications, etc. private.
                        </p>
                        <p>
                            Two widespread encryption schemes include RSA (Rivest-Shamir-Adleman)
                            and AES (advanced encryption standard). A core part of cryptography also
                            includes the use of hashing algorithms like MD5 and SHA256.
                        </p>
                        <ul>
                            <li>
                                <Link to="/cybersecurity/cryptographic-hashing-algorithms">
                                    Cryptographic Hashing Algorithms (MD5, SHA256, etc.)
                                </Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/rsa-encryption">RSA Encryption</Link>
                            </li>
                        </ul>
                    </Expandable>
                    <Expandable text="Reverse Engineering">
                        <img
                            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d1c9dfb4-b2f6-4ac4-8b96-b39661bbf772/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T004715Z&X-Amz-Expires=86400&X-Amz-Signature=94f982bd4725f8b0961f788a2d45923d9ef4a8bc3686fc1b625c608175a722d1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"
                            style={{
                                display: 'block',
                                margin: '10px auto',
                                boxShadow:
                                    'rgba(50, 50, 93, 0.25) 0px 13px 27px - 5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
                            }}
                            width={300}
                        />
                        <p>
                            Reverse engineering is the process of analysing the behaviour of
                            software without having access to its source code. In CTFs, you’d
                            usually get given compiler output such as machine code which you’d then
                            convert to a more human readable format using disassemblers or
                            decompilers, and discover insight about how the software behaves to find
                            vulnerabilities. In general, reverse engineering of software (and other
                            technology) is typically legal, and so is often used to uncover trade
                            secrets.
                        </p>
                        <ul>
                            <li>
                                <Link to="/cybersecurity/disassemblers-and-decompilers">
                                    Disassemblers & Decompilers
                                </Link>
                            </li>
                        </ul>
                    </Expandable>
                    <Expandable text="Forensics">
                        <img
                            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/68b3e7e5-ec4b-4382-8159-f1a77dafc449/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T004750Z&X-Amz-Expires=86400&X-Amz-Signature=a8b329ebf0e84812eb6314d6f834a4d118bf4f0d4a0c37d93e1a4e7986d3874c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"
                            style={{
                                display: 'block',
                                margin: '10px auto',
                                boxShadow:
                                    'rgba(50, 50, 93, 0.25) 0px 13px 27px - 5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
                            }}
                            width={300}
                        />
                        <p>
                            Digital forensics is the set of techniques and practices around
                            recovering the digital trail left on computer systems after an event.
                        </p>
                        <ul>
                            <li>
                                <Link to="/cybersecurity/file-metadata">File Metadata</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/steganography">Steganography</Link>
                            </li>
                        </ul>
                    </Expandable>
                    <Expandable text="General">
                        <p>
                            CTFs often require a broad understanding of a bunch of general computer
                            science concepts. Below are some guides I wrote about some general
                            concepts and topics I see frequently in CTF problems.
                        </p>
                        <ul>
                            <li>
                                <Link to="/cybersecurity/character-encoding">
                                    Character Encoding
                                </Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/base64">Base64</Link>
                            </li>
                        </ul>
                    </Expandable>
                    <Expandable text="Tooling">
                        <p>
                            Getting familiar with a wide range of interesting and powerful hacking
                            tools and technologies is one of the most enjoyable parts of learning
                            CTFs. I’ve found that these set of tools have a huge overlap with tools
                            that you would often see used day-to-day in software engineering jobs,
                            so it’s absolutely worth learning a lot of these well in my opinion!
                        </p>
                        <p>
                            Above all, I think that you absolutely must have a basic practical
                            understanding of Python and Shell scripting. They’re useful in virtually
                            all of the CTFs that I have encountered, plus they have been incredibly
                            helpful in my career so far as well. I only shallowly know how to work
                            with many of these other tools/technologies such as GDB, hex editors,
                            packet sniffers and the plethora of useful command-line tools out there.
                            Below is a collection of some notes I have taken that have served me
                            well in my initial dive into CTFs.
                        </p>
                        <ul>
                            <li>
                                <Link to="/cybersecurity/pwntools">Pwntools</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/hex-editors">
                                    Hex Editors & Hexdumping
                                </Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/wireshark">Wireshark</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/burpsuite">Burpsuite</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/gdb">GDB</Link>
                            </li>
                        </ul>
                    </Expandable>
                    <br />
                    <h2 className={styles.title}>CTF Write-Ups</h2>
                    <aside>
                        I am tracking the CTF problems I complete in the spreadsheet{' '}
                        <a
                            href="https://docs.google.com/spreadsheets/d/1EMm5dCoRXaK6uqnVLvdup0tVP27rC6lTMMAv9RsUit8/edit?usp=sharing"
                            target="_blank"
                        >
                            here
                        </a>
                        . Below are a few write-ups that outline my approach and thinking for some
                        of the problems I attempted in that spreadsheet:
                    </aside>
                    <ul>
                        {writeups.map(writeup => (
                            <li>
                                <Link to={`/cybersecurity/${writeup.path}`}>{writeup.name}</Link>{' '}
                                <span style={{ color: 'grey' }}>&mdash; {writeup.source}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <ParallaxBanner imageSrc="https://images4.alphacoders.com/110/thumb-1920-1108171.png" />
            </div>
        </CybersecurityLayout>
    );
};

export default CybersecurityBlogs;
