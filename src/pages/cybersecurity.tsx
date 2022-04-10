import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { PageBreadcrumbs } from 'src/components/cybersecurity/breadcrumbs';
import { ParallaxBanner } from 'src/components/cybersecurity/parallax-banner';
import styles from '../components/templates/CybersecurityBlog.module.scss';
import { CybersecurityLayout } from '../layouts';
import { Expandable } from 'src/components/expandable';

const CybersecurityBlogs = () => {
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
                            <Link to="/cybersecurity/introduction">
                                Kali Linux on VMWare setup guide for Windows/Linux host machines
                            </Link>
                        </li>
                    </ul>
                    <br />
                    <h2 className={styles.title}>Topics & Core Concepts</h2>
                    <Expandable text="Cryptography">
                        <ul>
                            <li>
                                <Link to="/cybersecurity/cryptographic-hashing-algorithms">
                                    Cryptographic Hashing Algorithms (MD5, SHA256, etc.)
                                </Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/block-ciphers">Block Ciphers</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/stream-ciphers">Stream Ciphers</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/rsa">RSA Encryption</Link>
                            </li>
                        </ul>
                    </Expandable>
                    <Expandable text="Web Exploitation">
                        <ul>
                            <li>
                                <Link to="/cybersecurity/sql-injection">
                                    SQL Injection (Cross-Site Scripting)
                                </Link>
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
                        <ul>
                            <li>
                                <Link to="/cybersecurity/endianness">Endianness</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/elf-files">ELF Files</Link>
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
                            <li>
                                <Link to="/cybersecurity/return-oriented-programming">
                                    ROP (Return-Oriented Programming)
                                </Link>
                            </li>
                        </ul>
                    </Expandable>
                    <Expandable text="Reverse Engineering">
                        <ul>
                            <li>
                                <Link to="/cybersecurity/disassemblers">Disassemblers</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/decompilers">Decompilers</Link>
                            </li>
                        </ul>
                    </Expandable>
                    <Expandable text="Forensics">
                        <ul>
                            <li>
                                <Link to="/cybersecurity/file-metadata">File Metadata</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/steganography">Steganography</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/PCAPs">
                                    PCAPs (Network Packet Capture)
                                </Link>
                            </li>
                        </ul>
                    </Expandable>
                    <Expandable text="General">
                        <ul>
                            <li>
                                <Link to="/cybersecurity/text-encoding">Text Encoding</Link>
                            </li>
                            <li>
                                <Link to="/cybersecurity/base64">Base64</Link>
                            </li>
                        </ul>
                    </Expandable>
                    <br />
                    <h2 className={styles.title}>Tooling</h2>
                    <ul>
                        <li>
                            <Link to="/cybersecurity/python">Python for CTFs</Link>
                        </li>
                        <li>
                            <Link to="/cybersecurity/python">Pwntools</Link>
                        </li>
                        <li>
                            <Link to="/cybersecurity/python">CLI cheatsheet</Link>
                        </li>
                        <li>
                            <Link to="/cybersecurity/gdb">GDB</Link>
                        </li>
                    </ul>
                </div>
                <ParallaxBanner imageSrc="https://images4.alphacoders.com/110/thumb-1920-1108171.png" />
            </div>
        </CybersecurityLayout>
    );
};

export default CybersecurityBlogs;
