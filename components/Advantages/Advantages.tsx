import styles from './Advantages.module.css'
import CheckIcon from './check.svg'
import {TopPageAdvantage} from "../../interfaces/topPage.interface";

interface AdvantagesProps {
    advantages: TopPageAdvantage[]
}

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
    return <>
        {advantages.map((a) => {
            return (
                <div key={a._id} className={styles.advantage}>
                    <CheckIcon/>
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vLine}/>
                    <div>{a.description}</div>
                </div>
            )
        })}
    </>
}
