module.exports = {
  root: true,
  extends: [
    'airbnb-base/legacy',
  ],
  globals: {
    Reflect: true,
    Promise: true,
  },
  rules: {
    // 允许函数根据代码分支有不同的return行为
    'consistent-return': 'off',
    // 要求或禁止命名的 function 表达式
    'func-names': ['error', 'as-needed'],
    // 一行最大长度
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    // 禁用console
    'no-console': 'off',
    // 禁用debugger
    'no-debugger': 'error',
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': ['error', {
      props: false,
    }],
    // 除for循环外不允许++写法
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // 强制大括号内换行符的一致性
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true,
    }],
  },
};
