import React from 'react';

const NovedadItem = (props) => {
    const {title, subtitle, imagen, body } = props;

    return (
        <div className='main novedades'>
            <h1 className='nov-tit'>{title}</h1>
            <h3 className="nov-subt">{subtitle}</h3>
            <div className='nov-body' dangerouslySetInnerHTML={{__html: body }} />
            <img className='nov-img' src={imagen} />
            <hr/>
        </div>
    );
}

export default NovedadItem;