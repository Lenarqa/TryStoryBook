"use strict";(self.webpackChunkstorybook_lesson=self.webpackChunkstorybook_lesson||[]).push([[115],{"./src/components/Input/Input.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputSizeMD:()=>InputSizeMD,InputSizeS:()=>InputSizeS,InputSizeX:()=>InputSizeX,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input_Input=props=>{const{size="md",...rest}=props;return(0,jsx_runtime.jsx)("input",{className:"input ".concat(size),...rest})};Input_Input.__docgenInfo={description:"",methods:[],displayName:"Input"};const Input_stories={title:"Form/MyInput",component:Input_Input},InputSizeS=()=>(0,jsx_runtime.jsx)(Input_Input,{size:"s",placeholder:"Small size"}),InputSizeMD=()=>(0,jsx_runtime.jsx)(Input_Input,{size:"md",placeholder:"Medium size"}),InputSizeX=()=>(0,jsx_runtime.jsx)(Input_Input,{size:"x",placeholder:"Big size"});InputSizeS.storyName="Small Input",InputSizeMD.storyName="Medium Input",InputSizeX.storyName="Big Input",InputSizeS.parameters={...InputSizeS.parameters,docs:{...InputSizeS.parameters?.docs,source:{originalSource:'() => <Input size="s" placeholder="Small size" />',...InputSizeS.parameters?.docs?.source}}},InputSizeMD.parameters={...InputSizeMD.parameters,docs:{...InputSizeMD.parameters?.docs,source:{originalSource:'() => <Input size="md" placeholder="Medium size" />',...InputSizeMD.parameters?.docs?.source}}},InputSizeX.parameters={...InputSizeX.parameters,docs:{...InputSizeX.parameters?.docs,source:{originalSource:'() => <Input size="x" placeholder="Big size" />',...InputSizeX.parameters?.docs?.source}}};const __namedExportsOrder=["InputSizeS","InputSizeMD","InputSizeX"]}}]);