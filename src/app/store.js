import {configureStore} from '@reduxjs/toolkit';
import activeThemeReducer from '../lib/themes/activeThemeSlice';

export default configureStore({
    reducer: {
        activeTheme: activeThemeReducer,
    },
})