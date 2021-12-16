import React, { Suspense } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import Logo from '../logo.svg'
import { routes } from './routes';

const Navigation = () => (
	<Suspense fallback={<span>Loading...</span>}>
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={Logo} alt="React logo"/>
					<ul>
						{routes.map(({to, name}) => (
							<li key={to}>
								<NavLink to={to} className={({isActive}) => isActive ? 'nav-active': ''}>{name}</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<Routes>
					{routes.map(({path, component: Component}) => (
						<Route key={path} path={path} element={<Component />}/>
					))}
					<Route path="/*" element={<Navigate to={routes[0].to} replace />}/>
				</Routes>
			</div>
		</BrowserRouter>
	</Suspense>
);

export default Navigation;
