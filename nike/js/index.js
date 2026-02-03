import HeaderFixed from './header.js';
import Modal from './modal.js';
import { productSlider } from './product-slider.js';
import { sizes } from './sizes.js';

try {
	const headerFixed = new HeaderFixed({
		HEADER: 'header',
		HEADER_FIXED: 'header--fixed',
	});
	new Modal({
		PAGE_BODY: 'page__body',
		PAGE_BODY_NO_SCROLL: 'page__body--no-scroll',
	});

	productSlider();
	sizes();
} catch (error) {
	console.error(error);
}
