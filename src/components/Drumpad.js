import React from 'react';


const Drumpad = ({song, url, drumKey,handleClick}) => {
    return(

<button className='drum-pad' id={song} onClick={handleClick(drumKey,song)}>{drumKey}
<audio src={url} className="clip" id={drumKey}/>
</button>

    )

}

 


export default Drumpad;