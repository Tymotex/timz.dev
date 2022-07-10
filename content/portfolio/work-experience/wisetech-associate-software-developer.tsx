import React from "react";
import UnorderedList from "src/components/UnorderedList";

interface Props {}

const WiseTechAssociateSoftwareDeveloper: React.FC<Props> = () => {
    return (
        <>
            Developed API and UI for a learning management system,{" "}
            <a href="https://wisetechacademy.com/">WiseTech Academy</a>.
            <UnorderedList>
                <li>
                    Applied test-driven development with NUnit to implement REST
                    APIs for a user and content management system using C#,
                    ASP.NET Core and SQL Server.
                </li>
                <li>
                    Implemented a bulk enrolment time-saving feature, allowing
                    .CSV and .XLSX files to be uploaded to create users and new
                    course enrolments with dry-run results preview and error
                    reporting.
                </li>
                <li>
                    Developed content management interfaces using ASP.NET Razor
                    pages, jQuery and SCSS.
                </li>
            </UnorderedList>
        </>
    );
};

export default WiseTechAssociateSoftwareDeveloper;
