import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {Menu} from "../Menu/Menu";

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu/>
        </div>
    )
}
