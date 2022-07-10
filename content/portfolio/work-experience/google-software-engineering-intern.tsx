import React from "react";
import UnorderedList from "src/components/UnorderedList";

interface Props {}

const GoogleSoftwareEngineeringIntern: React.FC<Props> = () => {
    return (
        <>
            Improved the reliability of a URL fetching service that serves
            billions of requests per day, used primarily by web crawlers.
            <UnorderedList>
                <li>
                    Increased the availability of a 'hostname to shard number'
                    resolver from 99.99% to 99.999%, reducing its expected
                    annual downtime from 53 minutes to 5 minutes.
                </li>
                <li>
                    Designed and unit-tested new C++ interfaces and a Spanner
                    database schema to phase out software anti-patterns.
                </li>
                <li>
                    Implemented a scalable multithreaded cache refresher in C++
                    which could potentially reduce data staleness from minutes
                    to milliseconds.
                </li>
                <li>
                    Planned production rollout and testing procedures, including
                    writing Bash scripts to automatically generate traffic and
                    extract, normalise and compare contents from different
                    storage services for verifying correctness, end-to-end.
                </li>
            </UnorderedList>
        </>
    );
};

export default GoogleSoftwareEngineeringIntern;
