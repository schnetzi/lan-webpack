import './login.scss';

const allInputs = document.querySelectorAll('input');

allInputs.forEach((input) => {
	input.addEventListener('focus', (e: FocusEvent) => {
		const currentElement = e.currentTarget as HTMLElement;
		currentElement.parentElement?.classList.add('focus');
	});

	input.addEventListener('focusout', (e: FocusEvent) => {
		const currentElement = e.currentTarget as HTMLElement;
		currentElement.parentElement?.classList.remove('focus');
	});
});
