import { faBars, faCloud, faGear, faMap } from "@fortawesome/free-solid-svg-icons";
import type { AsideProps } from "../../models/AsideProps";
import Icon from "../../components/Icon";

const asideIcons: AsideProps[] = [
    { icon: faCloud, label: 'Weather' }, 
    { icon: faBars, label: 'Cities' }, 
    { icon: faMap, label: 'Map' }, 
    { icon: faGear, label: 'Configs' }
]

const Aside = () => {
    return (
        <>
        <aside className="aside-container">
            <Icon icons={asideIcons} />
        </aside>
        </>
    );
};

export default Aside;
