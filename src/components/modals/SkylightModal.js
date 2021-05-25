import React from 'react';
import SkyLight from 'react-skylight';
import SettingsIcon from '@material-ui/icons/Settings';

class ExampleCustom extends React.Component {
    constructor(props) {
        super(props);
    }

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
            <div>
                <SkyLight
                    dialogStyles={myBigGreenDialog}
                    hideOnOverlayClicked
                    ref={ref => (this.customDialog = ref)}
                    title="A Custom Modal"
                >
                    I'm a custom modal!
                </SkyLight>
            </div>
        );
    }
}

ExampleCustom.displayName = 'ExampleCustom';

export default ExampleCustom;
