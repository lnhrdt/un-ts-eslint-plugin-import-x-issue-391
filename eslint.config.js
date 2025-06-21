import js from '@eslint/js'
import importX from 'eslint-plugin-import-x'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    js.configs.recommended,
    tseslint.configs.recommended,
    importX.flatConfigs.typescript,
    {
        plugins: {
            'import-x': importX,
        },
        rules: {
            /* ℹ️ enable (uncomment) one rule definition version at a time */

            /* ❌ these configurations do not fix the file (unexpected) */
            'import-x/extensions': ['warn', 'never'],
            // 'import-x/extensions': ['warn', 'never', { fix: true }],
            // 'import-x/extensions': ['warn', 'never', { pattern: {} }],

            /* ✅ this configuration does fix the file */
            // 'import-x/extensions': ['warn', 'never', {fix: true, pattern: {}}],
        },
    },
)
