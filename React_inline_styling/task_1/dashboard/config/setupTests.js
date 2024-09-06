import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { StyleSheetTestUtils } from 'aphrodite';

configure({ adapter: new Adapter() });
beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});