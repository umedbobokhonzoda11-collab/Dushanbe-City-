/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Delete, Fingerprint, Menu, MessageSquare, Bell, Search, Eye, RefreshCw, Grid, X, Zap, Car, Bird, Home, ArrowRightLeft, LayoutGrid, History, Scan, Star, Download, Repeat, Plus, ChevronLeft, Contact2, Check } from 'lucide-react';

// --- Types ---
type Page = 'home' | 'history' | 'payment';

// --- Transaction Detail Component ---
function TransactionDetail({ transaction, onBack, LogoComponent }: { transaction: any, onBack: () => void, LogoComponent: any }) {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans select-none overflow-x-hidden p-8" id="transaction-detail" style={{ transform: 'scale(0.7)', transformOrigin: 'top center', width: '142.86%', minHeight: '142.86vh', marginLeft: '-21.43%' }}>
      <div className="w-20 h-1 bg-gray-300 rounded-full mx-auto mb-6" />

      {/* Header Info */}
      <div className="flex justify-between items-start mb-8">
        <div className="w-56">
          <LogoComponent className="w-full h-auto" />
        </div>
        <div className="text-right text-xl font-bold text-gray-800 leading-[1.3] mt-2" style={{ transform: 'scale(0.8)', transformOrigin: 'top right' }}>
          ЗАО "Душанбе Сити Банк"<br />
          ИНН: 510022404<br />
          Таджикистан, г. Душанбе<br />
          ул. Сохили 5"
        </div>
      </div>

      <div className="h-0.5 bg-gray-200 w-full mb-4" />

      {/* Details List */}
      <div className="flex flex-col gap-1.5 mb-4">
        {[
          { label: 'Дата операции:', value: '25.04.2026' },
          { label: 'Время операции:', value: transaction.time },
          { label: 'Номер операции:', value: '1651030404' },
          { label: 'Поставщик:', value: 'DC (по номеру телефона)' },
          { label: 'Счет отправителя:', value: '9762***9372' },
          { label: 'Счет получателя:', value: transaction.number },
          { label: 'Сумма операции:', value: transaction.amount },
          { label: 'Комиссия:', value: '0.00' },
          { label: 'Статус:', value: 'Успешный' }
        ].map((item, idx) => (
          <div key={idx} className="flex justify-between items-start">
            <span className="text-xl font-bold text-gray-400 flex-1">{item.label}</span>
            <span className="text-xl font-black text-gray-500 text-right flex-1">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="h-0.5 bg-gray-200 w-full mb-4" />

      {/* Operation Successful Box - Styled as a sharp-cornered stamp */}
      <div className="flex justify-center mb-6">
        <div className="border-4 border-blue-200 px-1 py-4 rounded-none flex flex-col items-center">
          <span className="text-blue-300 text-xs font-bold uppercase tracking-widest text-center">ЗАО «Душанбе Сити Банк»</span>
          <span className="text-blue-400 text-xl font-black uppercase text-center mt-1 tracking-tight">Операция выполнена</span>
        </div>
      </div>

      {/* Action Icons */}
      <div className="grid grid-cols-4 gap-4 mb-8 px-4">
        {[
          { icon: <MessageSquare className="w-12 h-12 text-[#1a5fb4]" strokeWidth={2.5} />, label: 'Поделиться' },
          { icon: <Download className="w-12 h-12 text-[#1a5fb4]" strokeWidth={2.5} />, label: 'Сохранить' },
          { icon: <Star className="w-12 h-12 text-[#1a5fb4]" strokeWidth={2.5} />, label: 'В избранные' },
          { icon: <Repeat className="w-12 h-12 text-[#1a5fb4]" strokeWidth={2.5} />, label: 'Повторить' }
        ].map((action, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
             <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-lg border border-gray-100 active:bg-gray-50">
               {action.icon}
             </div>
             <span className="text-lg font-bold text-gray-500 text-center leading-tight">{action.label}</span>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-auto pt-10">
        <motion.button 
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="w-full bg-[#f07e26] text-white py-8 rounded-[2rem] text-4xl font-black shadow-xl"
        >
          Назад
        </motion.button>
      </div>
    </div>
  );
}

// --- History Component ---
function HistoryScreen({ onTabChange, onTransactionSelection, transactions }: { onTabChange: (tab: string) => void, onTransactionSelection: (tx: any) => void, transactions: any[] }) {

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans select-none overflow-x-hidden pb-32" id="history-screen" style={{ transform: 'scale(0.8)', transformOrigin: 'top center', width: '125%', minHeight: '125vh', marginLeft: '-12.5%' }}>
      {/* Tabs */}
      <div className="bg-white pt-10 flex border-b border-gray-100" id="history-tabs">
        <div className="flex-1 flex flex-col items-center py-6 relative">
          <span className="text-2xl font-bold text-gray-800 tracking-tight">Операции</span>
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#007bff]" />
        </div>
        <div className="flex-1 flex flex-col items-center py-6">
          <span className="text-2xl font-bold text-gray-400 tracking-tight">Выписка</span>
        </div>
      </div>

      {/* Updated Status */}
      <div className="flex items-center justify-center gap-3 py-8 text-gray-400 text-sm font-bold" id="update-status">
        <span>Обновлено: 25.04.26 - 18:08</span>
        <div className="w-7 h-7 rounded-full border-2 border-[#007bff] flex items-center justify-center shadow-sm">
           <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#007bff] fill-none stroke-current" strokeWidth={4}>
             <path d="M20 6L9 17L4 12" />
           </svg>
        </div>
      </div>

      {/* Date Header */}
      <div className="px-6 mb-6">
        <h3 className="text-center text-xl font-black text-[#1a1a1a]">Сегодня</h3>
      </div>

      {/* Transaction List Container */}
      <div className="px-5" id="transaction-list">
        <div className="bg-white rounded-[2.5rem] p-1 shadow-md border border-gray-100">
          <div className="bg-[#f0f7ff] rounded-[2.3rem] overflow-hidden divide-y divide-gray-100">
            {transactions.map((tx, i) => (
              <div 
                key={i} 
                className="px-8 py-7 flex flex-col gap-1 active:bg-[#e6f0ff] transition-colors cursor-pointer"
                onClick={() => onTransactionSelection(tx)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-gray-400 text-base font-medium">9762***9372</span>
                    <span className="text-2xl font-black text-gray-600 tracking-[0.01em] origin-left scale-[0.7] inline-block">{tx.number}</span>
                    <span className="text-gray-400 text-lg font-medium">DC (по номеру телефона)</span>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                     <div className="flex items-center gap-2">
                       <span className="text-2xl font-black text-gray-700 tracking-[0.01em] origin-right scale-[0.9] inline-block">{tx.amount}</span>
                       <div className="w-6 h-6 border-2 border-[#56d0a0] rounded-full flex items-center justify-center text-[#56d0a0]">
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth={4}>
                            <path d="M20 6L9 17L4 12" />
                          </svg>
                       </div>
                     </div>
                     <span className="text-gray-400 font-bold text-lg">{tx.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Payment Page Component ---
function PaymentPage({ onBack, LogoComponent, onPaymentSuccess }: { onBack: () => void, LogoComponent: any, onPaymentSuccess: (tx: any) => void }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('979450770');
  const [amount, setAmount] = useState('1.00');

  const currentDate = new Date().toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  }).replace(/\//g, '.');

  const currentTime = new Date().toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className="min-h-screen bg-[#f2f7fb] font-sans select-none overflow-x-hidden flex flex-col relative">
      {/* Header */}
      <header className="bg-[#007bff] px-4 py-3 flex items-center justify-between text-white shadow-md">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-1">
            <ChevronLeft className="w-7 h-7" />
          </button>
          <h1 className="text-lg font-bold">DC (по номеру телефона)</h1>
        </div>
        <button className="p-1">
          <Star className="w-6 h-6" />
        </button>
      </header>

      {/* Form Content */}
      <div className="p-4 flex-1 space-y-3">
        {/* Phone Input */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex items-center gap-3">
          <input 
            type="text" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Номер телефона получате..." 
            className="flex-1 bg-transparent border-none outline-none text-gray-800 font-medium placeholder:text-gray-400"
          />
          <div className="flex gap-2">
            <History className="w-5 h-5 text-blue-600" />
            <div className="bg-blue-600/10 p-1 rounded-lg">
              <Contact2 className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="bg-blue-600/10 rounded-2xl p-3 shadow-sm border border-blue-100 flex items-center justify-center">
           <span className="text-blue-600 font-bold text-sm">Проверить номер/счет</span>
        </div>

        {/* Amount Input */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 font-bold uppercase text-xs">TJS</span>
            <input 
              type="text" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Сумма" 
              className="flex-1 bg-transparent border-none outline-none text-base font-bold text-gray-800 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Comment Input */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex items-start">
           <input 
            type="text" 
            placeholder="Комментарий" 
            className="w-full bg-transparent border-none outline-none text-gray-800 font-medium placeholder:text-gray-400 resize-none h-6"
          />
        </div>

        {/* Min Sum Label */}
        <div className="text-right text-xs text-gray-500 font-medium px-2">
          Мин. сумма: 1.00 TJS
        </div>

        {/* Card Selection Horizontal Scroll */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
           {/* Card 1 */}
           <div className="flex-shrink-0 w-24 h-20 bg-[#007bff] rounded-xl p-2.5 text-white shadow-md flex flex-col justify-between">
              <span className="text-[8px] font-bold opacity-80">DBC****9372</span>
              <span className="text-xs font-bold truncate transform scale-y-[0.85] origin-bottom inline-block">5703.43 TJS</span>
           </div>

           {/* Card 2 */}
           <div className="flex-shrink-0 w-24 h-20 bg-gradient-to-br from-blue-300 to-orange-200 rounded-xl p-2.5 text-white shadow-md relative overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-start">
                 <span className="text-[8px] font-bold">КРЕДИТ</span>
                 <div className="bg-red-600 text-white text-[6px] font-bold px-1 py-0.5 rounded-xs">NEW</div>
              </div>
              <span className="text-xs font-bold">-</span>
              <div className="absolute right-0 bottom-0 w-8 h-8 bg-white/10 rounded-tl-full" />
           </div>

           {/* Card 3 */}
           <div className="flex-shrink-0 w-24 h-20 bg-white rounded-xl p-2.5 shadow-sm border border-gray-100 flex flex-col justify-between items-start">
              <span className="text-[7px] font-bold text-gray-400">BAB****....</span>
              <span className="text-[8px] font-bold text-gray-400 uppercase mt-auto">MOBILE</span>
           </div>
        </div>

        {/* Disclaimer Text */}
        <div className="px-2 pt-2">
          <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
            Для перевода на карту Душанбе Сити укажите номер кошелька и введите сумму перевода. Без комиссии. Если вы отправили деньги не тому человеку, обратитесь к получателю перевода. Деньги может вернуть только получатель.
          </p>
        </div>
      </div>

      {/* Large Bottom Button */}
      <div className="p-4 bg-white/50 border-t border-gray-100 mt-auto">
        <button 
          onClick={() => setShowConfirm(true)}
          className="w-full bg-[#ff782d] text-white py-4 rounded-2xl text-xl font-bold shadow-lg transition-transform active:scale-[0.98]"
        >
           Далее
        </button>
      </div>

      {/* Confirmation Step (Overlays) */}
      {showConfirm && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[100]" onClick={() => setShowConfirm(false)} />
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white z-[110] rounded-t-2xl shadow-2xl flex flex-col max-h-[85vh]"
          >
             {/* Handle */}
             <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mt-3 mb-2" />

             <div className="px-6 pb-6 space-y-3">
                <h2 className="text-xl font-bold text-gray-800">Подтверждение платежа</h2>
                
                <div className="text-4xl font-bold text-[#007bff] py-1">
                   {amount}.00 TJS
                </div>

                <div className="space-y-2">
                   <div className="flex justify-between items-start border-b border-gray-50 pb-1.5">
                      <span className="text-xs text-gray-400 font-medium">Поставщик:</span>
                      <span className="text-xs text-gray-800 font-bold text-right ml-4">DC (по номеру телефона)</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                      <span className="text-xs text-gray-400 font-medium">Номер/счет:</span>
                      <span className="text-xs text-gray-800 font-bold">{phoneNumber}</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                      <span className="text-xs text-gray-400 font-medium">Способ оплаты:</span>
                      <span className="text-xs text-gray-800 font-bold">9762 **** **** 9372</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                      <span className="text-xs text-gray-400 font-medium">Сумма зачисления:</span>
                      <span className="text-xs text-gray-800 font-bold">{amount}.00 TJS</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                      <span className="text-xs text-gray-400 font-medium">Комиссия:</span>
                      <span className="text-xs text-gray-800 font-bold">0.00 TJS</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                      <span className="text-xs text-gray-400 font-medium">Сумма списания:</span>
                      <span className="text-xs text-gray-800 font-bold">{amount}.00 TJS</span>
                   </div>
                </div>

                <button 
                  className="w-full bg-[#ff782d] text-white py-3.5 rounded-2xl text-lg font-bold shadow-lg mt-2 active:scale-[0.98] transition-transform"
                  onClick={() => {
                    const newTx = {
                        number: phoneNumber,
                        amount: amount,
                        time: currentTime
                    };
                    onPaymentSuccess(newTx);
                    setShowConfirm(false);
                    setShowSuccess(true);
                  }}
                >
                   Подтверждаю
                </button>
             </div>
          </motion.div>
        </>
      )}

      {/* Success Step (Overlays) */}
      {showSuccess && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[120]" />
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white z-[130] rounded-t-2xl shadow-2xl flex flex-col max-h-[85vh]"
          >
             <div className="p-8 flex flex-col items-start gap-4">
                <div className="w-16 h-16 rounded-full border-4 border-[#00c853] flex items-center justify-center p-2 mb-2 shadow-[0_0_15px_rgba(0,200,83,0.2)]">
                   <Check className="w-8 h-8 text-[#00c853]" strokeWidth={4} />
                </div>

                <h2 className="text-2xl font-bold text-gray-800">Платеж выполнен</h2>

                <div className="w-full space-y-4 py-2 text-sm">
                   <div className="flex justify-between items-start gap-4">
                      <span className="text-gray-400 font-medium">Поставщик:</span>
                      <span className="text-gray-800 font-bold text-right flex-1">DC (по номеру телефона)</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">Получатель:</span>
                      <span className="text-gray-800 font-bold">{phoneNumber}</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">К зачислению:</span>
                      <span className="text-gray-800 font-bold">{amount}</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">Комиссия:</span>
                      <span className="text-gray-800 font-bold">0.00</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">Дата:</span>
                      <span className="text-gray-800 font-bold">{currentDate}</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">Время:</span>
                      <span className="text-gray-800 font-bold">{currentTime}</span>
                   </div>
                </div>

                <button 
                  className="w-full bg-[#ff782d] text-white py-4 rounded-2xl text-xl font-bold shadow-lg mt-6 active:scale-[0.98] transition-transform"
                  onClick={onBack}
                >
                   На главную
                </button>
             </div>
          </motion.div>
        </>
      )}
    </div>
  );
}

// --- Dashboard Component ---
function Dashboard({ onTabChange, onMenuClick, LogoComponent, onPaymentClick }: { onTabChange: (tab: string) => void, onMenuClick: () => void, LogoComponent: any, onPaymentClick: () => void }) {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="min-h-screen bg-[#f2f7fb] flex flex-col font-sans select-none overflow-x-hidden pb-36" id="dashboard">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-3 mt-1" id="dash-header">
        <Menu className="w-7 h-7 text-[#1a5fb4]" onClick={onMenuClick} />
        <div className="flex items-center gap-1" id="dash-logo">
           <LogoComponent className="w-20 h-8" />
        </div>
        <div className="flex items-center gap-4" id="dash-actions">
          <MessageSquare className="w-6 h-6 text-[#1a5fb4]" />
          <Bell className="w-6 h-6 text-[#1a5fb4]" />
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-5 mb-2" id="search-container">
        <div className="bg-white rounded-xl flex items-center px-4 py-2 shadow-sm border border-gray-50">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Поиск" 
            className="flex-1 bg-transparent outline-none text-gray-700 font-medium text-sm"
          />
        </div>
      </div>

      {/* Balance Section */}
      <div className="px-5 flex gap-2 mb-2" id="balance-section">
        <div className="bg-[#007bff] rounded-2xl py-4 px-6 flex-[4] text-white shadow-md relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-3xl font-bold tracking-tighter inline-block transform scale-y-[0.85] origin-bottom px-0.5">
                {showBalance ? "5703.43" : "••••••"}
              </span>
              <span className="text-base font-bold opacity-80 mt-1">TJS</span>
              <div className="flex gap-3 ml-auto">
                <button onClick={() => setShowBalance(!showBalance)}>
                  <Eye className={`w-5 h-5 ${showBalance ? 'opacity-100' : 'opacity-50'}`} />
                </button>
                <RefreshCw className="w-5 h-5 opacity-100" />
              </div>
            </div>
            <div className="text-blue-100/70 text-[10px] font-medium">
              25.04.26 - 17:16:05
            </div>
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-12 -mt-12" />
        </div>
        <div className="bg-white rounded-xl flex-1 flex items-center justify-center shadow-sm border border-gray-100">
          <Grid className="w-7 h-7 text-[#007bff]" />
        </div>
      </div>

      {/* Quick Actions Scroll */}
      <div className="flex overflow-x-auto px-5 gap-3 mb-2 no-scrollbar pb-1" id="quick-actions">
        {/* Action 1 */}
        <div 
          className="flex-shrink-0 flex flex-col items-center gap-1.5 w-24 cursor-pointer active:opacity-70 transition-opacity"
          onClick={onPaymentClick}
        >
          <div className="bg-white rounded-2xl p-2 w-20 h-20 flex flex-col items-center justify-center shadow-sm relative border border-gray-100">
             <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-1">
                <LogoComponent className="w-7 h-4" />
             </div>
             <span className="text-[8px] text-center font-bold text-gray-700 leading-tight px-1">DC (по номеру телефона)</span>
          </div>
        </div>
      </div>

      {/* Banners */}
      <div className="mb-2 overflow-hidden h-[128px]">
        <div className="flex overflow-x-auto px-5 gap-3 no-scrollbar origin-top-left scale-[0.8] w-[125%]" id="banners">
          <div className="flex-shrink-0 w-72 h-40 bg-[#4b2ba2] rounded-[2rem] p-5 text-white relative overflow-hidden flex flex-col justify-center">
              <div className="relative z-10 w-full">
                <h3 className="text-lg font-bold uppercase leading-tight mb-1">Переводы без комиссии из Уралсиба</h3>
                <div className="flex gap-2">
                  <div className="w-6 h-4 rounded-xs overflow-hidden flex flex-col border border-white/20">
                    <div className="h-1/3 bg-white" />
                    <div className="h-1/3 bg-blue-600" />
                    <div className="h-1/3 bg-red-600" />
                 </div>
                  <div className="w-6 h-4 rounded-xs overflow-hidden flex flex-col border border-white/20">
                    <div className="h-1/3 bg-red-600" />
                    <div className="h-1/3 bg-white" />
                    <div className="h-1/3 bg-green-600" />
                 </div>
               </div>
             </div>
             <div className="absolute right-0 bottom-0 w-28 h-32 bg-white/5 rounded-tl-full" />
             <div className="absolute right-3 bottom-3 w-20 h-24 bg-orange-400 rounded-2xl flex items-center justify-center font-bold text-3xl shadow-md">0%</div>
          </div>
          <div className="flex-shrink-0 w-72 h-40 bg-gradient-to-br from-green-50 to-green-100 rounded-[2rem] p-5 border border-green-200 relative overflow-hidden">
             <h3 className="text-lg font-bold text-gray-800 uppercase leading-tight mb-3">Соҳиби хона бо ипотека шавед</h3>
             <div className="bg-green-500/80 text-white px-4 py-1.5 rounded-full inline-block text-[10px] font-bold shadow-sm uppercase">ipoteka.dc.tj</div>
             <div className="absolute right-0 bottom-0 w-32 h-full bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=200')] bg-cover opacity-10" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-5 mb-2" id="categories-bar">
        <div className="bg-white rounded-[2rem] p-3 flex items-center justify-between shadow-sm border border-gray-100">
           <div className="flex flex-col items-center flex-1">
             <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white mb-1">
               <Zap className="w-5 h-5 fill-white" />
             </div>
             <span className="font-bold text-[10px] text-gray-800">Neru</span>
           </div>
           <div className="h-6 w-px bg-gray-100 mx-1" />
           <div className="flex flex-col items-center flex-1">
             <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white relative mb-1">
                <Car className="w-5 h-5" />
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border border-white" />
             </div>
             <span className="font-bold text-[10px] text-gray-800">Parking</span>
           </div>
           <div className="h-6 w-px bg-gray-100 mx-1" />
           <div className="flex flex-col items-center flex-1">
             <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-1">
               <Bird className="w-5 h-5" />
             </div>
             <span className="font-bold text-[10px] text-gray-800">Шохин</span>
           </div>
        </div>
      </div>

      {/* Grid of services */ }
      <div className="px-5 grid grid-cols-1 gap-2 mb-2" id="services-grid">
         <div className="flex gap-2">
           <div className="bg-white rounded-[2rem] p-5 flex-1 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden h-36">
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-1 leading-tight">Оплата услуг</h4>
                <p className="text-[10px] text-gray-500 leading-tight">Мобильная связь,{"\n"}Интернет,{"\n"}Коммунальные услуги</p>
              </div>
              <div className="absolute right-0 bottom-0 w-20 h-20 bg-blue-100/50 rounded-tl-full opacity-50" />
           </div>
           <div className="bg-white rounded-[2rem] p-5 flex-1 shadow-sm border border-gray-100 flex flex-col justify-between h-36 overflow-hidden">
              <h4 className="text-lg font-bold text-gray-800 leading-tight">Карты</h4>
              <div className="bg-yellow-400 w-full h-16 rounded-xl relative overflow-hidden p-3 shadow-sm">
                 <div className="w-8 h-1 bg-yellow-200/40 rounded-full absolute bottom-3 left-3" />
                 <div className="w-3 h-1 bg-yellow-200/40 rounded-full absolute bottom-3 left-12" />
              </div>
           </div>
         </div>

         <div className="flex gap-2 h-20">
           <div className="bg-white rounded-2xl p-3 flex-[1] shadow-sm border border-gray-100 flex items-center justify-center">
              <h4 className="text-xs font-bold text-gray-800">Кредиты</h4>
           </div>
           <div className="bg-white rounded-2xl p-3 flex-[1] shadow-sm border border-gray-100 flex items-center justify-center">
              <h4 className="text-xs font-bold text-gray-800">Депозиты</h4>
           </div>
           <div className="bg-white rounded-2xl p-3 flex-[1] shadow-sm border border-gray-100 flex items-center justify-center">
              <h4 className="text-xs font-bold text-gray-800 leading-tight text-center">Курс валют</h4>
           </div>
         </div>
      </div>
    </div>
  );
}

// --- PIN Entrance Component ---
export default function App() {
  const [pin, setPin] = useState<number[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<Page>('home');
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const [customLogo, setCustomLogo] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [transactions, setTransactions] = useState([
    { number: '992987434381', amount: '10.50', time: '17:16:05' },
    { number: '992931300488', amount: '2.50', time: '17:08:09' },
    { number: '992880183218', amount: '20.00', time: '12:40:17' },
    { number: '992900778777', amount: '2.50', time: '08:31:39' },
    { number: '992939631818', amount: '6.00', time: '08:25:21' },
  ]);

  const addTransaction = (tx: any) => {
    setTransactions(prev => [tx, ...prev]);
  };
  const maxPinLength = 4;

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomLogo(reader.result as string);
        setIsSidebarOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const LogoComponent = ({ className }: { className?: string }) => {
    if (customLogo) {
      return <img src={customLogo} alt="Logo" className={className} referrerPolicy="no-referrer" />;
    }
    return (
      <svg viewBox="0 0 160 100" className={className}>
        <path d="M55 20 H30 C20 20 15 25 15 35 V75 C15 85 20 90 30 90 H55 Q80 90 80 55 Q80 20 55 20 Z M52 75 H35 V35 H52 Q63 35 63 55 Q63 75 52 75 Z" fill="#1a5fb4" />
        <path d="M95 20 Q70 20 70 55 Q70 90 95 90 H130 V75 H95 Q85 75 85 55 Q85 35 95 35 H130 V20 Z" fill="#f07e26" />
        <text x="105" y="65" fontFamily="Arial" fontWeight="900" fontSize="22" fill="#1a5fb4">CITY</text>
        <text x="105" y="85" fontFamily="Arial" fontWeight="900" fontSize="22" fill="#1a5fb4">DUSHANBE</text>
      </svg>
    );
  };

  const handleNumberClick = (num: number) => {
    if (pin.length < maxPinLength) {
      setPin(prev => [...prev, num]);
    }
  };

  useEffect(() => {
    if (pin.length === maxPinLength) {
      if (pin.join('') === '2222') {
        setTimeout(() => setIsLoggedIn(true), 200);
      } else {
        setTimeout(() => setPin([]), 400);
      }
    }
  }, [pin]);

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (isLoggedIn) {
     if (selectedTransaction) {
        return (
          <TransactionDetail 
            transaction={selectedTransaction} 
            onBack={() => setSelectedTransaction(null)} 
            LogoComponent={LogoComponent}
          />
        );
     }

     if (activeTab === 'payment') {
        return (
          <PaymentPage 
            onBack={() => setActiveTab('home')} 
            LogoComponent={LogoComponent}
            onPaymentSuccess={addTransaction}
          />
        );
     }

     return (
       <div className="relative">
         {/* Sidebar Overlay */}
         {isSidebarOpen && (
           <div 
             className="fixed inset-0 bg-black/50 z-[60]" 
             onClick={() => setIsSidebarOpen(false)}
           />
         )}
         
         {/* Sidebar */}
         <div className={`fixed top-0 left-0 bottom-0 w-80 bg-white z-[70] transform transition-transform duration-300 shadow-2xl p-6 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
           <div className="flex justify-between items-center mb-10">
             <h2 className="text-2xl font-black text-gray-800">Меню</h2>
             <X className="w-8 h-8 text-gray-400" onClick={() => setIsSidebarOpen(false)} />
           </div>
           
           <div className="space-y-4">
             <div className="relative">
               <input 
                 type="file" 
                 id="logo-upload" 
                 className="hidden" 
                 accept="image/*"
                 onChange={handleLogoUpload}
               />
               <label 
                 htmlFor="logo-upload"
                 className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl cursor-pointer active:scale-95 transition-transform"
               >
                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600 font-bold text-2xl">
                   +
                 </div>
                 <span className="font-bold text-[#1a5fb4] text-lg">Лого</span>
               </label>
             </div>
           </div>
         </div>

         {activeTab === 'home' ? (
           <Dashboard 
             onTabChange={setActiveTab} 
             onMenuClick={() => setIsSidebarOpen(true)}
             LogoComponent={LogoComponent}
             onPaymentClick={() => setActiveTab('payment')}
           />
         ) : (
           <HistoryScreen
             onTabChange={setActiveTab}
             onTransactionSelection={setSelectedTransaction}
             transactions={transactions}
           />
         )}

         {/* Shared Nav and FAB */}
         <>
           {/* FAB */}
           <div className="fixed bottom-28 right-6 z-40">
             <motion.button 
               whileTap={{ scale: 0.95 }}
               className="bg-[#007bff] w-14 h-14 rounded-[1.2rem] flex items-center justify-center shadow-2xl text-white"
             >
                <Plus className="w-7 h-7" strokeWidth={3} />
             </motion.button>
           </div>

           {/* Bottom Navigation */}
           <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100/50 px-5 py-2.5 flex items-center justify-between z-40 rounded-t-[2.2rem] shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)]" id="bottom-nav">
              <div 
                className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${activeTab === 'home' ? '' : 'opacity-40'}`} 
                onClick={() => setActiveTab("home")}
              >
                 <div className={`${activeTab === 'home' ? 'bg-blue-50 p-1.5 rounded-lg' : ''}`}>
                    <Home className={`w-5.5 h-5.5 ${activeTab === 'home' ? 'text-[#007bff] fill-[#007bff]/10' : 'text-gray-800'}`} />
                 </div>
                 <span className={`text-[9px] font-bold ${activeTab === 'home' ? 'text-[#007bff]' : 'text-gray-800'}`}>Главная</span>
              </div>
              
              <div className="flex flex-col items-center gap-0.5 opacity-40">
                 <ArrowRightLeft className="w-5.5 h-5.5 text-gray-800" />
                 <span className="text-[9px] font-bold text-gray-800">Переводы</span>
              </div>
              
              <div className="relative -mt-12 bg-[#007bff] w-16 h-16 rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,123,255,0.4)] border-[6px] border-[#f2f7fb]">
                 <Scan className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              
              <div className="flex flex-col items-center gap-0.5 opacity-40">
                 <LayoutGrid className="w-5.5 h-5.5 text-gray-800" />
                 <span className="text-[9px] font-bold text-gray-800">Сервисы</span>
              </div>
              
              <div 
                className={`flex flex-col items-center gap-0.5 transition-all duration-300 cursor-pointer ${activeTab === 'history' ? '' : 'opacity-40'}`} 
                onClick={() => setActiveTab('history')}
              >
                 <div className={`${activeTab === 'history' ? 'bg-blue-50 p-1.5 rounded-lg' : ''}`}>
                    <History className={`w-5.5 h-5.5 ${activeTab === 'history' ? 'text-[#007bff] fill-[#007bff]/10' : 'text-gray-800'}`} />
                 </div>
                 <span className={`text-[9px] font-bold ${activeTab === 'history' ? 'text-[#007bff]' : 'text-gray-800'}`}>История</span>
              </div>
           </nav>
         </>
       </div>
     );
  }

  return (
    <div className="min-h-screen bg-[#f2f7fb] flex flex-col items-center justify-between py-20 px-6 select-none overflow-y-auto font-sans" id="pin-screen">
      {/* Header / Logo */}
      <div className="flex flex-col items-center mt-4 w-full" id="header-section">
        <div className="flex items-center gap-2 mb-16" id="logo-container">
          <div className="relative w-20 h-12" id="logo-icon">
            <LogoComponent className="w-full h-full drop-shadow-sm" />
          </div>
        </div>
        <h1 className="text-xl font-bold text-[#1a1a1a] mb-14 tracking-tight" id="page-title">
          Введите код доступа
        </h1>
      </div>

      {/* PIN Indicators & Backspace Container */}
      <div className="flex items-center justify-center gap-6 mb-20 relative w-full max-w-[240px]" id="pin-display-section">
        <div className="flex gap-3" id="pin-dots">
          {[...Array(maxPinLength)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                i < pin.length 
                  ? "bg-[#f07e26] border-[#f07e26]" 
                  : "bg-transparent border-[#f07e26]"
              }`}
              id={`pin-dot-${i}`}
            />
          ))}
        </div>
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleBackspace}
          className="absolute -right-1"
          id="backspace-button"
        >
          <div className="bg-[#6b4eba] text-white px-2 py-1.5 rounded-lg flex items-center justify-center">
            <Delete className="w-5 h-5 fill-white" strokeWidth={2.5} />
          </div>
        </motion.button>
      </div>

      {/* Keypad */}
      <div className="grid grid-cols-3 gap-y-16 gap-x-10 max-w-[240px] w-full mb-16" id="keypad">
        {numbers.map((num) => (
          <motion.button
            key={num}
            whileTap={{ scale: 0.8 }}
            onClick={() => handleNumberClick(num)}
            className="flex items-center justify-center text-3xl font-black text-[#1a1a1a] h-10 w-full"
            id={`key-${num}`}
          >
            {num}
          </motion.button>
        ))}
        
        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-center" id="forgot-password">
          <span className="text-[10px] leading-tight text-[#1a1a1a] font-semibold text-left w-full">
            Забыл{"\n"}и{"\n"}парол
          </span>
        </div>

        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleNumberClick(0)}
          className="flex items-center justify-center text-3xl font-black text-[#1a1a1a] h-10 w-full"
          id="key-0"
        >
          0
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.8 }}
          className="flex items-center justify-center text-[#6b4eba]"
          id="biometric-button"
        >
          <Fingerprint className="w-12 h-12" strokeWidth={1.5} />
        </motion.button>
      </div>

      <div className="h-2" />
    </div>
  );
}

