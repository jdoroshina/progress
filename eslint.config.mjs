import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
    rules: {
      // Основные синтаксические правила
      'eqeqeq': 'error', // Требует использования строгого равенства
      'curly': 'error', // Требует использования фигурных скобок
      'no-eval': 'error', // Запрещает использование eval
      'no-undef': 'error', // Запрещает использование необъявленных переменных
      'no-unused-vars': 'warn', // Предупреждение о неиспользуемых переменных

      // Стилистические правила
      'semi': ['error', 'always'], // Требует точку с запятой в конце строки
      'quotes': ['error', 'single'], // Использование одинарных кавычек
      'no-trailing-spaces': 'error', // Запрещает пробелы в конце строки
      'indent': ['error', 2], // Двухпробельная отступка
      'comma-dangle': ['error', 'always-multiline'], // Запятая после последнего элемента в списках

      // Прочие основные правила
      'no-multiple-empty-lines': ['error', { max: 1 }], // Запрещает несколько пустых строк
      'space-before-blocks': 'error', // Требует пробел перед началом блока
      'keyword-spacing': ['error', { before: true, after: true }], // Требует пробелы до и после ключевых слов
    },
  },
]);
