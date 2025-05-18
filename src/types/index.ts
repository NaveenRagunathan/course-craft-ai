export type FeatureKey = 'courseLimit' | 'notionExport' | 'basicOutline' | 'lessonSummaries' | 
  'unlimitedCourses' | 'pdfExport' | 'advancedStructuring' | 'customBranding' |
  'emailTemplates' | 'gumroadIntegration' | 'whiteLabel' | 'premiumTemplates' |
  'advancedExport' | 'prioritySupport' | 'earlyAccess';

export interface FeatureDetails {
  [key: string]: {
    description: string;
    timeSaved: string;
  };
}

export interface Plan {
  name: string;
  price: {
    monthly: number;
    annually: number;
  };
  description: string;
  features: Array<{
    text: string;
    key?: FeatureKey;
  }>;
  highlighted?: boolean;
  theme: {
    bg: string;
    text: string;
    border: string;
  };
  cta: string;
  note?: string;
}
