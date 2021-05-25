import React from 'react';

const theme = {
    backgroundColour: 'yellow',
};
const ThemeContext = React.createContext(theme.backgroundColour);

export default ThemeContext;
