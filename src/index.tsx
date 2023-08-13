import { ShadeBox } from "./component/shade-box/shade-box";
import { DATA } from "./data/shades";
import styles from './index.module.scss';

export default function Page() {
    return <div className={styles.wrapper}>
        <h1>50+ SHADES OF RED</h1>
        <div className={styles.parent}>
            {DATA.map(shade => <ShadeBox key={shade.name} {...shade} />)}
        </div>
        <div className={styles.credits}><p>Built and created by <b>Martijn Steenbergen</b></p></div>
    </div>;
}
