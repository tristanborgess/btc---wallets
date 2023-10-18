import "./chunk-UXIASGQL.js";

// node_modules/leading-trim/dist/index.mjs
function leadingTrim({
  lineHeight,
  reference,
  correction = {}
}) {
  const correctionTop = (correction == null ? void 0 : correction.top) || 0;
  const correctionBottom = (correction == null ? void 0 : correction.bottom) || 0;
  const topCropHeight = Math.max(
    reference.topCrop + (lineHeight - reference.lineHeight) * (reference.fontSize / 2),
    0
  ) / reference.fontSize;
  const bottomCropHeight = Math.max(
    reference.bottomCrop + (lineHeight - reference.lineHeight) * (reference.fontSize / 2),
    0
  ) / reference.fontSize;
  return {
    lineHeight,
    display: "block",
    "&::before, &::after": {
      content: '""',
      display: "block",
      height: 0,
      width: 0,
      paddingTop: "1px"
      // To avoid collapsing
    },
    "&::before": {
      marginBottom: `calc(-${topCropHeight}em - 1px + ${correctionTop}px)`
    },
    "&::after": {
      marginTop: `calc(-${bottomCropHeight}em - 1px + ${correctionBottom}px)`
    }
  };
}
var systemFontReference = {
  topCrop: 11,
  bottomCrop: 10,
  fontSize: 32,
  lineHeight: 1.4
};
function systemFontLeadingTrim({
  lineHeight,
  correction
}) {
  return leadingTrim({
    lineHeight,
    reference: systemFontReference,
    correction
  });
}
var systemMonoFontReference = {
  topCrop: 10,
  bottomCrop: 11,
  fontSize: 32,
  lineHeight: 1.4
};
function systemMonoFontLeadingTrim({
  lineHeight,
  correction
}) {
  return leadingTrim({
    lineHeight,
    reference: systemMonoFontReference,
    correction
  });
}
export {
  leadingTrim,
  systemFontLeadingTrim,
  systemMonoFontLeadingTrim
};
//# sourceMappingURL=leading-trim.js.map
