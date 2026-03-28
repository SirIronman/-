import React from 'react';
import { 
  ArrowRight, Shield, Zap, Clock, CheckCircle2, FileText, 
  MessageSquarePlus, CheckCircle, Calendar, Hash, AlertCircle,
  User, Building, Lock, LayoutDashboard, CheckSquare, DollarSign, 
  Settings, Bell, Search, Upload, Plus, MoreHorizontal, AlertTriangle,
  XCircle, Thermometer, Box, ShieldCheck, TrendingUp, BarChart3,
  FileDown, Send, History, CreditCard, UploadCloud, ShoppingBag,
  LogOut, Share2, Edit2, Check
} from 'lucide-react';

export type Stage = 
  | 'landing' 
  | 'status_review' 
  | 'project_confirmation' 
  | 'onboarding' 
  | 'workspace' 
  | 'validation' 
  | 'deal_assessment' 
  | 'proposal' 
  | 'finance' 
  | 'order'
  | 'manager_panel'
  | 'manager_kpi';

interface StageProps {
  onNext: () => void;
}

export function LandingStage({ onNext }: StageProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Платформа для регистрации и защиты B2B проектов
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Быстрый вход, прозрачная квалификация и защита ваших сделок. Зарегистрируйте проект за 2 минуты и получите выделенного инженера.
          </p>
          
          <div className="space-y-6 mb-12">
            <div className="flex gap-4">
              <div className="bg-brand-red/10 p-2 rounded-lg text-brand-red h-fit"><Shield size={24} /></div>
              <div>
                <h3 className="font-semibold text-slate-900">Защита проекта</h3>
                <p className="text-sm text-slate-600">Гарантированный резерв оборудования под ваш проект.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-brand-red/10 p-2 rounded-lg text-brand-red h-fit"><Zap size={24} /></div>
              <div>
                <h3 className="font-semibold text-slate-900">Быстрая оценка</h3>
                <p className="text-sm text-slate-600">Автоматический скоринг и техническая валидация BOM.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-brand-red/10 p-2 rounded-lg text-brand-red h-fit"><Clock size={24} /></div>
              <div>
                <h3 className="font-semibold text-slate-900">Прозрачный процесс</h3>
                <p className="text-sm text-slate-600">Вы всегда знаете, на каком этапе находится ваша заявка.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 sticky top-8">
          <h2 className="text-2xl font-bold mb-6">Оставить заявку</h2>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Компания *</label>
              <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="ООО ТехноПром" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Корпоративный Email *</label>
              <input type="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="name@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Сайт</label>
              <input type="url" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="https://company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Тип проекта *</label>
              <select required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all">
                <option value="">Выберите тип</option>
                <option value="datacenter">ЦОД</option>
                <option value="network">Сети</option>
                <option value="security">Безопасность</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Краткое описание проекта *</label>
              <textarea rows={3} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="Модернизация ЦОД, 15 стоек..."></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-medium py-3 px-4 rounded-xl flex justify-center items-center gap-2 transition-colors mt-6 shadow-sm">
              Отправить заявку <ArrowRight size={18} />
            </button>
            <p className="text-xs text-slate-500 text-center mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export function StatusReviewStage({ onNext }: StageProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-amber-50 border-b border-amber-100 p-6 flex items-center gap-4">
          <div className="bg-amber-100 text-amber-600 p-3 rounded-full">
            <Clock size={28} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-amber-900">Заявка на проверке</h2>
            <p className="text-amber-700 text-sm">Мы анализируем данные. SLA ответа: 4 часа.</p>
          </div>
        </div>
        
        <div className="p-8">
          <h3 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <FileText size={20} className="text-slate-400" />
            Таймлайн обработки
          </h3>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-success-green text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <CheckCircle size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-slate-900">Заявка получена</h4>
                  <span className="text-xs text-slate-500">10:42</span>
                </div>
                <p className="text-sm text-slate-600">Автоматический скоринг пройден.</p>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-400 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Clock size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-amber-200 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-slate-900">Ручная модерация</h4>
                  <span className="text-xs text-amber-600 font-medium">В процессе</span>
                </div>
                <p className="text-sm text-slate-600">Инженер проверяет описание проекта.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
            <button onClick={() => alert('Функционал добавления уточнения будет реализован в следующей итерации.')} className="text-brand-red hover:text-brand-red-hover font-medium flex items-center gap-2 text-sm transition-colors">
              <MessageSquarePlus size={18} />
              Добавить уточнение
            </button>
            <button onClick={onNext} className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-xl font-medium transition-colors shadow-sm">
              Симуляция: Одобрить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectConfirmationStage({ onNext }: StageProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-success-green"></div>
        
        <div className="w-20 h-20 bg-success-green/10 text-success-green rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Проект зарегистрирован</h2>
        <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-sm font-medium text-slate-600 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-red"></span>
          Статус: Soft L1
        </div>
        
        <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left border border-slate-100">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">ID Проекта</p>
              <p className="font-mono font-medium text-slate-900 flex items-center gap-1"><Hash size={16} className="text-slate-400"/> PRJ-8839-X</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Защита (L1)</p>
              <p className="font-medium text-slate-900 flex items-center gap-1"><Clock size={16} className="text-brand-red"/> 14 дней</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 bg-red-50 text-brand-red p-4 rounded-xl border border-red-100 text-sm text-left mb-8">
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <p>
            <strong>Обратите внимание:</strong> Текущий статус фиксирует за вами проект, но не гарантирует резерв оборудования и финальные цены до этапа коммерческой квалификации.
          </p>
        </div>
        
        <button onClick={onNext} className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-medium py-3 px-4 rounded-xl flex justify-center items-center gap-2 transition-colors shadow-sm">
          Перейти к настройке аккаунта <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

export function OnboardingStage({ onNext }: StageProps) {
  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Создание аккаунта</h2>
        <p className="text-slate-600 mt-2">Шаг 2 из 3: Данные администратора</p>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm">1</div>
          <div className="w-12 h-1 bg-brand-red rounded"></div>
          <div className="w-8 h-8 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center font-bold text-sm">2</div>
          <div className="w-12 h-1 bg-slate-200 rounded"></div>
          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-sm">3</div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Название компании *</label>
            <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="ООО ТехноПром" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">ИНН / Tax ID *</label>
            <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="7700000000" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Имя и Фамилия администратора *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <User size={18} />
              </div>
              <input type="text" required className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="Иван Иванов" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Должность</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Building size={18} />
              </div>
              <input type="text" className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="Руководитель проектов" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Пароль *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Lock size={18} />
              </div>
              <input type="password" required className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="••••••••" />
            </div>
          </div>

          <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-xl flex justify-center items-center gap-2 transition-colors mt-8 shadow-sm">
            Продолжить <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

export function WorkspaceLayout({ children, currentStage }: { children: React.ReactNode, currentStage: Stage }) {
  const getTitle = () => {
    switch(currentStage) {
      case 'workspace': return 'Спецификация (BOM)';
      case 'validation': return 'Техническая валидация';
      case 'deal_assessment': return 'Коммерческая оценка';
      case 'proposal': return 'Коммерческое предложение';
      case 'finance': return 'Финансы';
      case 'order': return 'Заказы';
      default: return 'Проект';
    }
  };

  return (
    <div className="min-h-screen bg-bg-main flex font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-sidebar-bg text-slate-300 flex flex-col h-screen sticky top-0">
        {/* Logo Area */}
        <div className="h-16 bg-brand-red flex items-center px-6 shrink-0">
          <span className="text-white font-bold text-xl tracking-wider italic">SYSMATRIX <span className="text-sm font-normal not-italic">B2B</span></span>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6">
          <div>
            <nav className="space-y-1 px-3">
              <div className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${currentStage === 'workspace' ? 'bg-sidebar-active text-white' : 'hover:bg-sidebar-active/50'}`}>
                <LayoutDashboard size={18} /> Главная
              </div>
              <div className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${currentStage === 'order' ? 'bg-sidebar-active text-white' : 'hover:bg-sidebar-active/50'}`}>
                <ShoppingBag size={18} /> Заказы
              </div>
              <div className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${currentStage === 'validation' ? 'bg-sidebar-active text-white' : 'hover:bg-sidebar-active/50'}`}>
                <FileText size={18} /> Проекты
              </div>
              <div className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${currentStage === 'proposal' ? 'bg-sidebar-active text-white' : 'hover:bg-sidebar-active/50'}`}>
                <Box size={18} /> Поставки
              </div>
            </nav>
          </div>

          <div>
            <div className="px-6 mb-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Администрирование</div>
            <nav className="space-y-1 px-3">
              <div className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${currentStage === 'finance' ? 'bg-sidebar-active text-white' : 'hover:bg-sidebar-active/50'}`}>
                <TrendingUp size={18} /> Финансы
              </div>
              <div className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${currentStage === 'deal_assessment' ? 'bg-sidebar-active text-white' : 'hover:bg-sidebar-active/50'}`}>
                <Settings size={18} /> Сервис (RMA)
              </div>
            </nav>
          </div>

          <div>
            <div className="px-6 mb-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Система</div>
            <nav className="space-y-1 px-3">
              <div className="flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-sidebar-active/50 transition-colors">
                <User size={18} /> Профиль
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-sidebar-active/50 transition-colors">
                <Building size={18} /> Клиенты
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-sidebar-active/50 transition-colors">
                <Lock size={18} /> Безопасность
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-sidebar-active/50 transition-colors">
                <Settings size={18} /> Настройки
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Logout */}
        <div className="p-4 shrink-0">
          <button className="flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors w-full">
            <LogOut size={18} /> ВЫЙТИ
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 shrink-0 bg-bg-main">
          <h1 className="text-2xl font-bold text-slate-900">
            {getTitle()}
          </h1>
          <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 shadow-sm">
            <Bell size={18} />
          </button>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 pt-4">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export function WorkspaceStage({ onNext }: StageProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[calc(100vh-10rem)]">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-white">
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-colors">
                <Upload size={16} /> Импорт Excel
              </button>
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-colors">
                <Plus size={16} /> Добавить позицию
              </button>
            </div>
            <div className="flex gap-3">
              <button onClick={onNext} className="px-4 py-2 bg-brand-red rounded-lg text-sm font-medium text-white hover:bg-brand-red-hover flex items-center gap-2 transition-colors shadow-sm">
                Сохранить и продолжить <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="p-4 border-b border-slate-200 flex gap-4 bg-slate-50/50">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Поиск по SKU или описанию..." className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-brand-red outline-none transition-shadow" />
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 text-slate-500 sticky top-0 border-b border-slate-200 z-10 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 font-medium border-r border-slate-200/50 w-12 text-center">
                    <input type="checkbox" className="rounded border-slate-300 text-brand-red focus:ring-brand-red" />
                  </th>
                  <th className="px-4 py-3 font-medium border-r border-slate-200/50">SKU</th>
                  <th className="px-4 py-3 font-medium border-r border-slate-200/50 w-full">Описание</th>
                  <th className="px-4 py-3 font-medium w-24 border-r border-slate-200/50 text-center">Кол-во</th>
                  <th className="px-4 py-3 font-medium border-r border-slate-200/50">Статус</th>
                  <th className="px-4 py-3 font-medium w-16 text-center">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 group transition-colors">
                  <td className="px-4 py-2.5 border-r border-slate-100 text-center">
                    <input type="checkbox" className="rounded border-slate-300 text-brand-red focus:ring-brand-red" />
                  </td>
                  <td className="px-4 py-2.5 font-mono text-xs text-slate-900 border-r border-slate-100">SRV-RACK-2U-G10</td>
                  <td className="px-4 py-2.5 text-slate-600 border-r border-slate-100 truncate max-w-md">Сервер стоечный 2U, 2x CPU, 256GB RAM</td>
                  <td className="px-4 py-2.5 border-r border-slate-100">
                    <input type="number" defaultValue={5} className="w-16 px-2 py-1 border border-slate-200 rounded text-center focus:ring-1 focus:ring-brand-red outline-none font-mono text-xs" />
                  </td>
                  <td className="px-4 py-2.5 border-r border-slate-100">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-success-green/10 text-success-green">
                      <Check size={12} /> Распознано
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <button className="text-slate-400 hover:text-brand-red transition-colors"><Edit2 size={14} /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">Параметры проекта</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Заказчик</span>
                <span className="font-medium text-slate-900">ООО ТехноПром</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Проект</span>
                <span className="font-medium text-slate-900">Модернизация ЦОД</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Локация</span>
                <span className="font-medium text-slate-900">Москва</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Срок реализации</span>
                <span className="font-medium text-slate-900">Q3 2026</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">Документы</h3>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-brand-red transition-colors cursor-pointer">
              <UploadCloud size={32} className="text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-600">Перетащите файлы или <span className="text-brand-red font-medium">выберите</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ValidationStage({ onNext }: StageProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Результаты тех. валидации</h2>
          <p className="text-slate-500 mt-1">Автоматическая проверка спецификации на совместимость и ограничения.</p>
        </div>
        <div className="flex items-center gap-3 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg border border-slate-200 font-medium">
          <ShieldCheck size={20} />
          Статус: L2 (Technical Lead)
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-success-green/10 text-success-green rounded-lg"><Zap size={20} /></div>
            <span className="text-xs font-bold text-success-green bg-success-green/10 px-2 py-1 rounded uppercase tracking-wider">Pass</span>
          </div>
          <h3 className="font-semibold text-slate-900">Энергопотребление</h3>
          <p className="text-sm text-slate-500 mt-1">Расчетная мощность: 4.2 кВт (Лимит: 15 кВт)</p>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-brand-red/30 ring-1 ring-brand-red/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-red-50 text-brand-red rounded-lg"><Thermometer size={20} /></div>
            <span className="text-xs font-bold text-brand-red bg-red-50 px-2 py-1 rounded uppercase tracking-wider">Fail</span>
          </div>
          <h3 className="font-semibold text-slate-900">Тепловой режим</h3>
          <p className="text-sm text-slate-500 mt-1">Превышение тепловыделения для стойки типа А.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-success-green/10 text-success-green rounded-lg"><Box size={20} /></div>
            <span className="text-xs font-bold text-success-green bg-success-green/10 px-2 py-1 rounded uppercase tracking-wider">Pass</span>
          </div>
          <h3 className="font-semibold text-slate-900">Совместимость</h3>
          <p className="text-sm text-slate-500 mt-1">Все трансиверы совместимы с выбранными коммутаторами.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 font-medium text-slate-700">
          Детализация ошибок (1)
        </div>
        <div className="p-6">
          <div className="flex gap-4 items-start">
            <div className="mt-1 text-brand-red"><XCircle size={20} /></div>
            <div>
              <h4 className="font-semibold text-slate-900">Конфликт охлаждения: SRV-RACK-2U-G10</h4>
              <p className="text-sm text-slate-600 mt-1">
                Размещение 5 серверов данной модели в одной стойке без дополнительных модулей охлаждения приведет к перегреву. Рекомендуется добавить модуль COOL-MOD-X1 или уменьшить плотность.
              </p>
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-md transition-colors">
                  Редактировать BOM
                </button>
                <button onClick={onNext} className="px-4 py-2 bg-brand-red hover:bg-brand-red-hover text-white text-sm font-medium rounded-md transition-colors">
                  Симуляция: Исправлено
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DealAssessmentStage({ onNext }: StageProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">Коммерческая квалификация</h2>
        <p className="text-slate-500 mt-1">Оценка параметров сделки и расчет рисков.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Параметры сделки</h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <p className="text-sm text-slate-500 mb-1">Оценочный объем</p>
                <p className="text-xl font-mono font-semibold text-slate-900">$45,000 - $60,000</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Сроки реализации</p>
                <p className="text-xl font-semibold text-slate-900">Q3 2026</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Стадия</p>
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                  Выбор вендора
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Вероятность (AI)</p>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-success-green h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-sm font-bold text-slate-700">65%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Комментарий менеджера</h3>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-700 italic">
              "Клиент расширяет текущий ЦОД. Бюджет подтвержден, ищут оптимальное соотношение цена/качество. Конкурируем с брендом X. Требуется защита проекта для предоставления спец. скидки."
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-sidebar-bg text-white p-6 rounded-xl shadow-sm relative overflow-hidden">
            <div className="absolute -right-6 -top-6 text-slate-700 opacity-50">
              <ShieldCheck size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Trust Score</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">84</span>
                <span className="text-slate-400">/ 100</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-success-green/20 text-success-green border border-success-green/30 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-success-green"></span> Низкий риск
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>История платежей</span>
                  <span className="text-white font-medium">Отличная</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Возраст компании</span>
                  <span className="text-white font-medium">5+ лет</span>
                </div>
              </div>
            </div>
          </div>

          <button onClick={onNext} className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-medium py-3 px-4 rounded-xl flex justify-center items-center gap-2 transition-colors shadow-sm">
            Открыть цены и КП <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProposalStage({ onNext }: StageProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Коммерческое предложение</h2>
          <p className="text-slate-500 mt-1">Специальные проектные цены открыты.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-success-green bg-success-green/10 px-3 py-1.5 rounded-lg border border-success-green/20 font-medium">
          <CheckCircle2 size={14} /> L3 (Approved Deal)
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-end">
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">Итоговая стоимость проекта</p>
                <div className="text-4xl font-mono font-bold text-slate-900">$ 52,480.00</div>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400 mb-1">Действительно до</p>
                <p className="text-sm font-semibold text-slate-700">10 Апреля 2026 (14 дней)</p>
              </div>
            </div>
            <div className="bg-slate-50 p-6">
              <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Состав предложения</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Оборудование (12 позиций)</span>
                  <span className="font-mono font-medium text-slate-900">$ 58,000.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Проектная скидка (Soft L1)</span>
                  <span className="font-mono font-medium text-success-green">- $ 8,120.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Доставка и страховка</span>
                  <span className="font-mono font-medium text-slate-900">$ 2,600.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-3 px-4 rounded-xl flex justify-center items-center gap-2 transition-colors">
              <FileDown size={18} /> Скачать PDF
            </button>
            <button onClick={onNext} className="flex-1 bg-brand-red hover:bg-brand-red-hover text-white font-medium py-3 px-4 rounded-xl flex justify-center items-center gap-2 transition-colors shadow-sm">
              <Send size={18} /> Отправить на согласование
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <History size={18} className="text-slate-400" /> История версий
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-1"><FileText size={16} className="text-brand-red" /></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Версия 2 (Текущая)</p>
                  <p className="text-xs text-slate-500">27 Мар 2026 • Учтены правки по охлаждению</p>
                </div>
              </div>
              <div className="flex gap-3 opacity-60">
                <div className="mt-1"><FileText size={16} className="text-slate-400" /></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Версия 1</p>
                  <p className="text-xs text-slate-500">25 Мар 2026 • Исходный расчет</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-sidebar-bg rounded-xl shadow-sm border border-slate-800 p-6 text-white">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Ваш менеджер</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-slate-700 border-2 border-slate-600 overflow-hidden">
                <img src="https://picsum.photos/seed/manager/100/100" alt="Manager" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold">Алексей Смирнов</p>
                <p className="text-xs text-slate-400">Enterprise Sales</p>
              </div>
            </div>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors mb-3">
              Написать в чат
            </button>
            <p className="text-xs text-slate-400 text-center">Обычно отвечает в течение 15 минут</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FinanceStage({ onNext }: StageProps) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Финансовая проверка</h2>
          <p className="text-slate-500 mt-1">Проверка лимитов для размещения заказа.</p>
        </div>
        <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg border border-amber-200 font-medium text-sm">
          <AlertCircle size={16} /> Статус: Hold
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Кредитный лимит компании</h3>
          
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Доступный остаток</span>
              <span className="font-mono font-medium text-slate-900">$ 15,000.00</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden flex">
              <div className="bg-sidebar-bg h-full" style={{ width: '85%' }}></div>
              <div className="bg-brand-red h-full" style={{ width: '15%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-1 font-mono">
              <span>Использовано: $ 85,000.00</span>
              <span>Общий лимит: $ 100,000.00</span>
            </div>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex gap-3">
            <AlertCircle className="text-brand-red shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-sm font-bold text-brand-red">Недостаточно лимита для заказа</h4>
              <p className="text-sm text-red-700 mt-1">
                Сумма текущего заказа ($52,480.00) превышает доступный кредитный лимит. Для продолжения требуется предоплата или запрос на увеличение лимита.
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-slate-50 grid grid-cols-2 gap-4">
          <button className="bg-white border border-slate-300 hover:border-brand-red hover:ring-1 hover:ring-brand-red p-4 rounded-xl text-left transition-all group">
            <UploadCloud size={24} className="text-slate-400 group-hover:text-brand-red mb-3" />
            <h4 className="font-bold text-slate-900 text-sm">Загрузить платежное поручение</h4>
            <p className="text-xs text-slate-500 mt-1">Оплатить счет на предоплату для разблокировки заказа.</p>
          </button>
          
          <button onClick={onNext} className="bg-white border border-slate-300 hover:border-brand-red hover:ring-1 hover:ring-brand-red p-4 rounded-xl text-left transition-all group">
            <CreditCard size={24} className="text-slate-400 group-hover:text-brand-red mb-3" />
            <h4 className="font-bold text-slate-900 text-sm">Запросить расширение лимита</h4>
            <p className="text-xs text-slate-500 mt-1">Отправить запрос финансовому контролеру (до 2х дней).</p>
            <div className="mt-3 text-xs font-bold text-brand-red flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Симуляция: Одобрить <ArrowRight size={12} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export function ManagerKPIStage({ onNext }: StageProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">KPI Менеджера</h2>
        <p className="text-slate-500 mt-1">Целевые показатели эффективности.</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {[
          { metric: 'Velocity (S4 -> S5)', target: '< 24 часов', reason: 'Своевременная выдача цены повышает вероятность победы на 15%.' },
          { metric: 'Conversion (S2 -> S9)', target: '> 20%', reason: 'Очистка «мусорных» лидов и борьба со сквоттингом.' },
          { metric: 'OPEX на пресейл', target: 'Снижение на 30%', reason: 'Фокус только на валидированных проектах.' },
          { metric: 'Margin Protection', target: 'Отсутствие демпинга', reason: 'Использование жестких guardrails на этапе S5.' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">{kpi.metric}</h3>
            <p className="text-2xl font-bold text-brand-red mb-3">{kpi.target}</p>
            <p className="text-sm text-slate-600">{kpi.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OrderStage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Финальное подтверждение</h2>
          <p className="text-slate-500 mt-1">Проверьте данные перед размещением заказа в ERP.</p>
        </div>
        <div className="flex items-center gap-2 bg-success-green/10 text-success-green px-3 py-1.5 rounded-lg border border-success-green/20 font-medium text-sm">
          <CheckCircle2 size={16} /> Готово к заказу
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm">1</span>
            Детали заказа
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Проект</span>
              <span className="font-medium text-slate-900">PRJ-8839-X</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Спецификация (BOM)</span>
              <span className="font-medium text-slate-900">12 позиций</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Итоговая сумма</span>
              <span className="font-mono font-bold text-slate-900">$ 52,480.00</span>
            </div>
          </div>
        </div>
        <div className="p-6 bg-slate-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm">2</span>
            Подтверждение
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Нажимая кнопку "Разместить заказ", вы подтверждаете корректность всех данных и соглашаетесь с условиями поставки.
          </p>
          <button className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-medium py-3 px-4 rounded-xl flex justify-center items-center gap-2 transition-colors shadow-sm">
            <ShoppingBag size={18} /> Разместить заказ
          </button>
        </div>
      </div>
    </div>
  );
}
