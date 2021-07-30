import {createSerializer} from 'enzyme-to-json';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
Enzyme.configure({ adapter: new Adapter() });


const noScroll = () => {};

Object.defineProperties(window,'scrollTo', {value: noScroll, writable: true});