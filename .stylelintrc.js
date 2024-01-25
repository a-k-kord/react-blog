const { propertyOrdering } = require('stylelint-semantic-groups');

module.exports = {
    "extends": "stylelint-config-standard-scss",
    "plugins": ["stylelint-order"],
    "rules": {
        "selector-class-pattern": "^[a-z][a-zA-Z0-9-]+$",
        "max-nesting-depth": 3,
        "color-named": "never",
        "color-no-invalid-hex": true,
        "block-no-empty": true,
        "no-duplicate-selectors": true,
        "declaration-empty-line-before": [
            "always",
            {
                "ignore": [
                    "after-comment",
                    "after-declaration",
                    "inside-single-line-block",
                    "first-nested"
                ]
            }
        ],
        "order/order": [ 
            'custom-properties',
            'dollar-variables',
            'declarations',
            'at-rules', 
            'rules',
          ],
          'order/properties-order': propertyOrdering
    },
    "ignoreFiles": ["dist/**/*"]
}
