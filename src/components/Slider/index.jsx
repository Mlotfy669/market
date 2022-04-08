import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {sliderItems} from '../../data'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import styles from './index.module.scss'
const Slider = () => {
    const navigate =useNavigate()
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    const wrapper = {
        transform: `translateX(${slideIndex * -100}vw)`,
    }
    return (
        <div className={styles.Container}>
            <div className={styles.arrowLeft} onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </div>
            <div   className={styles.wrapper} style={wrapper}>
                {sliderItems.map((item) => (
                    <div className={styles.slide} style={{backgroundColor:`#${item.bg}`}} key={item.id}>
                        <div className={styles.imgContainer}>
                            <img src={item.img} alt="" />
                        </div>
                        <div className={styles.infoContainer}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>{item.desc}</p>
                            <button onClick={() => navigate('product')}>SHOW NOW</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.arrowRight} onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </div>

        </div>
    )
}

export default Slider