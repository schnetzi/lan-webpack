import './ajax.scss';
import axios from 'axios';
import 'regenerator-runtime';

async function requestDataAndReplaceElement(
	requestUrl: string,
	replaceElement: HTMLElement
) {
	const response = await axios.get(requestUrl);

	const newElement = document.createElement('div');
	newElement.innerHTML = response.data.html;

	replaceElement.parentNode?.replaceChild(newElement, replaceElement);
}

function replaceAjaxFormElemens() {
	const replaceElements = document.querySelectorAll('.js-ajax-form');

	replaceElements.forEach(async (replaceElement) => {
		if (!(replaceElement instanceof HTMLFormElement)) {
			console.error(`'js-ajax-form' must be set on HTMLFormElement`);

			return;
		}

		const requestUrl = replaceElement.dataset.url;

		if (!requestUrl) {
			console.error(`'data-url' must be set`);

			return;
		}

		replaceElement.addEventListener('submit', (event: Event) => {
			event.preventDefault();
			requestDataAndReplaceElement(requestUrl, replaceElement);
		})
	});
}

function replaceAjaxElements() {
	const replaceElements = document.querySelectorAll('.js-ajax');

	replaceElements.forEach(async (replaceElement) => {
		if (!(replaceElement instanceof HTMLElement)) {
			console.error(`'js-ajax' must be set on HTMLElement`);

			return;
		}

		const requestUrl = replaceElement.dataset.url;

		if (!requestUrl) {
			console.error(`'data-url' must be set`);

			return;
		}

		await requestDataAndReplaceElement(requestUrl, replaceElement);
		replaceAjaxFormElemens();
	});
}

replaceAjaxElements();
replaceAjaxFormElemens();
