'use client';

import { useActionState, useEffect, useRef } from 'react';
import { submitForm, type FormState } from '@/app/actions';
import { useModal } from './ModalContext';

const initialState: FormState = { success: false, message: '' };

export default function ContactModal() {
  const { isOpen, close } = useModal();
  const [state, formAction, isPending] = useActionState(submitForm, initialState);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === backdropRef.current) close(); }}
    >
      <div className="absolute inset-0 bg-dark-brand/80 backdrop-blur-sm" aria-hidden="true" />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-brand px-8 py-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Обсудить заказ</h2>
            <p className="text-white/70 text-sm mt-1">
              Отправьте заявку — ответим и рассчитаем стоимость за 2 часа
            </p>
          </div>
          <button
            onClick={close}
            className="text-white/70 hover:text-white transition-colors ml-4 mt-1 shrink-0"
            aria-label="Закрыть"
          >
            <i className="ri-close-line text-2xl" />
          </button>
        </div>

        <div className="px-8 py-6">
          {state.success ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center">
                <i className="ri-check-line text-3xl text-brand" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Заявка отправлена</h3>
              <p className="text-neutral-500 text-sm max-w-xs">{state.message}</p>
              <button
                onClick={close}
                className="mt-2 bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
              >
                Закрыть
              </button>
            </div>
          ) : (
            <form action={formAction} className="space-y-4">
              <input type="hidden" name="formId" value="modal-contact" />

              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Опишите задачу или прикрепите файл ниже"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-sm resize-none"
                />
              </div>

              <div>
                <input
                  type="file"
                  name="file"
                  accept=".pdf,.dwg,.dxf,.step,.stp"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-sm cursor-pointer file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-brand/10 file:text-brand file:text-sm file:font-medium"
                />
                <p className="text-xs text-neutral-400 mt-1">PDF, DWG, DXF, STEP до 10 МБ</p>
              </div>

              {!state.success && state.message && (
                <div className="px-4 py-3 rounded-lg text-sm bg-red-50 border border-red-200 text-red-600">
                  {state.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-brand text-white px-6 py-4 rounded-lg text-base font-semibold hover:bg-brand-dark transition-colors disabled:opacity-50"
              >
                {isPending ? 'Отправка...' : 'Отправить заявку'}
              </button>

              <p className="text-xs text-center text-neutral-400">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
