import React from 'react'
import './Home.min.css'
import hacker from '../../img/hacker.png'
import spaceman from '../../img/spaceman.png'
// import ufo from '../../img/ufo.png'
// import annulus from '../../img/annulus.png'

export default function Home() {
    const [hasVerticalScrolled, setHasVerticalScrolled] = React.useState(0)
    const spacemanRef = React.useRef()
    const hackerRef = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', bindHandleScroll)
    })

    const bindHandleScroll = event => {
        setHasVerticalScrolled(event.srcElement.documentElement.scrollTop)
    }

    // 监听滚动时事件
    React.useEffect(() => {
        const width = 3000 + hasVerticalScrolled
        // console.log(hasVerticalScrolled)
        if (width >= 3000 && width <= 5000) {
            spacemanRef.current.style.width = width + 'px'
            hackerRef.current.style.transform = `translateZ(${hasVerticalScrolled * 0.2}px)`
        } 
        else if (hasVerticalScrolled >= 2350) {
            hackerRef.current.style.transform = `translateZ(0px)`
        }
    }, [hasVerticalScrolled])
    return (
        <div className='home'>
            <div className="head">
                <img src={hacker} className="hacker" ref={hackerRef} alt="" />
                <div className="spaceman" >
                    <img src={spaceman} className="spaceman-img" ref={spacemanRef} alt="" />
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}
