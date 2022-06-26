import { Award } from "content/portfolio/portfolio";
import React from "react";
import UnorderedList from "../UnorderedList";
import AwardItem from "./AwardItem";

interface Props {
    awards: Award[];
}

const AwardList: React.FC<Props> = ({ awards }) => {
    return (
        <UnorderedList resetDefaultStyle>
            {awards &&
                awards.map((award) => (
                    <AwardItem key={award.title} award={award} />
                ))}
        </UnorderedList>
    );
};

export default AwardList;
