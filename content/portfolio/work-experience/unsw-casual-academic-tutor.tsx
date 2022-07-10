import React from "react";
import UnorderedList from "src/components/UnorderedList";

interface Props {}

const UnswCasualAcademicTutor: React.FC<Props> = () => {
    return (
        <>
            Taught Data Structures and Algorithms (COMP2521) in trimester 2 and
            3 in 2020 and trimester 1 in 2021.
            <UnorderedList>
                <li>
                    Delivered two 1-hour online tutorials to 26 students each
                    week.
                </li>
                <li>
                    Delivered 6 hours of lab demonstrations to over 70 students
                    each week.
                </li>
                <li>
                    Volunteered for additional help sessions and answering
                    online course forum questions.
                </li>
                <li>
                    Achieved a student satisfaction rating of 5.74/6.00 in the
                    first term of teaching, with the average rating being
                    5.21/6.00 in the School of Engineering.
                </li>
                <li>
                    Achieved a student satisfaction rating of 5.89/6.00 in the
                    second term of teaching, with the average rating being
                    5.14/6.00 in the School of Engineering.
                </li>
                <li>
                    Achieved a student satisfaction rating of 5.89/6.00 in the
                    third term of teaching, with the average rating being
                    5.30/6.00 in the School of Engineering.
                </li>
            </UnorderedList>
        </>
    );
};

export default UnswCasualAcademicTutor;
