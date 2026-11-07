import { Subject } from '@/types';

export const stqaMetadata: Omit<Subject, 'units'> = {
  id: 'stqa',
  code: '410245D',
  name: 'Software Testing & Quality Assurance',
  semester: 'Semester VII',
  department: 'Computer Engineering',
  description: 'Comprehensive university examination question bank and structured technical notes covering Software Testing Methodologies, Black/White/Grey Box, Structural Testing, Levels of Testing, Static & Dynamic Design Techniques, SQA, Defect Management, CMM/CMMI, ISO Standards, Test Automation, and Six Sigma.',
  iconName: 'ShieldCheck',
  accentColor: 'emerald',
  syllabusOverview: [
    'Unit 3: Test Case Design Techniques & Testing Levels (Black Box, White Box, Grey Box, Statement & Branch Coverage, Loop Coverage, BVA, Equivalence Class, Static & Dynamic Reviews, Unit, Integration, System, Acceptance, Performance, Regression, Cookies Testing)',
    'Unit 4: Software Quality Assurance and Quality Control (Why Software Has Defects, Impact of Defects, QA vs QC, Quality Plan, Quality Management System Structure, ISO 9000/9001/9000-3, CMM & CMMI 5 Levels, Limitations, McCall and Boehm Quality Models, CASE Tools)',
    'Unit 5: Test Automation and Tools (Manual vs Automation Testing, Automation Life Cycle, Choosing Tools, Selenium Tool Suite: IDE, RC, WebDriver, Grid, Robotic Process Automation [RPA], JMeter)',
    'Unit 6: Quality Management, Six Sigma and Quality Tools (SQA Maintenance, Tasks, Goals & Metrics, Defect Removal Effectiveness [DRE], Six Sigma DMAIC/DMADV, Ishikawa 7 Basic QC Tools, TQM)'
  ]
};
