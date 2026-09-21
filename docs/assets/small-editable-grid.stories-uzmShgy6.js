import{R as e}from"./iframe-nA52dKKE.js";import{D as i}from"./data-editor-all-2UMLhFst.js";import{B as m,D as d,u as c,d as p}from"./utils-DfFJ_yrZ.js";import{S as u}from"./story-utils-C8EKSk80.js";import"./preload-helper-C1FmrZbK.js";import"./image-window-loader-DyYABh6t.js";import"./marked.esm-BADJTkQ3.js";import"./scrolling-data-grid-FQ7nOXkb.js";import"./index-D_kXk1yT.js";import"./throttle--dN168Gr.js";const w={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(u,null,e.createElement(m,{title:"Editable Grid",description:e.createElement(d,null,"Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri.")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:s,setCellValue:n}=c(6,!1);return e.createElement(i,{...p,getCellContent:s,columns:r,rows:20,onCellEdited:n})};var a,o,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={20} onCellEdited={setCellValue} />;
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const V=["SmallEditableGrid"];export{t as SmallEditableGrid,V as __namedExportsOrder,w as default};
