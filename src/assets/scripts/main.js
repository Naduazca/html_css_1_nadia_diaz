/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import '../styles/main.scss';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faPlane, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faPlane, faHeart);
dom.watch();
/**
 * Write any other JavaScript below
 */
