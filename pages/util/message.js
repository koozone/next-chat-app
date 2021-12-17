const {DateTime} = require('luxon');

const formatMessage = (nickName, message) => {
	return {
		nickName,
		message,
		date: DateTime.now().toMillis(),
	};
};

module.exports = formatMessage;
