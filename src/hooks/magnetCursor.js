const  magnetCursor = (currentElement, mouse) =>{
    const clientRect = currentElement.current.getBoundingClientRect()
    const interpolation = 0.8;
    const lerp = (current, target, factor) => current * ( 1 - factor) + target * factor;
    let lerpingData = {
        x:{current:0, target:(mouse.x - (clientRect.left + clientRect.width / 2)) * 0.15},
        y:{current:0, target:(mouse.y - (clientRect.top + clientRect.height / 2)) * 0.15}
    }

    
    for(const item in lerpingData){
        lerpingData[item].current = lerp(
            lerpingData[item].current,
            lerpingData[item].target, 
            interpolation
        )
    }
    return lerpingData;
}

export default magnetCursor;