import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import 'fast-text-encoding';

Enzyme.configure({ adapter: new Adapter() });

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

configure({ adapter: new Adapter() });
