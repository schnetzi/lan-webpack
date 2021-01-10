import './modal.scss';
import MicroModal from 'micromodal';

MicroModal.init({
	openTrigger: 'data-modal-open', // [3]
	closeTrigger: 'data-modal-close', // [4]
	openClass: 'css-modal--open', // [5]
	disableScroll: true, // [6]
	disableFocus: false, // [7]
	awaitOpenAnimation: true, // [8]
	awaitCloseAnimation: false, // [9]
	debugMode: true // [10]
  });
