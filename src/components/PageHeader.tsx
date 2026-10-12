import type { ReactNode } from 'react';

type PageHeaderProps = { title: string; description: string; actions?: ReactNode };

/** Shared page heading layout for future pages/modules. */
export default function PageHeader({ title, description, actions }: PageHeaderProps) {
  return <div className="directory-heading"><div><h2>{title}</h2><p>{description}</p></div>{actions ? <div className="heading-actions">{actions}</div> : null}</div>;
}
