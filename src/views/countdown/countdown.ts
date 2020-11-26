import './countdown.scss';

const testDate = new Date(Date.now());
testDate.setFullYear(testDate.getFullYear() + 1);

const dateInSeconds = Math.floor(new Date(testDate).getTime() / 1000);
let dateDifferenceSeconds = 0;

const $days = document.querySelector('.js-days');
const $hours = document.querySelector('.js-hours');
const $minutes = document.querySelector('.js-minutes');
const $seconds = document.querySelector('.js-seconds');

function formatClockNumber(number: number): string {
	return number > 9 ? number.toString() : `0${number.toString()}`;
}

function replaceDomValues(dateDiff: number) {
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

	if ($days) {
		$days.innerHTML = formatClockNumber(daysAsNumber).toString();
	}

	if ($hours) {
		$hours.innerHTML = formatClockNumber(hoursAsNumber).toString();
	}

	if ($minutes) {
		$minutes.innerHTML = formatClockNumber(minutesAsNumber).toString();
	}

	if ($seconds) {
		$seconds.innerHTML = formatClockNumber(secondsAsNumber).toString();
	}
}

function countdownTimer(): void {
	const currentDate = new Date(Date.now());
	const currentDateSeconds = Math.floor(currentDate.getTime() / 1000);
	dateDifferenceSeconds = dateInSeconds - currentDateSeconds;

	if (dateDifferenceSeconds > 0) {
		replaceDomValues(dateDifferenceSeconds);

		setTimeout(() => {
			countdownTimer();
		}, 1000);
	}
}

countdownTimer();
