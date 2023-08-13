import { Shade } from "../../data/shades"
import styles from './shade-box.module.scss';

export type ShadeBoxProps = Shade;

export const ShadeBox = (props: ShadeBoxProps) => {
    const { name, description, cssColor } = props;
    return <div className={styles.shadeBox}>
        <div style={{
            backgroundColor: `rgb(${cssColor})`
        }} className={styles.color}>

        </div>
        <div>
            <h2>{name}</h2>
            <h3>{cssColor}</h3>
            <p>{description}</p>
        </div>
    </div>
}
