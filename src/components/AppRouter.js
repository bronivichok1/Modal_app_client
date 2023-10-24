import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Context } from '../index';
import { routes, authRoutes } from '../routes';
import { HOME_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
    const { user } = useContext(Context);

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component} exact />
            )}
            {routes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component} exact />
            )}
            <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
        </Routes>
    );
})

export default AppRouter;