import './countdown.scss';

interface CountdownDomElements {
	$days: HTMLElement | null;
	$hours: HTMLElement | null;
	$minutes: HTMLElement | null;
	$seconds: HTMLElement | null;
}

function formatClockNumber(number: number): string {
	return number > 9 ? number.toString() : `0${number.toString()}`;
}

function replaceDomValues(
	dateDiff: number,
	countdownDomElements: CountdownDomElements
) {
	const daysAsNumber = Math.floor(dateDiff / 60 / 60 / 24);

	const remainingHourTime = dateDiff - daysAsNumber * 60 * 60 * 24;
	const hoursAsNumber = Math.floor(remainingHourTime / 60 / 60);

	const remainingMinuteTime =
		dateDiff - daysAsNumber * 60 * 60 * 24 - hoursAsNumber * 60 * 60;
	const minutesAsNumber = Math.floor(remainingMinuteTime / 60);

	const remainingSecondTime =
		dateDiff -
		daysAsNumber * 60 * 60 * 24 -
		hoursAsNumber * 60 * 60 -
		minutesAsNumber * 60;
	const secondsAsNumber = Math.floor(remainingSecondTime);

	// eslint can be disabled for the assignments because dom-elements are passed
	// by reference and can therefore be edited
	if (countdownDomElements.$days) {
		// eslint-disable-next-line no-param-reassign
		countdownDomElements.$days.innerHTML = formatClockNumber(
			daysAsNumber
		).toString();
	}

	if (countdownDomElements.$hours) {
		// eslint-disable-next-line no-param-reassign
		countdownDomElements.$hours.innerHTML = formatClockNumber(
			hoursAsNumber
		).toString();
	}

	if (countdownDomElements.$minutes) {
		// eslint-disable-next-line no-param-reassign
		countdownDomElements.$minutes.innerHTML = formatClockNumber(
			minutesAsNumber
		).toString();
	}

	if (countdownDomElements.$seconds) {
		// eslint-disable-next-line no-param-reassign
		countdownDomElements.$seconds.innerHTML = formatClockNumber(
			secondsAsNumber
		).toString();
	}
}

function countdownTimer(
	dateInSeconds: number,
	countdownDomElements: CountdownDomElements,
	countdown: Element
): void {
	const currentDate = new Date(Date.now());
	const currentDateSeconds = Math.floor(currentDate.getTime() / 1000);
	const dateDifferenceSeconds = dateInSeconds - currentDateSeconds;

	if (dateDifferenceSeconds >= 0) {
		replaceDomValues(dateDifferenceSeconds, countdownDomElements);

		setTimeout(() => {
			countdownTimer(dateInSeconds, countdownDomElements, countdown);
		}, 1000);
	} else if (dateDifferenceSeconds === -1) {
		countdown.classList.add('hidden', 'sm:hidden');
	}
}

function isValidDate(dateObject: any): boolean {
	return new Date(dateObject).toString() !== 'Invalid Date';
}

const countdowns = document.querySelectorAll('.js-countdown');

countdowns.forEach((countdown) => {
	if (!(countdown instanceof HTMLElement)) {
		console.error(`'js-countdown' must be set on HTMLElement`);

		return;
	}

	const endDateString = countdown.dataset.endDate;
	if (!endDateString) {
		console.error(
			`'data-end-date' attribute missing or empty on 'js-countdown' element`
		);

		return;
	}

	const endDate = new Date(endDateString);

	if (!isValidDate(endDate)) {
		console.error(
			`The date "${endDateString}" doesn't transform to a valid date.`
		);

		return;
	}

	const dateInSeconds = Math.floor(new Date(endDate).getTime() / 1000);

	const countdownDomElements: CountdownDomElements = {
		$days: countdown.querySelector('.js-days'),
		$hours: countdown.querySelector('.js-hours'),
		$minutes: countdown.querySelector('.js-minutes'),
		$seconds: countdown.querySelector('.js-seconds'),
	};

	countdownTimer(dateInSeconds, countdownDomElements, countdown);
});
