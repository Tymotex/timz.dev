import React from 'react';

const Window = (props) => {
    let close = (
        <div
            className="close"
            onClick={() => {
                props.onCloseArticle()
            }}
        ></div>
    )

    return (
        <article
            id={props.nameID}
            className={`${props.article === props.nameID ? 'active' : ''} ${
                props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
        >
            <h2 className="major">{props.text}</h2>
            <span className="image main">
                <img src="https://www.google.com/search?q=picture&sxsrf=ALeKk01ypEj5UutCjHVmtJKrV8DCr6_BJw:1603853341908&tbm=isch&source=iu&ictx=1&fir=Ra2q2b-cF-lGAM%252CHAYMQ7wDoUAMBM%252C_&vet=1&usg=AI4_-kRIOaNVA5kYxH_CYQ_Xa4Fxcf5i6Q&sa=X&ved=2ahUKEwigh92lo9bsAhXexjgGHT2vCe0Q9QF6BAgUEFo#imgrc=Ra2q2b-cF-lGAM" alt="" />
            </span>
            {props.children}
            {close}
        </article>
    )
}

export default Window;