import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CallWaiterDonePage from '../../pages/call-waiter/CallWaiterDonePage';
import CallWaiterPage from '../../pages/call-waiter/CallWaiterPage';
import HistoryPage from '../../pages/history/HistoryPage/HistoryPage';
import HomePage from '../../pages/home/HomePage';
import ReviewNegativeDonePage from '../../pages/review/ReviewNegativeDonePage';
import ReviewNegativePage from '../../pages/review/ReviewNegativePage';
import ReviewPage from '../../pages/review/ReviewPage';
import ReviewPositivePage from '../../pages/review/ReviewPositivePage';

export enum RouteNames {
	CALL_WAITER = '/call-waiter',
	CALL_WAITER_DONE = '/call-waiter/done',
	REVIEW = '/review',
	REVIEW_POSITIVE = '/review/positive',
	REVIEW_NEGATIVE = '/review/negative',
	REVIEW_NEGATIVE_DONE = '/review/negative/done',
	HISTORY = '/history',
}

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path={RouteNames.CALL_WAITER} element={<CallWaiterPage />} />
			<Route path={RouteNames.CALL_WAITER_DONE} element={<CallWaiterDonePage />} />
			<Route path={RouteNames.REVIEW} element={<ReviewPage />} />
			<Route path={RouteNames.REVIEW_POSITIVE} element={<ReviewPositivePage />} />
			<Route path={RouteNames.REVIEW_NEGATIVE} element={<ReviewNegativePage />} />
			<Route path={RouteNames.REVIEW_NEGATIVE_DONE} element={<ReviewNegativeDonePage />} />
			<Route path={RouteNames.HISTORY} element={<HistoryPage />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};

export default AppRouter;
