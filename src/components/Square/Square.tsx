import { useEffect, useState } from 'react';
import styles from './square.module.css'
type IAxis = {
    axisX : number;
    axisY: number;
}
const Square = ({myRef, axis} :{myRef: React.Ref<HTMLDivElement>, axis: IAxis}) => {
   return (
        <div
            ref={myRef}
            className={styles.square}
            style={{transform: `translate(${axis.axisX}px, ${axis.axisY}px)`}}
        />
    )
}

export default Square;