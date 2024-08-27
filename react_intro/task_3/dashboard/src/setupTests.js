import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-18';
import 'fast-text-encoding';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

configure({ adapter: new Adapter() });
