import React, { useEffect, useState } from 'react'
import { optionsProps } from './interface';
import styles from './styles.module.scss';

export function PrizeWheel({option}: optionsProps) {
    return (
        <>
            <div className={styles.pinFromWheel} />
            <div className={styles.box}>
                <button className={styles.buttonWheel}> </button>
                <div className={styles.box1}>
                    {
                        option.map(({optionName}, index) => (
                            <span className={styles.slice} key={index} > <p>{optionName}</p></span >
                        ))
                    }
                </div>
            </div>
        </>
    )
}
