import { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const useApp = () => useContext(AppContext);

export default useApp;
