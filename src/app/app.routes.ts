import { Routes } from '@angular/router';
import { LegalNotice } from './components/legal-notice/legal-notice';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';

export const routes: Routes = [
  {
    path: 'legal-notice',
    component: LegalNotice,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicy,
  },
];
