import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import React from 'react';

interface Props {
    pageTitle?: string;
}

const PageBreadcrumbs: React.FC<Props> = ({ pageTitle }) => {
    return (
        <div
            style={{
                backgroundColor: '#24202A',
                display: 'inline-block',
                padding: '0.7rem',
                borderRadius: '100px',
                marginBottom: '20px',
            }}
        >
            <Breadcrumbs aria-label="breadcrumb" style={{ color: 'white', fontFamily: 'CodeText' }}>
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Link underline="hover" color="inherit" href="/cybersecurity">
                    Cybersecurity
                </Link>
                {pageTitle && (
                    <Typography style={{ fontFamily: 'CodeText' }}>{pageTitle}</Typography>
                )}
            </Breadcrumbs>
        </div>
    );
};

export default PageBreadcrumbs;
