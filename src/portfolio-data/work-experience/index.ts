import academicTutor from './AcademicTutor.md';
import accentureIntern from './AccentureIntern.md';
import wiseTechIntern from './WiseTechIntern.md';
import googleIntern from './GoogleIntern.md';

interface WorkExperienceDescriptions {
    [k: string]: string;
}

const descriptions: WorkExperienceDescriptions = {
    academicTutorDesc: academicTutor as string,
    accentureInternDesc: accentureIntern,
    wiseTechInternDesc: wiseTechIntern,
    googleInternDesc: googleIntern,
};

export default descriptions;
