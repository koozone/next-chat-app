export const copyClipboard = (targetEl) => {
	let returnBln = false;
	// const copyButton = document.getElementById('copyButton');
	// const codeEle = document.getElementById('sampleCode');
	const selection = window.getSelection();

	// Save the current selection
	const currentRange = selection.rangeCount === 0 ? null : selection.getRangeAt(0);

	// Select the text content of code element
	const range = document.createRange();
	range.selectNodeContents(targetEl);
	selection.removeAllRanges();
	selection.addRange(range);

	// Copy to the clipboard
	try {
		document.execCommand('copy');
		// copyButton.innerHTML = 'Copied';
		// runStateData.change('isCopy', true);

		// setTimeout(() => {
		// 	runStateData.change('isCopy', false);
		// }, 1000);
		returnBln = true;
	} catch (err) {
		// Unable to copy
		// copyButton.innerHTML = 'Copy';
	} finally {
		// Restore the previous selection
		selection.removeAllRanges();
		currentRange && selection.addRange(currentRange);
	}
	return returnBln;
};
