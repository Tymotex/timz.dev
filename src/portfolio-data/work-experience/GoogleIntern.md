Improved the reliability of a URL fetching service used primarily by web crawlers.

-   Increased the availability of a hostname to shard number resolver from
    99.99% to 99.999%, reducing its expected annual downtime from 53 minutes to
    5 minutes.
-   Designed and unit-tested new C++ interfaces and a Spanner database schema to
    phase out software anti-patterns.
-   Implemented a scalable multithreaded cache refresher in C++ which could reduce
    data staleness from minutes to milliseconds.
-   Planned production rollout procedures and wrote test automation scripts in
    Bash for generating traffic and extracting and comparing contents from different
    storage services.
