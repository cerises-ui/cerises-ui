export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'refactor',
        'build',
        'style',
        'perf',
        'chore',
        'deps',
        'test',
        'ci',
        'revert'
      ]
    ]
  }
}
