export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_adgroup?: string;
  utm_content?: string;
  utm_term?: string;
  utm_device?: string;
  placement?: string;
  matchtype?: string;
}

export interface LeadFormData {
  leadId?: string;
  name: string;
  phone: string;
  email: string;
  experience: string;
  specialization: string;
  stage: 'Stage 1' | 'Complete';
  source: string;
}

export interface Accolade {
  title: string;
  subtitle: string;
  rank?: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}