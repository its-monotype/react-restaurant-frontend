import React from 'react';
import Timer from './Timer';

const StopWatch = () => {
	const [time, setTime] = React.useState(0);

	React.useEffect(() => {
		const interval: NodeJS.Timer | null = setInterval(() => {
			setTime((time) => time + 10);
		}, 10);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return <Timer time={time} />;
};

export default StopWatch;
