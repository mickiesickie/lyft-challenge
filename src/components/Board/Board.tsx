import React from "react";
import styles from './board.module.css';


const Board: React.FunctionComponent<{children: React.JSX.Element,myRef: React.Ref<HTMLDivElement>}> = ({children,myRef}) => {
    
    return (
    <div className={styles.board} ref={myRef}>
        {children}
    </div>
    );
}

export default Board;