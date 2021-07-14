import React, {DetailedHTMLProps, HTMLAttributes, useState} from 'react'
import cn from 'classnames'
import styles from './Search.module.css'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import GlassIcon from './glass.svg'
import {useRouter} from "next/router";

interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter()


    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        })
    }

    const handleKeyDown = (event: React.KeyboardEvent): void => {
        if (event.key === 'Enter') {
            goToSearch()
        }
    }

    return (
        <div className={cn(className, styles.search)}>
            <Input
                className={styles.input}
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance={'primary'}
                className={styles.button}
                onClick={goToSearch}
            >
                <GlassIcon/>
            </Button>
        </div>
    )
}
