import 'fast-text-encoding';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

configure({ adapter: new Adapter() });
