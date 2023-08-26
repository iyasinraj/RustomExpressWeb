import React from 'react';
import AdminHeader from '../pages/Admin/AdminShared/AdminHeader/AdminHeader';
import { Outlet } from 'react-router-dom';
import AdminFooter from '../pages/Admin/AdminShared/AdminFooter/AdminFooter';

const AdminLayout = () => {
    return (
        <div>
            <AdminHeader></AdminHeader>
            <Outlet></Outlet>
            <AdminFooter></AdminFooter>
        </div>
    );
};

export default AdminLayout;