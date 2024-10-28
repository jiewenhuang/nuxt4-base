// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import prettier from 'eslint-plugin-prettier'
// @ts-ignore
import eslintConfigPrettier from 'eslint-config-prettier'
export default createConfigForNuxt({
  // ...options for Nuxt integration
})
  .append(
    // ...append other flat config items
    {
      plugins: {
        prettier: prettier
      },
      rules: {
        ...eslintConfigPrettier.rules,
        'prettier/prettier': 'error',
        //     允许使用any
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  )
  .prepend
  // ...prepend other flat config items before the base config
  ()
// override a specific config item based on their name

// an so on, operations are chainable
