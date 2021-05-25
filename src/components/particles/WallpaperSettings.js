import React from 'react';
import SkyLight from 'react-skylight';
import SettingsIcon from '@material-ui/icons/Settings';
import styles from './WallpaperSettings.module.scss';
import ColourPicker from '../colour-picker/ColourPicker';

class WallpaperSettings extends React.Component {
    render() {
        let myBigGreenDialog = {
            backgroundColor: 'white',
            color: 'black',
            width: '70%',
            height: '600px',
            marginTop: '-300px',
            marginLeft: '-35%',
        };

        return (
            <>
                <div className={styles.settingsIcon}>
                    <SettingsIcon onClick={() => this.customDialog.show()} />
                </div>
                <SkyLight
                    dialogStyles={myBigGreenDialog}
                    hideOnOverlayClicked
                    ref={ref => (this.customDialog = ref)}
                    title="Site Settings"
                >
                    <h3>Customise Wallpaper</h3>
                    [Lol this doesn't work yet. Please ignore]
                    <ColourPicker />
                </SkyLight>
            </>
        );
    }
}

WallpaperSettings.displayName = 'WallpaperSettings';

export default WallpaperSettings;
