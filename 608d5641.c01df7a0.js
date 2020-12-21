(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),l=(a(0),a(89)),r={id:"props",title:"Props",slug:"/props"},c={unversionedId:"props",id:"props",isDocsHomePage:!1,title:"Props",description:"Configuration",source:"@site/docs/props.md",slug:"/props",permalink:"/react-native-bottom-sheet/props",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/props.md",version:"current",sidebar:"packages",previous:{title:"Usage",permalink:"/react-native-bottom-sheet/usage"},next:{title:"Methods",permalink:"/react-native-bottom-sheet/methods"}},i=[{value:"Configuration",id:"configuration",children:[{value:"<code>index</code>",id:"index",children:[]},{value:"<code>snapPoints</code>",id:"snappoints",children:[]},{value:"<code>handleHeight</code>",id:"handleheight",children:[]},{value:"<code>containerHeight</code>",id:"containerheight",children:[]},{value:"<code>topInset</code>",id:"topinset",children:[]},{value:"<code>enableContentPanningGesture</code>",id:"enablecontentpanninggesture",children:[]},{value:"<code>enableHandlePanningGesture</code>",id:"enablehandlepanninggesture",children:[]},{value:"<code>animateOnMount</code>",id:"animateonmount",children:[]}]},{value:"Animation Configuration",id:"animation-configuration",children:[{value:"<code>animationDuration</code>",id:"animationduration",children:[]},{value:"<code>animationEasing</code>",id:"animationeasing",children:[]}]},{value:"Animated Nodes",id:"animated-nodes",children:[{value:"<code>animatedIndex</code>",id:"animatedindex",children:[]},{value:"<code>animatedPosition</code>",id:"animatedposition",children:[]}]},{value:"Callbacks",id:"callbacks",children:[{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onAnimate</code>",id:"onanimate",children:[]}]},{value:"Components",id:"components",children:[{value:"<code>handleComponent</code>",id:"handlecomponent",children:[]},{value:"<code>backdropComponent</code>",id:"backdropcomponent",children:[]},{value:"<code>backgroundComponent</code>",id:"backgroundcomponent",children:[]},{value:"<code>children</code>",id:"children",children:[]}]}],o={rightToc:i};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)("h3",{id:"index"},Object(l.b)("inlineCode",{parentName:"h3"},"index")),Object(l.b)("p",null,"Initial snap index. You also could provide ",Object(l.b)("inlineCode",{parentName:"p"},"-1")," to initiate bottom sheet in closed state."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h3",{id:"snappoints"},Object(l.b)("inlineCode",{parentName:"h3"},"snapPoints")),Object(l.b)("p",null,"Points for the bottom sheet to snap to, ",Object(l.b)("strong",{parentName:"p"},"points should be sorted from bottom to top"),". It accepts array of number, string or mix."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array<number","|","string>"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f String values should be a percentage.")),Object(l.b)("h4",{id:"examples"},"examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"snapPoints={[200, 500]}\nsnapPoints={[200, '%50']}\nsnapPoints={[-1, '%100']}\n")),Object(l.b)("h3",{id:"handleheight"},Object(l.b)("inlineCode",{parentName:"h3"},"handleHeight")),Object(l.b)("p",null,"Handle height helps to calculate the internal container and sheet layouts. If ",Object(l.b)("inlineCode",{parentName:"p"},"handleComponent")," is provided, the library internally will calculate its layout, unless ",Object(l.b)("inlineCode",{parentName:"p"},"handleHeight")," is provided too."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"24"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h3",{id:"containerheight"},Object(l.b)("inlineCode",{parentName:"h3"},"containerHeight")),Object(l.b)("p",null,"Container height helps to calculate the internal sheet layouts. If ",Object(l.b)("inlineCode",{parentName:"p"},"containerHeight")," not provided, the library internally will calculate it, however this will cause an extra re-rendering."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h3",{id:"topinset"},Object(l.b)("inlineCode",{parentName:"h3"},"topInset")),Object(l.b)("p",null,"Top inset value helps to calculate percentage snap points values. usually comes from ",Object(l.b)("inlineCode",{parentName:"p"},"@react-navigation/stack")," hook ",Object(l.b)("inlineCode",{parentName:"p"},"useHeaderHeight")," or from ",Object(l.b)("inlineCode",{parentName:"p"},"react-native-safe-area-context")," hook ",Object(l.b)("inlineCode",{parentName:"p"},"useSafeArea"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h3",{id:"enablecontentpanninggesture"},Object(l.b)("inlineCode",{parentName:"h3"},"enableContentPanningGesture")),Object(l.b)("p",null,"Enable content panning gesture interaction."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h3",{id:"enablehandlepanninggesture"},Object(l.b)("inlineCode",{parentName:"h3"},"enableHandlePanningGesture")),Object(l.b)("p",null,"Enable handle panning gesture interaction."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h3",{id:"animateonmount"},Object(l.b)("inlineCode",{parentName:"h3"},"animateOnMount")),Object(l.b)("p",null,"This will initially mount the sheet closed and when it's mounted and calculated the layout, it will snap to initial snap point index."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h2",{id:"animation-configuration"},"Animation Configuration"),Object(l.b)("h3",{id:"animationduration"},Object(l.b)("inlineCode",{parentName:"h3"},"animationDuration")),Object(l.b)("p",null,"Snapping animation duration."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"500"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h3",{id:"animationeasing"},Object(l.b)("inlineCode",{parentName:"h3"},"animationEasing")),Object(l.b)("p",null,"Snapping animation easing function."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"EasingFunction")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@TODO"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h2",{id:"animated-nodes"},"Animated Nodes"),Object(l.b)("h3",{id:"animatedindex"},Object(l.b)("inlineCode",{parentName:"h3"},"animatedIndex")),Object(l.b)("p",null,"Animated value to be used as a callback for the index node internally."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AnimatedValue<number",">"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h3",{id:"animatedposition"},Object(l.b)("inlineCode",{parentName:"h3"},"animatedPosition")),Object(l.b)("p",null,"Animated value to be used as a callback for the position node internally."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AnimatedValue<number",">"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h2",{id:"callbacks"},"Callbacks"),Object(l.b)("h3",{id:"onchange"},Object(l.b)("inlineCode",{parentName:"h3"},"onChange")),Object(l.b)("p",null,"Callback when the sheet position changed."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"type onChange = (index: number) => void;\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h3",{id:"onanimate"},Object(l.b)("inlineCode",{parentName:"h3"},"onAnimate")),Object(l.b)("p",null,"Callback when the sheet about to animate to a new position."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"type onAnimate = (fromIndex: number, toIndex: number) => void;\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h2",{id:"components"},"Components"),Object(l.b)("h3",{id:"handlecomponent"},Object(l.b)("inlineCode",{parentName:"h3"},"handleComponent")),Object(l.b)("p",null,"Component to be placed as a sheet handle."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"React.FC<BottomSheetHandleProps>")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"BottomSheetHandle")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h3",{id:"backdropcomponent"},Object(l.b)("inlineCode",{parentName:"h3"},"backdropComponent")),Object(l.b)("p",null,"Component to be placed as a sheet backdrop, by default is set to ",Object(l.b)("inlineCode",{parentName:"p"},"null"),", however the library also provide a default implementation ",Object(l.b)("inlineCode",{parentName:"p"},"BottomSheetBackdrop")," of a backdrop but you will need to provide it manually."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"React.FC<BottomSheetBackgroundProps>")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h3",{id:"backgroundcomponent"},Object(l.b)("inlineCode",{parentName:"h3"},"backgroundComponent")),Object(l.b)("p",null,"Component to be placed as a sheet background."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"React.FC<BottomSheetBackgroundProps>")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"BottomSheetBackground")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")))),Object(l.b)("h3",{id:"children"},Object(l.b)("inlineCode",{parentName:"h3"},"children")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Scrollable")," node or react node to be places as a sheet content."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"() => React.ReactNode ","|"," React.ReactNode[] ","|"," React.ReactNode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES")))))}d.isMDXComponent=!0},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),b=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),j=n,u=p["".concat(r,".").concat(j)]||p[j]||O[j]||l;return a?b.a.createElement(u,c(c({ref:t},o),{},{components:a})):b.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var o=2;o<l;o++)r[o]=a[o];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);