import React, { useContext } from "react";
import { MdOutlinePalette as PaletteIcon } from "react-icons/md";
import styles from "./GradientSelector.module.scss";
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuPopover,
    MenuLink,
} from "@reach/menu-button";
import { ThemeContext } from "src/contexts/ThemeProvider";
import gradientThemes from "./themes";

interface Props {}

const GradientSelector: React.FC<Props> = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <Menu>
            <MenuButton className={styles.selector}>
                <PaletteIcon className={styles.icon} />
            </MenuButton>
            <MenuList className={styles.menuList}>
                {gradientThemes.map((theme, i) => (
                    <MenuItem
                        key={theme.name}
                        onSelect={() =>
                            themeContext.changeParticleThemeIndex(i)
                        }
                        disabled={themeContext.particleThemeIndex === i}
                    >
                        {theme.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default GradientSelector;
