import { issuesCollection } from '../services/collections';

export const createIssue = issue => issuesCollection.add(issue)
  .then(snap => snap.id);
