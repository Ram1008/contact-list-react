import React from 'react'
import classes from './SkeletonLoader.module.css'
const SkeletonLoader = () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const card = a.map((el,) => {
        const classForDiv = [classes.Skeleton,classes.Pulse];
        return (
            <div key={el} className={classForDiv.join(" ") }>

            </div>
        )
    })
    return (
        <div className="d-flex flex-row flex-wrap justify-content-around mt-3">
            {card}
        </div>
    )
}

export default SkeletonLoader;