import './assets/styles/style.scss';
import './views/article/article.ts';
import './views/articles/articles.ts';
import './views/countdown/countdown.ts';
import './views/layout/layout.ts';
import './views/layout-404/layout-404.ts';
import './views/login/login.ts';
import './views/poll/poll.ts';
import './views/profile/profile.ts';

// component styles

// input component
const allInputWrappers = document.querySelectorAll('.css-input');

allInputWrappers.forEach((inputWrapper) => {
	const input = inputWrapper.querySelector('input');
	if (!input) {
		return;
	}

	input.addEventListener('focusin', () => {
		inputWrapper.classList.add('focus');
	});

	input.addEventListener('focusout', () => {
		inputWrapper.classList.remove('focus');
	});
});
