'use server';

export type FormState = {
  success: boolean;
  message: string;
};

export async function submitForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const data = Object.fromEntries(formData.entries());

  // eslint-disable-next-line no-console
  console.log('[Form Submission]', JSON.stringify(data, null, 2));

  // TODO: заменить на отправку email (nodemailer / resend)
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
  };
}

export async function submitOrder(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const data = Object.fromEntries(formData.entries());
  const cartItems = formData.get('cartItems');

  // eslint-disable-next-line no-console
  console.log('[Order Submission]', JSON.stringify({
    ...data,
    cartItems: cartItems ? JSON.parse(cartItems as string) : [],
  }, null, 2));

  // TODO: заменить на отправку email (nodemailer / resend)
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: 'Заказ успешно оформлен! Мы свяжемся с вами для подтверждения и уточнения деталей доставки.',
  };
}
