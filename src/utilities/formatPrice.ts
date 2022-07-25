export function formatPrice(number: string) {
  // удалить всё, кроме цифр, запятых и точек;
  let result = number.replace(/^\,\.|[^\d\.\,]|\.(?=.*\.)|^0+(?=\d)/g, '');

  // поменять все запятые на точки
  result = result.replace(',', '.');

  // поставить пробелы между разрядами
  result = String(+result).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  return result;
}

export function formatTotalPrice(number: string, quantity: number) {
  // взять цену за единицу продука
  let result = formatPrice(number);

  // удалить все пробелы
  result = result.replace(/\s/g, '');

  // перемножить на количество продуктов
  result = String((+result * quantity).toFixed(1));

  // поставить пробелы между разрядами, убрать десятичный разряд, если он равен нулю (25.0, 16.0... => 25, 16...)
  result = String(+result).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

  return result;
}

export function priceToPay(overAllPrice: number) {
  // округлить до 1 знака после запятой
  let result = overAllPrice.toFixed(1);

  // поставить пробелы между разрядами, убрать десятичный разряд, если он равен нулю (25.0, 16.0... => 25, 16...)
  result = String(+result).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

  return result;
}
