
import '@testing-library/jest-dom/extend-expect';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });
