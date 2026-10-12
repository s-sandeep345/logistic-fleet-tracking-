import { Search } from 'lucide-react';

type EmptyStateProps = { title: string; description?: string };

/** Reusable empty-state panel for filtered tables and lists. */
export default function EmptyState({ title, description = 'Try changing your search or filters.' }: EmptyStateProps) {
  return <div className="empty-state" role="status"><Search aria-hidden="true"/><b>{title}</b><p>{description}</p></div>;
}
