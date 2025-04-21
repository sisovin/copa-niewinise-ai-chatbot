import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
  const router = useRouter();
  const pathnames = router.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li key={href} className="breadcrumb-item active" aria-current="page">
              {value}
            </li>
          ) : (
            <li key={href} className="breadcrumb-item">
              <Link href={href}>{value}</Link>
            </li>
          );
        })}
      </ol>
      <style jsx>{`
        .breadcrumb {
          display: flex;
          flex-wrap: wrap;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          list-style: none;
          background-color: #e9ecef;
          border-radius: 0.25rem;
        }
        .breadcrumb-item + .breadcrumb-item::before {
          display: inline-block;
          padding-right: 0.5rem;
          color: #6c757d;
          content: '/';
        }
        .breadcrumb-item a {
          color: #007bff;
          text-decoration: none;
          background-color: transparent;
        }
        .breadcrumb-item a:hover {
          color: #0056b3;
          text-decoration: underline;
        }
        .breadcrumb-item.active {
          color: #6c757d;
        }
      `}</style>
    </nav>
  );
};

export default Breadcrumbs;
