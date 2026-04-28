/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ChangeEvent, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Delete,
  Fingerprint,
  Menu,
  MessageSquare,
  Bell,
  Search,
  Eye,
  RefreshCw,
  Grid,
  X,
  Zap,
  Flame,
  Car,
  Bird,
  Home,
  ArrowRightLeft,
  ArrowRight,
  LayoutGrid,
  History,
  Scan,
  Star,
  Download,
  Repeat,
  Plus,
  ChevronLeft,
  Contact2,
  Check,
  Clock,
  Briefcase,
  Wallet,
} from "lucide-react";

// --- Types ---
type Page = "home" | "history" | "payment";

// --- Transaction Detail Component ---
function TransactionDetail({
  transaction,
  onBack,
  LogoComponent,
}: {
  transaction: any;
  onBack: () => void;
  LogoComponent: any;
}) {
  return (
    <div
      className="min-h-screen bg-white flex flex-col font-sans select-none overflow-x-hidden p-8"
      id="transaction-detail"
      style={{
        transform: "scale(0.55)",
        transformOrigin: "top center",
        width: "181.82%",
        minHeight: "181.82vh",
        marginLeft: "-40.91%",
      }}
    >
      <div className="w-20 h-1 bg-gray-300 rounded-full mx-auto mb-6" />

      {/* Header Info */}
      <div className="flex justify-between items-start mb-1 px-2">
        <div className="w-52 mt-2">
          <LogoComponent className="w-full h-auto" />
        </div>
        <div
          className="text-right text-[22px] font-normal text-[#1a1a1a]/70 leading-[1.2] mt-1 pr-1"
        >
          ЗАО "Душанбе Сити Банк"
          <br />
          ИНН: 510022404
          <br />
          Таджикистан, г. Душанбе
          <br />
          ул. Сохили 5"
        </div>
      </div>

      <div className="h-[2px] bg-gray-400 w-full mb-6" />

      {/* Details List */}
      <div className="flex flex-col gap-4 mb-6 px-2">
        {[
          { label: "Дата операции:", value: "26.04.2026" },
          { label: "Время операции:", value: transaction.time },
          { label: "Номер операции:", value: "1652765434" },
          { label: "Поставщик: DC (по номеру телефона)", value: "" },
          { label: "Счет отправителя:", value: "9762***9372" },
          { label: "Счет получателя:", value: transaction.number },
          { label: "Сумма операции:", value: transaction.amount },
          { label: "Комиссия:", value: "0.00" },
          { label: "Статус:", value: "Успешный" },
        ].map((item, idx) => (
          <div key={idx} className="flex justify-between items-start">
            <span className="text-[25px] font-normal text-black flex-1">
              {item.label}
            </span>
            {item.value && (
              <span className="text-[25px] font-normal text-black text-right flex-1">
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="h-[2px] bg-gray-400 w-full mb-2" />

      {/* Operation Successful Box - Styled as a sharp-cornered stamp */}
      <div className="flex justify-center mb-2 -mt-4">
        <div 
          className="border-[3px] border-[#0081ff] px-10 py-1 flex flex-col items-center opacity-70"
          style={{ transform: "scale(0.75)" }}
        >
          <span className="text-[#0081ff] text-sm font-bold uppercase tracking-tight text-center">
            ЗАО «Душанбе Сити Банк»
          </span>
          <span className="text-[#0081ff] text-[40px] font-bold uppercase text-center leading-[1] mt-0.5 mb-1.5 font-sans tracking-tight">
            ОПЕРАЦИЯ
          </span>
          <span className="text-[#0081ff] text-[40px] font-bold uppercase text-center leading-[1] mb-1 font-sans tracking-tight">
            ВЫПОЛНЕНА
          </span>
        </div>
      </div>

      {/* Action Icons */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          {
            icon: (
              <svg viewBox="0 0 24 24" className="w-14 h-14 text-[#007bff]" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <circle cx="16" cy="18" r="3" />
                <path d="M16 15v6" />
                <path d="M13 18h6" />
              </svg>
            ),
            label: "Поделиться",
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" className="w-14 h-14 text-[#007bff]" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="m9 15 3 3 3-3" />
              </svg>
            ),
            label: "Сохранить",
          },
          {
            icon: (
              <Star className="w-14 h-14 text-[#007bff]" strokeWidth={2} />
            ),
            label: "В избранные",
          },
          {
            icon: (
              <Repeat className="w-14 h-14 text-[#007bff]" strokeWidth={2.5} />
            ),
            label: "Повторить",
          },
        ].map((action, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center cursor-pointer active:opacity-70 transition-opacity">
              {action.icon}
            </div>
            <span className="text-base font-normal text-black text-center leading-tight">
              {action.label}
            </span>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-2 pb-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="w-full bg-[#f07e26] text-white py-6 rounded-[20px] text-[44px] font-medium shadow-none active:bg-orange-600 transition-colors"
        >
          Назад
        </motion.button>
      </div>
    </div>
  );
}

// --- History Component ---
function HistoryScreen({
  onTabChange,
  onTransactionSelection,
  transactions,
}: {
  onTabChange: (tab: string) => void;
  onTransactionSelection: (tx: any) => void;
  transactions: any[];
}) {
  return (
    <div
      className="min-h-screen bg-white flex flex-col font-sans select-none overflow-x-hidden pb-32"
      id="history-screen"
      style={{
        transform: "scale(0.8)",
        transformOrigin: "top center",
        width: "125%",
        minHeight: "125vh",
        marginLeft: "-12.5%",
      }}
    >
      {/* Tabs */}
      <div
        className="bg-white flex border-b border-gray-100"
        id="history-tabs"
      >
        <div className="flex-1 flex flex-col items-center py-3 relative">
          <span className="text-xl font-medium text-gray-800 tracking-tight">
            Операции
          </span>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#007bff]" />
        </div>
        <div className="flex-1 flex flex-col items-center py-3">
          <span className="text-xl font-medium text-gray-400 tracking-tight">
            Выписка
          </span>
        </div>
      </div>

      {/* Update Status */}
      <div
        className="flex items-center justify-center gap-2 py-4 text-gray-400 text-sm font-medium"
        id="update-status"
      >
        <span className="tracking-tight">Обновлено: 27.04.26 - 06:08</span>
        <div className="w-[18px] h-[18px] rounded-full border-2 border-[#007bff] flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-3 h-3 text-[#007bff] fill-none stroke-current"
            strokeWidth={4}
          >
            <path d="M20 6L9 17L4 12" />
          </svg>
        </div>
      </div>

      {/* Date Header */}
      <div className="px-6 mb-4">
        <h3 className="text-center text-[19px] font-bold text-[#1a1a1a]">
          Сегодня
        </h3>
      </div>

      {/* Transaction List Container */}
      <div className="px-4" id="transaction-list">
        <div className="bg-[#f2f7ff] rounded-[1.5rem] p-1">
          {transactions.map((tx, i) => (
            <div
              key={i}
              className={`px-5 py-5 flex flex-col gap-1 active:bg-[#e6f0ff] transition-colors cursor-pointer ${
                i !== transactions.length - 1 ? "border-b border-gray-100/30" : ""
              }`}
              onClick={() => onTransactionSelection(tx)}
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-[#969ba5] text-[14px] font-normal leading-none font-sans">
                    9762***9372
                  </span>
                  <span className="text-[#323d51] text-[19px] font-bold leading-tight font-sans">
                    {tx.number}
                  </span>
                  <span className="text-[#969ba5] text-[16px] font-normal leading-normal font-sans">
                    DC (по номеру телефона)
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <div className="h-[14px]" /> {/* Spacer for 9762... line */}
                  <div className="flex items-center gap-2 mb-1.5 h-[19px]">
                    <span className="text-[#323d51] text-[20px] font-bold leading-none font-sans opacity-90">
                      {tx.amount}
                    </span>
                    <div className="w-[18px] h-[18px] border-2 border-[#5acb9a] rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#5acb9a]" strokeWidth={3} />
                    </div>
                  </div>
                  <span className="text-[#323d51] text-[18px] font-bold font-sans leading-normal h-[24px] flex items-center opacity-90">
                    {tx.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Payment Page Component ---
function PaymentPage({
  onBack,
  LogoComponent,
  onPaymentSuccess,
}: {
  onBack: () => void;
  LogoComponent: any;
  onPaymentSuccess: (tx: any) => void;
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [checkmarkGreen, setCheckmarkGreen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentTime, setPaymentTime] = useState("");

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setCheckmarkGreen(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setCheckmarkGreen(false);
    }
  }, [showSuccess]);

  return (
    <div className="min-h-screen bg-[#f2f7fb] font-sans select-none overflow-x-hidden flex flex-col relative">
      {/* Header */}
      <header className="bg-[#007bff] px-4 py-3 flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-1">
            <ChevronLeft className="w-7 h-7" />
          </button>
          <h1 className="text-base font-bold">DC (по номеру телефона)</h1>
        </div>
        <button className="p-1">
          <Star className="w-6 h-6" />
        </button>
      </header>

      {/* Form Content */}
      <div className="p-4 flex-1 space-y-3">
        {/* Phone Input */}
        <div className="bg-white rounded-2xl p-3 border border-gray-100 flex items-center gap-3">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
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
        <div className="bg-blue-600/10 rounded-2xl p-3 border border-blue-100 flex items-center justify-center">
          <span className="text-blue-600 font-bold text-sm">
            Проверить номер/счет
          </span>
        </div>

        {/* Amount Input */}
        <div className="bg-white rounded-2xl p-3 border border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 font-bold uppercase text-xs">
              TJS
            </span>
            <input
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9.]/g, "");
                if ((val.match(/\./g) || []).length <= 1) {
                  setAmount(val);
                }
              }}
              placeholder="Сумма"
              className="flex-1 bg-transparent border-none outline-none text-base font-bold text-gray-800 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Comment Input */}
        <div className="bg-white rounded-2xl p-3 border border-gray-100 flex items-start">
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
          <div className="flex-shrink-0 w-24 h-20 bg-[#007bff] rounded-lg p-2.5 text-white flex flex-col justify-between">
            <span className="text-[8px] font-bold opacity-80">DBC****9372</span>
            <span className="text-xs font-bold truncate transform scale-y-[0.85] origin-bottom inline-block">
              5703.43 TJS
            </span>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 w-24 h-20 bg-gradient-to-br from-blue-300 to-orange-200 rounded-lg p-2.5 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[8px] font-bold">КРЕДИТ</span>
              <div className="bg-red-600 text-white text-[6px] font-bold px-1 py-0.5 rounded-xs">
                NEW
              </div>
            </div>
            <span className="text-xs font-bold">-</span>
            <div className="absolute right-0 bottom-0 w-8 h-8 bg-white/10 rounded-tl-full" />
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 w-24 h-20 bg-white rounded-lg p-2.5 border border-gray-100 flex flex-col justify-between items-start">
            <span className="text-[7px] font-bold text-gray-400">
              BAB****....
            </span>
            <span className="text-[8px] font-bold text-gray-400 uppercase mt-auto">
              MOBILE
            </span>
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="px-2 pt-2">
          <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
            Для перевода на карту Душанбе Сити укажите номер кошелька и введите
            сумму перевода. Без комиссии. Если вы отправили деньги не тому
            человеку, обратитесь к получателю перевода. Деньги может вернуть
            только получатель.
          </p>
        </div>
      </div>

      {/* Large Bottom Button */}
      <div className="p-4 bg-white/50 border-t border-gray-100 mt-auto">
        <button
          onClick={() => setShowConfirm(true)}
          className="w-full bg-[#ff782d] text-white py-4 rounded-2xl text-xl font-bold transition-transform active:scale-[0.98]"
        >
          Далее
        </button>
      </div>

      {/* Confirmation Step (Overlays) */}
      <AnimatePresence>
        {showConfirm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[100]"
              onClick={() => setShowConfirm(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white z-[110] rounded-t-2xl flex flex-col max-h-[85vh]"
            >
              {/* Handle */}
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mt-3 mb-2" />

            <div className="px-6 pb-6 space-y-3">
              <h2 className="text-xl font-bold text-gray-800">
                Подтверждение платежа
              </h2>

              <div className="text-4xl font-bold text-[#007bff] py-1">
                {amount}.00 TJS
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start border-b border-gray-50 pb-1.5">
                  <span className="text-xs text-gray-400 font-medium">
                    Поставщик:
                  </span>
                  <span className="text-xs text-gray-800 font-bold text-right ml-4">
                    DC (по номеру телефона)
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                  <span className="text-xs text-gray-400 font-medium">
                    Номер/счет:
                  </span>
                  <span className="text-xs text-gray-800 font-bold">
                    {phoneNumber}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                  <span className="text-xs text-gray-400 font-medium">
                    Способ оплаты:
                  </span>
                  <span className="text-xs text-gray-800 font-bold">
                    9762 **** **** 9372
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                  <span className="text-xs text-gray-400 font-medium">
                    Сумма зачисления:
                  </span>
                  <span className="text-xs text-gray-800 font-bold">
                    {amount}.00 TJS
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                  <span className="text-xs text-gray-400 font-medium">
                    Комиссия:
                  </span>
                  <span className="text-xs text-gray-800 font-bold">
                    0.00 TJS
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                  <span className="text-xs text-gray-400 font-medium">
                    Сумма списания:
                  </span>
                  <span className="text-xs text-gray-800 font-bold">
                    {amount}.00 TJS
                  </span>
                </div>
              </div>

              <button
                className="w-full bg-[#ff782d] text-white py-3.5 rounded-2xl text-lg font-bold mt-2 active:scale-[0.98] transition-transform"
                onClick={() => {
                  const now = new Date();
                  const dateStr = now
                    .toLocaleDateString("ru-RU", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })
                    .replace(/\//g, ".");
                  const timeStr = now.toLocaleTimeString("ru-RU", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  });

                  setPaymentDate(dateStr);
                  setPaymentTime(timeStr);

                  const newTx = {
                    number: phoneNumber,
                    amount: amount,
                    time: timeStr,
                    timestamp: Date.now(),
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
      </AnimatePresence>

      {/* Success Step (Overlays) */}
      <AnimatePresence>
        {showSuccess && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[120]"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white z-[130] rounded-t-3xl flex flex-col max-h-[85vh] shadow-[0_-8px_30px_rgba(0,0,0,0.1)]"
            >
            <div className="px-8 pt-4 pb-8 flex flex-col items-start gap-4">
              {/* Animated Checkmark Circle */}
              <div className="flex justify-start w-full py-1">
                <div 
                  className="w-16 h-16 rounded-full border-[4px] flex items-center justify-center transition-colors duration-[10ms]"
                  style={{ 
                    borderColor: checkmarkGreen ? "#00d1ac" : "#fbbc05",
                    color: checkmarkGreen ? "#00d1ac" : "#fbbc05"
                  }}
                >
                  <Check className="w-9 h-9" strokeWidth={4} />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                Платеж выполнен
              </h2>

              <div className="w-full space-y-2 py-2 text-[15px]">
                <div className="flex items-start">
                  <span className="w-1/2 text-gray-500 font-medium">Поставщик:</span>
                  <span className="w-1/2 text-gray-700 font-bold break-words">
                    DC (по номеру телефона)
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-1/2 text-gray-500 font-medium">Получатель:</span>
                  <span className="w-1/2 text-gray-700 font-bold">{phoneNumber}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-1/2 text-gray-500 font-medium">
                    К зачислению:
                  </span>
                  <span className="w-1/2 text-gray-700 font-bold">{amount}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-1/2 text-gray-500 font-medium">Комиссия:</span>
                  <span className="w-1/2 text-gray-700 font-bold">0.00</span>
                </div>
                <div className="flex items-center">
                  <span className="w-1/2 text-gray-500 font-medium">Дата:</span>
                  <span className="w-1/2 text-gray-700 font-bold">{paymentDate}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-1/2 text-gray-500 font-medium">Время:</span>
                  <span className="w-1/2 text-gray-700 font-bold">{paymentTime}</span>
                </div>
              </div>

              <button
                className="w-full bg-[#ff782d] text-white py-4 rounded-2xl text-xl font-bold mt-6 active:scale-[0.98] transition-transform"
                onClick={onBack}
              >
                На главную
              </button>
            </div>
          </motion.div>
        </>
      )}
      </AnimatePresence>
    </div>
  );
}

// --- Dashboard Component ---
function Dashboard({
  onTabChange,
  onMenuClick,
  LogoComponent,
  onPaymentClick,
  categories,
}: {
  onTabChange: (tab: string) => void;
  onMenuClick: () => void;
  LogoComponent: any;
  onPaymentClick: () => void;
  categories: any[];
}) {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div
      className="min-h-screen bg-[#f2f7fb] flex flex-col font-sans select-none overflow-x-hidden pb-40"
      id="dashboard"
    >
      {/* Header */}
      <header
        className="flex items-center justify-between px-5 pt-3 pb-1.5"
        id="dash-header"
      >
        <button 
          className="p-1 cursor-pointer" 
          onClick={onMenuClick}
        >
          <Menu className="w-[21px] h-[21px] text-[#0081ff]" strokeWidth={2.5} />
        </button>
        <div className="flex items-center" id="dash-logo">
          <LogoComponent className="w-[81px] h-[32px]" />
        </div>
        <div className="flex items-center gap-3" id="dash-actions">
          <div className="p-1 cursor-pointer">
            <MessageSquare className="w-[18px] h-[18px] text-[#0081ff]" strokeWidth={1.5} />
          </div>
          <div className="p-1 cursor-pointer">
            <Bell className="w-[18px] h-[18px] text-[#0081ff]" strokeWidth={1.5} />
          </div>
        </div>
      </header>

      {/* Main Content Wrapper */}
      <div className="mt-1">
        {/* Search Bar */}
        <div className="px-5 mb-3.5" id="search-container">
          <div className="bg-white rounded-xl flex items-center px-4 py-[7.4px] border border-gray-100">
            <Search className="w-5 h-5 text-gray-400 mr-2" strokeWidth={2.5} />
            <input
              type="text"
              placeholder="Поиск"
              className="flex-1 bg-transparent outline-none text-[#1a1a1a] font-medium text-base placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Balance & Grid Card Row */}
        <div className="px-5 flex gap-2 mb-3.5" id="balance-section">
          {/* Balance Card */}
          <div className="bg-[#0081ff] rounded-[20px] p-5 pb-4 flex-[6] text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[29px] font-black leading-none tracking-tight">
                  {showBalance ? "5703.43" : "••••••"}
                </span>
                <span className="text-[11px] font-black mt-3">TJS</span>
                <div className="flex gap-4 ml-auto items-center">
                  <button onClick={() => setShowBalance(!showBalance)} className="p-0.5">
                    <Eye
                      className={`w-5.5 h-5.5 ${showBalance ? "opacity-100" : "opacity-60"}`}
                      strokeWidth={1.5}
                    />
                  </button>
                  <button className="p-0.5">
                    <RefreshCw className="w-5.5 h-5.5 opacity-100" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
              <div className="text-white/80 text-[11px] font-bold tracking-tight">
                27.04.26 - 21:31:32
              </div>
            </div>
          </div>
          {/* Small Grid Button */}
          <div className="bg-white rounded-[20px] flex-[1] flex items-center justify-center border border-gray-100 cursor-pointer active:scale-95 transition-transform">
            <Grid className="w-8 h-8 text-[#007bff]" strokeWidth={2} />
          </div>
        </div>

        {/* Transfers Row */}
        <div className="px-5 mb-3.5 flex gap-2">
          <div 
            className="bg-white rounded-lg p-1.5 w-[68px] h-[68px] flex flex-col items-center justify-center border border-gray-50 cursor-pointer active:scale-95 transition-transform"
            onClick={onPaymentClick}
          >
            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mb-1">
              <div className="w-3.5 h-2.5 relative">
                <LogoComponent className="w-full h-full object-contain" />
              </div>
            </div>
            <span className="text-[7.5px] text-center font-bold text-gray-900 leading-[1.1]">
              DC<br/>(по номеру телефона)
            </span>
          </div>

          <div 
            className="bg-white rounded-lg p-1.5 w-[68px] h-[68px] flex flex-col items-center justify-center border border-gray-50 cursor-pointer active:scale-95 transition-transform relative"
          >
            <div className="absolute top-1 right-1 text-gray-300">
               <X className="w-2.5 h-2.5" />
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mb-1">
              <div className="w-3.5 h-2.5 relative">
                <LogoComponent className="w-full h-full object-contain" />
              </div>
            </div>
            <span className="text-[7.5px] text-center font-bold text-gray-900 leading-[1.1]">
              DC<br/>(по номеру карты)
            </span>
          </div>
        </div>

        {/* Banners */}
        <div className="mb-3 overflow-hidden">
          <div
            className="flex overflow-x-auto px-5 gap-[9px] no-scrollbar"
            id="banners"
          >
            {/* Purple Banner */}
            <div className="flex-shrink-0 w-[210px] h-[95px] bg-gradient-to-br from-[#3b24ab] to-[#25157d] rounded-[16px] p-3 text-white relative overflow-hidden flex flex-col justify-start">
              <h3 className="text-[8.3px] font-black uppercase leading-tight mb-1.5 max-w-[110px] tracking-tight">
                ПЕРЕВОДЫ БЕЗ КОМИССИИ ИЗ УРАЛСИБА
              </h3>
              <div className="flex gap-1 relative z-10">
                <div className="w-5 h-3 bg-white rounded-[0.5px] overflow-hidden flex flex-col">
                  <div className="h-1/3 bg-white" />
                  <div className="h-1/3 bg-[#0039a6]" />
                  <div className="h-1/3 bg-[#d52b1e]" />
                </div>
                <div className="w-5 h-3 bg-white rounded-[0.5px] overflow-hidden flex flex-col">
                  <div className="h-1/3 bg-[#d52b1e]" />
                  <div className="h-1/3 bg-white" />
                  <div className="h-1/3 bg-[#009b4c]" />
                </div>
              </div>
              <div className="absolute right-[-5%] bottom-[-5%] w-20 h-20 bg-blue-400/10 rounded-full" />
              <div className="absolute right-3 top-3 w-[40px] h-16 bg-[#ff782d] rounded-[12px] flex flex-col items-center justify-center z-10 border border-white/10">
                 <span className="font-black text-[18px] italic">0%</span>
                 <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <LogoComponent className="w-3 h-3 object-contain" />
                 </div>
              </div>
            </div>

            {/* Green Banner */}
            <div className="flex-shrink-0 w-[210px] h-[95px] bg-gradient-to-br from-[#f0fff4] to-[#dcfce7] rounded-[16px] p-3 border border-green-100 relative overflow-hidden">
              <h3 className="text-[10px] font-black text-[#1a1a1a] uppercase leading-tight mb-2 max-w-[140px] tracking-tight">
                СОҲИБИ ХОНА БО ИПОТЕКА ШАВЕД
              </h3>
              <div className="bg-[#5acb9a] text-white px-3 py-1 rounded-full inline-block text-[8px] font-black tracking-tight">
                ipoteka.dc.tj
              </div>
              <div className="absolute right-[-10px] bottom-[-10px] w-20 h-full opacity-10">
                 <Home className="w-full h-full text-green-900" />
              </div>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="px-5 mb-3.5" id="categories-bar">
          <div className="bg-white rounded-[16px] px-2 py-1.5 flex items-center justify-between border border-gray-50 h-[44px]">
            <div className="flex-1 flex items-center justify-center gap-1.5">
              <div className="w-7 h-7 bg-[#3eb000] rounded-full flex items-center justify-center text-white">
                <Zap className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-black text-[10px] text-gray-900">Neru</span>
            </div>
            <div className="h-5 w-px bg-gray-200 opacity-50" />
            <div className="flex-1 flex items-center justify-center gap-1.5">
              <div className="w-7 h-7 bg-[#0081ff] rounded-full flex items-center justify-center text-white relative">
                <div className="w-3.5 h-3.5 border-[1.5px] border-white/80 rounded-full flex items-center justify-center">
                   <div className="w-1 h-1 bg-white rounded-full" />
                </div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </div>
              <span className="font-black text-[10px] text-gray-900">Parking</span>
            </div>
            <div className="h-5 w-px bg-gray-200 opacity-50" />
            <div className="flex-1 flex items-center justify-center gap-1.5">
              <div className="w-7 h-7 bg-[#f85e00] rounded-full flex items-center justify-center text-white">
                <Bird className="w-3.5 h-3.5" />
              </div>
              <span className="font-black text-[10px] text-gray-900 text-center leading-none">Шохин</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-5 space-y-2.5 pb-44" id="services-grid">
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="col-span-2 bg-white rounded-[16px] p-3.5 border border-gray-50 flex flex-col justify-between items-start relative h-[98px] cursor-pointer active:scale-95 transition-transform overflow-hidden">
               <h4 className="text-[17px] font-black text-gray-900 mb-0.5 leading-tight tracking-tight">
                  Оплата услуг
                </h4>
                <p className="text-[8.5px] text-gray-500 font-bold leading-tight max-w-[150px]">
                  Мобильная связь, Интернет, Коммунальные услуги
                </p>
               <div className="absolute right-[-5px] bottom-[-5px] w-20 h-16 opacity-30">
                  <div className="w-full h-full bg-[#0081ff] rounded-full blur-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-12 h-9 bg-blue-100 rounded-xl" />
                  </div>
               </div>
            </div>
            <div className="bg-white rounded-[16px] p-3.5 border border-gray-50 flex flex-col justify-between items-start h-[98px] cursor-pointer active:scale-95 transition-transform">
              <h4 className="text-[15px] font-black text-gray-900 leading-tight tracking-tight">
                Карты
              </h4>
              <div className="w-full h-12 bg-[#ffcc00] rounded-lg mt-auto relative flex flex-col justify-end p-1.5 px-2 gap-0.5">
                 <div className="h-0.5 w-3 bg-black/10 rounded-full" />
                 <div className="h-0.5 w-6 bg-black/10 rounded-full" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-white rounded-[16px] p-4 border border-gray-50 flex flex-col items-start justify-between aspect-square cursor-pointer active:scale-95 transition-transform">
              <h4 className="text-[14px] font-black text-gray-900 leading-tight tracking-tight">Кредиты</h4>
              <div className="w-full h-10 mt-auto bg-[#ffeff4] rounded-lg flex items-center justify-center overflow-hidden">
                 <div className="w-8 h-8 bg-[#ff4d88] rounded-full blur-[6px] absolute opacity-20" />
                 <div className="w-5 h-5 bg-[#ff4d88] rounded-full relative z-10" />
              </div>
            </div>
            <div className="bg-white rounded-[16px] p-4 border border-gray-50 flex flex-col items-start justify-between aspect-square cursor-pointer active:scale-95 transition-transform">
              <h4 className="text-[14px] font-black text-gray-900 leading-tight tracking-tight">Депозиты</h4>
              <div className="w-full h-10 mt-auto bg-blue-50 rounded-lg flex items-center justify-center relative">
                 <div className="w-8 h-8 bg-blue-500/10 rounded-full absolute" />
                 <Scan className="w-[22px] h-[22px] text-[#0081ff]" strokeWidth={2.5} />
              </div>
            </div>
            <div className="bg-white rounded-[16px] p-4 border border-gray-50 flex flex-col items-start justify-between aspect-square cursor-pointer active:scale-95 transition-transform">
              <h4 className="text-[14px] font-black text-gray-900 leading-tight tracking-tight leading-tight">Курс валют</h4>
              <div className="w-full h-10 mt-auto bg-gray-50 rounded-lg flex items-center justify-center">
                 <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <History className="w-5 h-5 text-gray-400" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Scanner Overlay Component ---
function ScannerOverlay({ onClose }: { onClose: () => void }) {
  const [isFlashOn, setIsFlashOn] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied:", err);
      }
    }
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-[300] flex flex-col font-sans overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dim Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Top Bar */}
      <div className="relative z-10 p-6 flex justify-between items-center mt-4">
        <button
          onClick={() => setIsFlashOn(!isFlashOn)}
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
            isFlashOn ? "bg-white text-black" : "bg-black/30 text-white"
          }`}
        >
          <Zap className={`w-6 h-6 ${isFlashOn ? "fill-current" : ""}`} />
        </button>
        <div className="text-white text-lg font-bold tracking-tight">
          Наведите камеру на QR-код
        </div>
        <button
          onClick={onClose}
          className="w-12 h-12 rounded-xl bg-black/30 text-white flex items-center justify-center"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Scanning Frame */}
      <div className="flex-1 flex items-center justify-center relative p-8">
        <div className="w-full max-w-[280px] aspect-square relative">
          {/* Border Corners */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#ff782d] rounded-tl-[32px]" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#ff782d] rounded-tr-[32px]" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#ff782d] rounded-bl-[32px]" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#ff782d] rounded-br-[32px]" />
          
          {/* Transparent Hole */}
          <div className="absolute inset-0 rounded-[32px] overflow-hidden">
             <div className="absolute inset-0 bg-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom Logos */}
      <div className="relative z-10 px-8 pb-10 flex justify-center">
        <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 flex items-center gap-6">
           {/* DC Logo Placeholder */}
           <div className="flex items-center gap-1.5 shrink-0">
             <div className="w-8 h-5 bg-white rounded-sm flex items-center justify-center">
                <span className="text-[10px] font-black text-[#1a5fb4]">DC</span>
             </div>
             <span className="text-white text-[7px] font-bold leading-tight opacity-90 tracking-tight whitespace-nowrap">
               DC<br/>(по номеру Телефона) ё карта)
             </span>
           </div>
           
           <div className="h-6 w-px bg-white/20" />
           
           {/* Sberbank Logo Placeholder */}
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-full border-2 border-[#5acb9a] flex items-center justify-center p-0.5">
               <div className="w-full h-full bg-[#5acb9a] rounded-full" />
             </div>
             <span className="text-white text-[14px] font-bold tracking-tight">СБЕРБАНК</span>
           </div>

           <div className="h-6 w-px bg-white/20" />

           {/* QR Logo Placeholder */}
           <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center relative overflow-hidden">
                 <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                 </div>
                 <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <Search className="w-2.5 h-2.5 text-black" strokeWidth={4} />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- SplashScreen Component ---
function SplashScreen({ LogoComponent }: { LogoComponent: any }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white z-[200] flex items-center justify-center select-none"
      id="splash-screen"
    >
      <div className="w-[105.6px] h-[70.4px] flex items-center justify-center">
        <LogoComponent className="w-full h-full" />
      </div>
    </motion.div>
  );
}

// --- PIN Entrance Component ---
export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showScanner, setShowScanner] = useState(false);
  const [pin, setPin] = useState<number[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<Page>("home");
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const [customLogo, setCustomLogo] = useState<string | null>(() =>
    localStorage.getItem("custom_logo"),
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([
    { id: 'neru', name: 'Neru', color: 'bg-green-500', icon: Zap },
    { id: 'parking', name: 'Parking', color: 'bg-blue-500', icon: Car, badge: true },
    { id: 'shohin', name: 'Шохин', color: 'bg-orange-500', icon: Bird },
  ]);

  const cycleCategories = () => {
    setCategories(prev => {
      const next = [...prev];
      const last = next.pop();
      if (last) next.unshift(last);
      return next;
    });
  };
  const [transactions, setTransactions] = useState<any[]>(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      const parsed = JSON.parse(saved);
      const now = Date.now();
      // Filter out transactions older than 24 hours (86400000 ms)
      return parsed.filter((tx: any) => tx.timestamp && now - tx.timestamp < 86400000);
    }
    return [
      { number: "992918120194", amount: "20.00", time: "12:26:46", timestamp: Date.now() },
      { number: "992918179708", amount: "2.50", time: "08:52:48", timestamp: Date.now() },
    ];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    // Check every minute for expired transactions
    const interval = setInterval(() => {
      const now = Date.now();
      setTransactions((prev) => {
        const filtered = prev.filter((tx) => tx.timestamp && now - tx.timestamp < 86400000);
        if (filtered.length !== prev.length) return filtered;
        return prev;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const addTransaction = (tx: any) => {
    setTransactions((prev) => [tx, ...prev]);
  };
  const maxPinLength = 4;

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setCustomLogo(result);
        localStorage.setItem("custom_logo", result);
        setIsSidebarOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const LogoComponent = ({ className }: { className?: string }) => {
    if (customLogo) {
      return (
        <img
          src={customLogo}
          alt="Logo"
          className={className}
          referrerPolicy="no-referrer"
        />
      );
    }
    return (
      <svg viewBox="0 0 160 100" className={className}>
        <path
          d="M55 20 H30 C20 20 15 25 15 35 V75 C15 85 20 90 30 90 H55 Q80 90 80 55 Q80 20 55 20 Z M52 75 H35 V35 H52 Q63 35 63 55 Q63 75 52 75 Z"
          fill="#1a5fb4"
        />
        <path
          d="M95 20 Q70 20 70 55 Q70 90 95 90 H130 V75 H95 Q85 75 85 55 Q85 35 95 35 H130 V20 Z"
          fill="#f07e26"
        />
        <text
          x="105"
          y="65"
          fontFamily="Arial"
          fontWeight="900"
          fontSize="22"
          fill="#1a5fb4"
        >
          CITY
        </text>
        <text
          x="105"
          y="85"
          fontFamily="Arial"
          fontWeight="900"
          fontSize="22"
          fill="#1a5fb4"
        >
          DUSHANBE
        </text>
      </svg>
    );
  };

  const handleNumberClick = (num: number) => {
    if (pin.length < maxPinLength) {
      setPin((prev) => [...prev, num]);
    }
  };

  useEffect(() => {
    if (pin.length === maxPinLength) {
      if (pin.join("") === "2222") {
        setTimeout(() => setIsLoggedIn(true), 200);
      } else {
        setTimeout(() => setPin([]), 400);
      }
    }
  }, [pin]);

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (showSplash) {
    return <SplashScreen LogoComponent={LogoComponent} />;
  }

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

    if (activeTab === "payment") {
      return (
        <PaymentPage
          onBack={() => setActiveTab("home")}
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
        <div
          className={`fixed top-0 left-0 bottom-0 w-80 bg-white z-[70] transform transition-transform duration-300 p-6 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black text-gray-800">Меню</h2>
            <X
              className="w-8 h-8 text-gray-400"
              onClick={() => setIsSidebarOpen(false)}
            />
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
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 font-bold text-2xl">
                  +
                </div>
                <span className="font-bold text-[#1a5fb4] text-lg">Лого</span>
              </label>
            </div>

            {/* Category update buttons */}
            <div className="grid grid-cols-1 gap-3 pt-6 border-t border-gray-100">
              <h3 className="text-gray-400 font-bold text-xs uppercase px-2 mb-2">Обновить категории</h3>
              
              <div 
                className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl cursor-pointer active:scale-95 transition-transform"
                onClick={cycleCategories}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <Car className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-blue-700">Parking</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <Plus className="w-4 h-4 text-blue-600" />
                  <Plus className="w-4 h-4 text-blue-600" />
                  <Plus className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {activeTab === "home" ? (
          <Dashboard
            onTabChange={setActiveTab}
            onMenuClick={() => setIsSidebarOpen(true)}
            LogoComponent={LogoComponent}
            onPaymentClick={() => setActiveTab("payment")}
            categories={categories}
          />
        ) : (
          <HistoryScreen
            onTabChange={setActiveTab}
            onTransactionSelection={setSelectedTransaction}
            transactions={transactions}
          />
        )}

        {/* Shared Nav */}
        <>
          {showScanner && <ScannerOverlay onClose={() => setShowScanner(false)} />}

          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none drop-shadow-[0_-5px_15px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-x-0 bottom-0 pointer-events-auto">
              <svg
                viewBox="0 0 375 64"
                className="w-full h-[64px] fill-white"
                preserveAspectRatio="none"
              >
                <path d="M0 20C0 8.95431 8.95431 0 20 0H140C152 0 155 4 160 12C165 20 172 28 187.5 28C203 28 210 20 215 12C220 4 223 0 235 0H355C366.046 0 375 8.95431 375 20V64H0V20Z" />
              </svg>
            </div>
            
            <nav className="relative px-4 pb-2 flex items-center justify-around h-16 pointer-events-auto mt-[-64px]" id="bottom-nav">
              {/* Главная */}
              <div
                className="flex flex-col items-center gap-0.5 cursor-pointer mt-6"
                onClick={() => setActiveTab("home")}
              >
                <Home
                  className={`w-6 h-6 ${activeTab === "home" ? "text-[#0081ff]" : "text-gray-300"}`}
                  strokeWidth={2}
                />
                <span
                  className={`text-[9.5px] font-bold ${activeTab === "home" ? "text-blue-500" : "text-gray-400"}`}
                >
                  Главная
                </span>
              </div>

              {/* Переводы */}
              <div className="flex flex-col items-center gap-0.5 cursor-pointer mt-6">
                <ArrowRightLeft className="w-6 h-6 text-gray-300" strokeWidth={2} />
                <span className="text-[10px] font-bold text-gray-400">
                  Переводы
                </span>
              </div>

              {/* Large Floating Center Button */}
              <div className="relative -mt-6 flex flex-col items-center">
                <div 
                  className="bg-[#0081ff] w-[54px] h-[54px] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,129,255,0.4)] active:scale-90 transition-transform relative z-10 cursor-pointer"
                  onClick={() => setShowScanner(true)}
                >
                  <Scan className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>

              {/* Сервисы */}
              <div className="flex flex-col items-center gap-0.5 cursor-pointer mt-6">
                <Grid className="w-6 h-6 text-gray-300" strokeWidth={2} />
                <span className="text-[10px] font-bold text-gray-400">
                  Сервисы
                </span>
              </div>

              {/* История */}
              <div
                className="flex flex-col items-center gap-0.5 cursor-pointer mt-6"
                onClick={() => setActiveTab("history")}
              >
                <Clock
                  className={`w-6 h-6 ${activeTab === "history" ? "text-[#0081ff]" : "text-gray-300"}`}
                  strokeWidth={2}
                />
                <span
                  className={`text-[10px] font-bold ${activeTab === "history" ? "text-blue-500" : "text-gray-400"}`}
                >
                  История
                </span>
              </div>
            </nav>
          </div>
        </>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#f2f7fb] flex flex-col items-center justify-center select-none overflow-hidden font-sans"
      id="pin-screen"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 0.8 }}
        className="flex flex-col items-center justify-between h-full py-20 px-6 w-full max-w-sm"
      >
        {/* Header / Logo */}
      <div
        className="flex flex-col items-center mt-4 w-full"
        id="header-section"
      >
        <div className="flex items-center gap-2 mb-16" id="logo-container">
          <div className="relative w-48 h-28" id="logo-icon">
            <LogoComponent className="w-full h-full" />
          </div>
        </div>
        <h1
          className="text-xl font-bold text-[#1a1a1a] mb-14 tracking-tight"
          id="page-title"
        >
          Введите код доступа
        </h1>
      </div>

      {/* PIN Indicators & Backspace Container */}
      <div
        className="flex items-center justify-center gap-6 mb-10 relative w-full max-w-[240px]"
        id="pin-display-section"
      >
        <div className="flex gap-5" id="pin-dots">
          {[...Array(maxPinLength)].map((_, i) => (
            <div
              key={i}
              className={`w-[13.2px] h-[13.2px] rounded-sm border-2 transition-all duration-200 ${
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
          className="absolute -right-4 flex items-center justify-center active:bg-gray-100/50 rounded-full p-2 transition-colors"
          id="backspace-button"
        >
          <Delete className="w-6 h-6 text-[#1a1a1a]" strokeWidth={2.5} />
        </motion.button>
      </div>

      {/* Keypad */}
      <div
        className="grid grid-cols-3 gap-y-12 gap-x-12 max-w-[260px] w-full mb-16"
        id="keypad"
      >
        {numbers.map((num) => (
          <motion.button
            key={num}
            whileTap={{ scale: 0.8 }}
            onClick={() => handleNumberClick(num)}
            className="flex items-center justify-center text-xl font-black text-[#1a1a1a] h-10 w-full"
            id={`key-${num}`}
          >
            {num}
          </motion.button>
        ))}

        {/* Bottom Row */}
        <div
          className="flex flex-col items-center justify-center"
          id="forgot-password"
        >
          <span className="text-[8px] leading-tight text-[#1a1a1a] font-semibold text-left w-full">
            Забыл{"\n"}и{"\n"}парол
          </span>
        </div>

        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleNumberClick(0)}
          className="flex items-center justify-center text-xl font-black text-[#1a1a1a] h-10 w-full"
          id="key-0"
        >
          0
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.8 }}
          className="flex items-center justify-center text-[#6b4eba]"
          id="biometric-button"
        >
          <Fingerprint className="w-10 h-10" strokeWidth={1.5} />
        </motion.button>
      </div>

      <div className="h-2" />
      </motion.div>
    </div>
  );
}
