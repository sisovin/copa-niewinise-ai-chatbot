import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Sidebar = () => {
  const router = useRouter();
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Settings', path: '/settings' },
    { name: 'Billing Settings', path: '/billing-settings' },
  ];

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li key={item.name} className={router.pathname === item.path ? 'active' : ''}>
            <Link href={item.path}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background-color: #f4f4f4;
          padding: 20px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin: 10px 0;
        }
        .active a {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
