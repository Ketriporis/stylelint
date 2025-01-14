import atRuleEmptyLineBefore from "./at-rule-empty-line-before"
import atRuleNoVendorPrefix from "./at-rule-no-vendor-prefix"
import blockClosingBraceNewlineAfter from "./block-closing-brace-newline-after"
import blockClosingBraceNewlineBefore from "./block-closing-brace-newline-before"
import blockClosingBraceSpaceAfter from "./block-closing-brace-space-after"
import blockClosingBraceSpaceBefore from "./block-closing-brace-space-before"
import blockNoEmpty from "./block-no-empty"
import blockOpeningBraceNewlineAfter from "./block-opening-brace-newline-after"
import blockOpeningBraceNewlineBefore from "./block-opening-brace-newline-before"
import blockOpeningBraceSpaceAfter from "./block-opening-brace-space-after"
import blockOpeningBraceSpaceBefore from "./block-opening-brace-space-before"
import colorHexCase from "./color-hex-case"
import colorHexLength from "./color-hex-length"
import colorNoHex from "./color-no-hex"
import colorNoInvalidHex from "./color-no-invalid-hex"
import commentEmptyLineBefore from "./comment-empty-line-before"
import commentSpaceInside from "./comment-space-inside"
import customMediaPattern from "./custom-media-pattern"
import customPropertyNoOutsideRoot from "./custom-property-no-outside-root"
import customPropertyPattern from "./custom-property-pattern"
import declarationBangSpaceAfter from "./declaration-bang-space-after"
import declarationBangSpaceBefore from "./declaration-bang-space-before"
import declarationBlockSemicolonNewlineAfter from "./declaration-block-semicolon-newline-after"
import declarationBlockSemicolonNewlineBefore from "./declaration-block-semicolon-newline-before"
import declarationBlockSemicolonSpaceAfter from "./declaration-block-semicolon-space-after"
import declarationBlockSemicolonSpaceBefore from "./declaration-block-semicolon-space-before"
import declarationColonNewlineAfter from "./declaration-colon-newline-after"
import declarationColonSpaceAfter from "./declaration-colon-space-after"
import declarationColonSpaceBefore from "./declaration-colon-space-before"
import declarationNoImportant from "./declaration-no-important"
import functionBlacklist from "./function-blacklist"
import functionCalcNoUnspacedOperator from "./function-calc-no-unspaced-operator"
import functionCommaNewlineAfter from "./function-comma-newline-after"
import functionCommaNewlineBefore from "./function-comma-newline-before"
import functionCommaSpaceAfter from "./function-comma-space-after"
import functionCommaSpaceBefore from "./function-comma-space-before"
import functionLinearGradientNoNonstandardDirection from "./function-linear-gradient-no-nonstandard-direction"
import functionParenthesesSpaceInside from "./function-parentheses-space-inside"
import functionSpaceAfter from "./function-space-after"
import functionUrlQuotes from "./function-url-quotes"
import indentation from "./indentation"
import mediaFeatureColonSpaceAfter from "./media-feature-colon-space-after"
import mediaFeatureColonSpaceBefore from "./media-feature-colon-space-before"
import mediaFeatureNameNoVendorPrefix from "./media-feature-name-no-vendor-prefix"
import mediaFeatureRangeOperatorSpaceAfter from "./media-feature-range-operator-space-after"
import mediaFeatureRangeOperatorSpaceBefore from "./media-feature-range-operator-space-before"
import mediaQueryListCommaNewlineAfter from "./media-query-list-comma-newline-after"
import mediaQueryListCommaNewlineBefore from "./media-query-list-comma-newline-before"
import mediaQueryListCommaSpaceAfter from "./media-query-list-comma-space-after"
import mediaQueryListCommaSpaceBefore from "./media-query-list-comma-space-before"
import mediaQueryParenthesesSpaceInside from "./media-query-parentheses-space-inside"
import nestingBlockOpeningBraceNewlineBefore from "./nesting-block-opening-brace-newline-before"
import nestingBlockOpeningBraceSpaceBefore from "./nesting-block-opening-brace-space-before"
import noEolWhitespace from "./no-eol-whitespace"
import noMissingEofNewline from "./no-missing-eof-newline"
import noMultipleEmptyLines from "./no-multiple-empty-lines"
import numberLeadingZero from "./number-leading-zero"
import numberMaxPrecision from "./number-max-precision"
import numberNoTrailingZeros from "./number-no-trailing-zeros"
import numberZeroLengthNoUnit from "./number-zero-length-no-unit"
import propertyBlacklist from "./property-blacklist"
import propertyWhitelist from "./property-whitelist"
import propertyNoVendorPrefix from "./property-no-vendor-prefix"
import rootNoStandardProperties from "./root-no-standard-properties"
import ruleNestedEmptyLineBefore from "./rule-nested-empty-line-before"
import ruleNoDuplicateProperties from "./rule-no-duplicate-properties"
import ruleNonNestedEmptyLineBefore from "./rule-non-nested-empty-line-before"
import ruleNoShorthandPropertyOverrides from "./rule-no-shorthand-property-overrides"
import ruleNoSingleLine from "./rule-no-single-line"
import rulePropertiesOrder from "./rule-properties-order"
import ruleSingleLineMaxDeclarations from "./rule-single-line-max-declarations"
import ruleTrailingSemicolon from "./rule-trailing-semicolon"
import selectorCombinatorSpaceAfter from "./selector-combinator-space-after"
import selectorCombinatorSpaceBefore from "./selector-combinator-space-before"
import selectorListCommaNewlineAfter from "./selector-list-comma-newline-after"
import selectorListCommaNewlineBefore from "./selector-list-comma-newline-before"
import selectorListCommaSpaceAfter from "./selector-list-comma-space-after"
import selectorListCommaSpaceBefore from "./selector-list-comma-space-before"
import selectorNoAttribute from "./selector-no-attribute"
import selectorNoCombinator from "./selector-no-combinator"
import selectorNoId from "./selector-no-id"
import selectorNoType from "./selector-no-type"
import selectorNoUniversal from "./selector-no-universal"
import selectorNoVendorPrefix from "./selector-no-vendor-prefix"
import selectorPseudoElementColonNotation from "./selector-pseudo-element-colon-notation"
import selectorRootNoComposition from "./selector-root-no-composition"
import stringQuotes from "./string-quotes"
import valueListCommaNewlineAfter from "./value-list-comma-newline-after"
import valueListCommaNewlineBefore from "./value-list-comma-newline-before"
import valueListCommaSpaceAfter from "./value-list-comma-space-after"
import valueListCommaSpaceBefore from "./value-list-comma-space-before"
import valueNoVendorPrefix from "./value-no-vendor-prefix"

