import React from "react";

function MegaBoost( {handleClick} ) {
    return (
        <button 
            className="mega-boost-button"
            onClick={handleClick}
        >
            Mega Boost!
        </button>
    );
}

export default React.memo(MegaBoost);