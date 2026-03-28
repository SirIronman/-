/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stage,
  LandingStage, 
  StatusReviewStage, 
  ProjectConfirmationStage, 
  OnboardingStage,
  WorkspaceLayout,
  WorkspaceStage,
  ValidationStage,
  DealAssessmentStage,
  ProposalStage,
  FinanceStage,
  OrderStage,
  ManagerKPIStage
} from './components/stages';

export default function App() {
  const [currentStage, setCurrentStage] = useState<Stage>('landing');

  // Dev tools to switch stages
  const stages: Stage[] = [
    'landing', 'status_review', 'project_confirmation', 'onboarding', 
    'workspace', 'validation', 'deal_assessment', 'proposal', 'finance', 'order', 'manager_kpi'
  ];

  const renderStage = () => {
    switch (currentStage) {
      case 'landing':
        return <LandingStage onNext={() => setCurrentStage('status_review')} />;
      case 'status_review':
        return <StatusReviewStage onNext={() => setCurrentStage('project_confirmation')} />;
      case 'project_confirmation':
        return <ProjectConfirmationStage onNext={() => setCurrentStage('onboarding')} />;
      case 'onboarding':
        return <OnboardingStage onNext={() => setCurrentStage('workspace')} />;
      case 'workspace':
        return (
          <WorkspaceLayout currentStage={currentStage}>
            <WorkspaceStage onNext={() => setCurrentStage('validation')} />
          </WorkspaceLayout>
        );
      case 'validation':
        return (
          <WorkspaceLayout currentStage={currentStage}>
            <ValidationStage onNext={() => setCurrentStage('deal_assessment')} />
          </WorkspaceLayout>
        );
      case 'deal_assessment':
        return (
          <WorkspaceLayout currentStage={currentStage}>
            <DealAssessmentStage onNext={() => setCurrentStage('proposal')} />
          </WorkspaceLayout>
        );
      case 'proposal':
        return (
          <WorkspaceLayout currentStage={currentStage}>
            <ProposalStage onNext={() => setCurrentStage('finance')} />
          </WorkspaceLayout>
        );
      case 'finance':
        return (
          <WorkspaceLayout currentStage={currentStage}>
            <FinanceStage onNext={() => setCurrentStage('order')} />
          </WorkspaceLayout>
        );
      case 'order':
        return (
          <WorkspaceLayout currentStage={currentStage}>
            <OrderStage />
          </WorkspaceLayout>
        );
      case 'manager_kpi':
        return (
          <WorkspaceLayout currentStage={currentStage}>
            <ManagerKPIStage onNext={() => setCurrentStage('landing')} />
          </WorkspaceLayout>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Render current stage with transitions */}
      <main className="pb-20 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {renderStage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dev Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-2 flex gap-2 overflow-x-auto z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="text-xs font-bold text-slate-400 uppercase flex items-center px-2 shrink-0">Dev Nav:</div>
        {stages.map(s => (
          <button 
            key={s}
            onClick={() => setCurrentStage(s)}
            className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-colors ${currentStage === s ? 'bg-brand-red text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
