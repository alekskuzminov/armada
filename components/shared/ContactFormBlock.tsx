'use client';

import { useActionState } from 'react';
import { submitForm, type FormState } from '@/app/actions';

const initialState: FormState = { success: false, message: '' };

interface ContactFormBlockProps {
  formId: string;
  heading?: string;
  subheading?: string;
  variant?: 'light' | 'dark';
  fields?: ('name' | 'phone' | 'email' | 'company' | 'quantity' | 'material' | 'deadline' | 'message' | 'file')[];
}

const materialOptions = [
  'Сталь',
  'Нержавеющая сталь',
  'Алюминий',
  'Латунь',
  'Титан',
  'Пластик',
];

export default function ContactFormBlock({
  formId,
  heading = 'Отправить заявку на расчёт',
  subheading,
  variant = 'light',
  fields = ['name', 'phone', 'email', 'message'],
}: ContactFormBlockProps) {
  const [state, formAction, isPending] = useActionState(submitForm, initialState);

  const isDark = variant === 'dark';
  const inputBase = isDark
    ? 'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-sm'
    : 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-sm';

  const labelClass = isDark ? 'block text-sm font-medium text-gray-300 mb-2' : 'block text-sm font-medium text-gray-700 mb-2';

  return (
    <div>
      {heading && (
        <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {heading}
        </h3>
      )}
      {subheading && (
        <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{subheading}</p>
      )}

      <form id={formId} action={formAction} className="space-y-4">
        <input type="hidden" name="formId" value={formId} />

        {fields.includes('name') && (
          <div>
            <label className={labelClass}>Ваше имя *</label>
            <input type="text" name="name" required className={inputBase} placeholder="Иван Петров" />
          </div>
        )}

        {fields.includes('phone') && fields.includes('email') && (
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Телефон *</label>
              <input type="tel" name="phone" required className={inputBase} placeholder="+7 (999) 123-45-67" />
            </div>
            <div>
              <label className={labelClass}>Email *</label>
              <input type="email" name="email" required className={inputBase} placeholder="ivan@company.ru" />
            </div>
          </div>
        )}

        {fields.includes('phone') && !fields.includes('email') && (
          <div>
            <label className={labelClass}>Телефон *</label>
            <input type="tel" name="phone" required className={inputBase} placeholder="+7 (999) 123-45-67" />
          </div>
        )}

        {!fields.includes('phone') && fields.includes('email') && (
          <div>
            <label className={labelClass}>Email *</label>
            <input type="email" name="email" required className={inputBase} placeholder="ivan@company.ru" />
          </div>
        )}

        {fields.includes('company') && (
          <div>
            <label className={labelClass}>Компания</label>
            <input type="text" name="company" className={inputBase} placeholder="ООО «Производство»" />
          </div>
        )}

        {(fields.includes('quantity') || fields.includes('material')) && (
          <div className="grid md:grid-cols-2 gap-4">
            {fields.includes('quantity') && (
              <div>
                <label className={labelClass}>Количество деталей</label>
                <input type="text" name="quantity" className={inputBase} placeholder="100 шт" />
              </div>
            )}
            {fields.includes('material') && (
              <div>
                <label className={labelClass}>Материал</label>
                <select name="material" className={`${inputBase} cursor-pointer`}>
                  <option value="">Выберите материал</option>
                  {materialOptions.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {fields.includes('deadline') && (
          <div>
            <label className={labelClass}>Желаемый срок изготовления</label>
            <input type="text" name="deadline" className={inputBase} placeholder="7 рабочих дней" />
          </div>
        )}

        {fields.includes('message') && (
          <div>
            <label className={labelClass}>Комментарий</label>
            <textarea
              name="message"
              maxLength={500}
              rows={4}
              className={`${inputBase} resize-none`}
              placeholder="Дополнительные требования к изготовлению..."
            />
            <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Максимум 500 символов</p>
          </div>
        )}

        {fields.includes('file') && (
          <div>
            <label className={labelClass}>Прикрепить чертёж</label>
            <input
              type="file"
              name="file"
              className={`${inputBase} cursor-pointer`}
              accept=".pdf,.dwg,.dxf,.step,.stp"
            />
            <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>PDF, DWG, DXF, STEP до 10 МБ</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-brand text-white px-6 py-4 rounded-lg text-base font-semibold hover:bg-brand-dark transition-colors whitespace-nowrap disabled:opacity-50"
        >
          {isPending ? 'Отправка...' : 'Отправить заявку'}
        </button>

        {state.success && state.message && (
          <div className={`px-4 py-3 rounded-lg text-sm ${isDark ? 'bg-green-900/40 border border-green-600/40 text-green-300' : 'bg-green-50 text-green-800'}`}>
            {state.message}
          </div>
        )}

        <p className={`text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </div>
  );
}
