import React from 'react';

function Boxes( { boxes } ) {
    return (
        <div className="boxes-wrapper" style={{ display: 'flex', gap: 10, height: 100  }}>
            {boxes.map((boxStyle, index) => (
                <div
                    key={index} 
                    className="box" 
                    style={boxStyle}
                />
            ))}
        </div>
    );
}

export default React.memo(Boxes);