export default {
  "at-rule-empty-line-before": atRuleEmptyLineBefore,
  "at-rule-no-vendor-prefix": atRuleNoVendorPrefix,
  "block-closing-brace-newline-after": blockClosingBraceNewlineAfter,
  "block-closing-brace-newline-before": blockClosingBraceNewlineBefore,
  "block-closing-brace-space-after": blockClosingBraceSpaceAfter,
  "block-closing-brace-space-before": blockClosingBraceSpaceBefore,
  "block-no-empty": blockNoEmpty,
  "block-opening-brace-newline-after": blockOpeningBraceNewlineAfter,
  "block-opening-brace-newline-before": blockOpeningBraceNewlineBefore,
  "block-opening-brace-space-after": blockOpeningBraceSpaceAfter,
  "block-opening-brace-space-before": blockOpeningBraceSpaceBefore,
  "color-hex-case": colorHexCase,
  "color-hex-length": colorHexLength,
  "color-no-hex": colorNoHex,
  "color-no-invalid-hex": colorNoInvalidHex,
  "comment-empty-line-before": commentEmptyLineBefore,
  "comment-space-inside": commentSpaceInside,
  "custom-media-pattern": customMediaPattern,
  "custom-property-no-outside-root": customPropertyNoOutsideRoot,
  "custom-property-pattern": customPropertyPattern,
  "declaration-bang-space-after": declarationBangSpaceAfter,
  "declaration-bang-space-before": declarationBangSpaceBefore,
  "declaration-block-semicolon-newline-after": declarationBlockSemicolonNewlineAfter,
  "declaration-block-semicolon-newline-before": declarationBlockSemicolonNewlineBefore,
  "declaration-block-semicolon-space-after": declarationBlockSemicolonSpaceAfter,
  "declaration-block-semicolon-space-before": declarationBlockSemicolonSpaceBefore,
  "declaration-colon-newline-after": declarationColonNewlineAfter,
  "declaration-colon-space-after": declarationColonSpaceAfter,
  "declaration-colon-space-before": declarationColonSpaceBefore,
  "declaration-no-important": declarationNoImportant,
  "function-blacklist": functionBlacklist,
  "function-calc-no-unspaced-operator": functionCalcNoUnspacedOperator,
  "function-comma-newline-after": functionCommaNewlineAfter,
  "function-comma-newline-before": functionCommaNewlineBefore,
  "function-comma-space-after": functionCommaSpaceAfter,
  "function-comma-space-before": functionCommaSpaceBefore,
  "function-linear-gradient-no-nonstandard-direction": functionLinearGradientNoNonstandardDirection,
  "function-parentheses-space-inside": functionParenthesesSpaceInside,
  "function-space-after": functionSpaceAfter,
  "function-url-quotes": functionUrlQuotes,
  "indentation": indentation,
  "media-feature-colon-space-after": mediaFeatureColonSpaceAfter,
  "media-feature-colon-space-before": mediaFeatureColonSpaceBefore,
  "media-feature-name-no-vendor-prefix": mediaFeatureNameNoVendorPrefix,
  "media-feature-range-operator-space-after": mediaFeatureRangeOperatorSpaceAfter,
  "media-feature-range-operator-space-before": mediaFeatureRangeOperatorSpaceBefore,
  "media-query-list-comma-newline-after": mediaQueryListCommaNewlineAfter,
  "media-query-list-comma-newline-before": mediaQueryListCommaNewlineBefore,
  "media-query-list-comma-space-after": mediaQueryListCommaSpaceAfter,
  "media-query-list-comma-space-before": mediaQueryListCommaSpaceBefore,
  "media-query-parentheses-space-inside": mediaQueryParenthesesSpaceInside,
  "nesting-block-opening-brace-newline-before": nestingBlockOpeningBraceNewlineBefore,
  "nesting-block-opening-brace-space-before": nestingBlockOpeningBraceSpaceBefore,
  "no-eol-whitespace": noEolWhitespace,
  "no-missing-eof-newline": noMissingEofNewline,
  "no-multiple-empty-lines": noMultipleEmptyLines,
  "number-leading-zero": numberLeadingZero,
  "number-max-precision": numberMaxPrecision,
  "number-no-trailing-zeros": numberNoTrailingZeros,
  "number-zero-length-no-unit": numberZeroLengthNoUnit,
  "property-blacklist": propertyBlacklist,
  "property-whitelist": propertyWhitelist,
  "property-no-vendor-prefix": propertyNoVendorPrefix,
  "root-no-standard-properties": rootNoStandardProperties,
  "rule-nested-empty-line-before": ruleNestedEmptyLineBefore,
  "rule-no-duplicate-properties": ruleNoDuplicateProperties,
  "rule-no-shorthand-property-overrides": ruleNoShorthandPropertyOverrides,
  "rule-no-single-line": ruleNoSingleLine,
  "rule-non-nested-empty-line-before": ruleNonNestedEmptyLineBefore,
  "rule-properties-order": rulePropertiesOrder,
  "rule-single-line-max-declarations": ruleSingleLineMaxDeclarations,
  "rule-trailing-semicolon": ruleTrailingSemicolon,
  "selector-combinator-space-after": selectorCombinatorSpaceAfter,
  "selector-combinator-space-before": selectorCombinatorSpaceBefore,
  "selector-list-comma-newline-after": selectorListCommaNewlineAfter,
  "selector-list-comma-newline-before": selectorListCommaNewlineBefore,
  "selector-list-comma-space-after": selectorListCommaSpaceAfter,
  "selector-list-comma-space-before": selectorListCommaSpaceBefore,
  "selector-no-attribute": selectorNoAttribute,
  "selector-no-combinator": selectorNoCombinator,
  "selector-no-id": selectorNoId,
  "selector-no-type": selectorNoType,
  "selector-no-universal": selectorNoUniversal,
  "selector-no-vendor-prefix": selectorNoVendorPrefix,
  "selector-pseudo-element-colon-notation": selectorPseudoElementColonNotation,
  "selector-root-no-composition": selectorRootNoComposition,
  "string-quotes": stringQuotes,
  "value-list-comma-newline-after": valueListCommaNewlineAfter,
  "value-list-comma-newline-before": valueListCommaNewlineBefore,
  "value-list-comma-space-after": valueListCommaSpaceAfter,
  "value-list-comma-space-before": valueListCommaSpaceBefore,
  "value-no-vendor-prefix": valueNoVendorPrefix,
}
