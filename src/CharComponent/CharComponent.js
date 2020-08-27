import React from 'react';

const CharComponent = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    let charList = props.characters.split('');
    let charListJsx = charList.map((el, index) => {
        return <div key={index.toString()} style={style} onClick={() => props.delete(index)}>{el}</div>
    });

    return (
        <div>
            {charListJsx}
        </div>
    );
}

export default CharComponent;
