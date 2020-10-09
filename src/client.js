import * as sapper from '@sapper/app';

const config = {
	target: document.querySelector('#sapper')
};

if (!Intl.PluralRules) {
	(async () => {
		await import('@formatjs/intl-getcanonicallocales/polyfill');
		sapper.start(config);
	})();
} else {
	sapper.start(config);
}