import React, { Fragment, useState } from "react";

// component
import MenuCollection from "../../Components/restaurant/MenuCollection";
const Menu = () => {
    const [menus, setMenus] = useState([]);

    return (
        <Fragment>
            <div className="flex flex-wrap gap-3">
                {menus.map((menu) => (
                    <MenuCollection {...menu} />
                ))}
            </div>
        </Fragment>
    );
};

export default Menu;