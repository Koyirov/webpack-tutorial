import Heading from "./heading/heading";
import KiwiImage from "./kiwi-image/kiwi-image";
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('kiwi'));
const kiwiImage = new KiwiImage();
kiwiImage.render();