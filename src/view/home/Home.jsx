import React from 'react'
import './Home.min.css'
import hacker from '../../img/hacker.png'
import spaceman from '../../img/spaceman.png'
import background from '../../img/background.jpg'
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
        const width = 800 + hasVerticalScrolled
        // console.log(hasVerticalScrolled)
        if (width >= 800 && width <= 1300) {
            spacemanRef.current.style.width = width + 'px'
            hackerRef.current.style.transform = `translateZ(${hasVerticalScrolled * 0.9}px)`
        } 
        else if (hasVerticalScrolled >= 600) {
            hackerRef.current.style.transform = `translateZ(0px)`
        }
    }, [hasVerticalScrolled])
    return (
        <div className='home'>
            <img src={background} className="background" alt="" />
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
