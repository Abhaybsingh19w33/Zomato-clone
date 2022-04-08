import React, { Fragment, useState } from "react";

// components
import MenuCategory from "./MenuCategory";

const MenuListContainer = (props) => {
    // const [selected, setSelected] = useState("");
    // const onClickHandler = (e) => {
    //     if (e.target.id) {
    //         setSelected(e.target.id);
    //     }
    //     return;
    // };
    return (
        <Fragment>
            <div className="w-full flex flex-col gap-3">
                <MenuCategory
                    name={props.name}
                    items={props.items}
                    onClickHandler={props.onClickHandler}
                    isActive={props.selected === props.name}
                />
            </div>
        </Fragment>
    );
};

export default MenuListContainer;