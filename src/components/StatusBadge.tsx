import type { ReactNode } from 'react';

type StatusBadgeProps = { status: string; children?: ReactNode };

/** Consistent status indicator shared by tables and tracking cards. */
export default function StatusBadge({ status, children }: StatusBadgeProps) {
  const className = status.toLowerCase().replaceAll(' ', '-');
  return <span className={'status-badge ' + className}><i aria-hidden="true" />{children ?? status}</span>;
}
