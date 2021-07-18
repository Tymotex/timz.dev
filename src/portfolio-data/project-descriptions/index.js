// Markdown files that are used by src/components/windows/projects-windows/ProjectCard.js
// and are rendered as blog pages with the route: /blogs/<filename>
//     Eg. For Techsuite.md, a route for /blogs/Techsuite will be created. See
//         gatsby-node.js for how this is done.

import techsuiteDesc from './Techsuite.md';
import tactiledsDesc from './Tactile-DS.md';
import cosmicaDesc from './Cosmica.md';
import galacticEdDesc from './Galactic-Ed.md';
import employMeDesc from './EmployMe.md';
import educatoryDesc from './Educatory.md';
import structsDesc from './Structs.md';
import hydroponixDesc from './Hydroponix.md';
import delivobotDesc from './Autonomous-Deliv-O-Bot.md';
import get2getherDesc from './Get2Gether.md';
import shellPerlTranspilerDesc from './Shell-Perl-Transpiler.md';
import csNexusDesc from './CS-Nexus.md';
import darkshadeCryptDesc from './Darkshade-Crypt.md';
import timzdevDesc from './TimzDev.md';
import astralAssaultDesc from './Astral-Assault.md';
import blitzBreachDesc from './Blitz-Breach.md';
import fallout4ModsDesc from './Fallout-4-Mods.md';
import quoteScraperDesc from './Quote-Scraper.md';

const descriptions = {
    techsuite: techsuiteDesc,
    tactileds: tactiledsDesc,
    cosmica: cosmicaDesc,
    galacticed: galacticEdDesc,
    employMe: employMeDesc,
    educatory: educatoryDesc,
    structs: structsDesc,
    hydroponix: hydroponixDesc,
    delivobot: delivobotDesc,
    get2gether: get2getherDesc,
    shellPerlTranspiler: shellPerlTranspilerDesc,
    csnexus: csNexusDesc,
    darkshadeCrypt: darkshadeCryptDesc,
    timzdev: timzdevDesc,
    astralAssault: astralAssaultDesc,
    blitzBreach: blitzBreachDesc,
    fallout4Mods: fallout4ModsDesc,
    quoteScraper: quoteScraperDesc,
};

export default descriptions;
