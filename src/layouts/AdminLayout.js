import React from 'react';
import AdminHeader from '../components/Admin/AdminShared/AdminHeader/AdminHeader';
import { Outlet } from 'react-router-dom';
import AdminFooter from '../components/Admin/AdminShared/AdminFooter/AdminFooter';

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