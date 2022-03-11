var roosterjsReact=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}([function(e,t){e.exports=roosterjs},function(e,t){e.exports=FluentUIReact},function(e,t){e.exports=React},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){var r=null==e?void 0:e[t];return"function"==typeof r?r():"string"==typeof r?r:o}},function(e,t,o){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.getColorPickerDropDown=t.BackgroundColors=t.TextColors=void 0;var n=o(2),i=(0,o(1).mergeStyleSets)({colorPickerContainer:{width:"192px",padding:"8px",background:"white",overflow:"hidden","& ul":{width:"192px",overflow:"hidden"}},colorMenuItem:{display:"inline-block",width:"32px",height:"32px",background:"white","& button":{padding:"0px",minWidth:"0px",background:"transparent",border:"none"}},colorSquare:{width:"20px",height:"20px",margin:"4px",borderStyle:"solid",borderWidth:"2px","&:hover":{borderColor:"red"}},colorSquareBorder:{borderColor:"transparent"},colorSquareBorderWhite:{borderColor:"#bebebe"}}),a={textColorLightBlue:{lightModeColor:"#51a7f9",darkModeColor:"#0075c2"},textColorLightGreen:{lightModeColor:"#6fc040",darkModeColor:"#207a00"},textColorLightYellow:{lightModeColor:"#f5d427",darkModeColor:"#5d4d00"},textColorLightOrange:{lightModeColor:"#f3901d",darkModeColor:"#ab5500"},textColorLightRed:{lightModeColor:"#ed5c57",darkModeColor:"#df504d"},textColorLightPurple:{lightModeColor:"#b36ae2",darkModeColor:"#ab63da"},textColorBlue:{lightModeColor:"#0c64c0",darkModeColor:"#6da0ff"},textColorGreen:{lightModeColor:"#0c882a",darkModeColor:"#3da848"},textColorYellow:{lightModeColor:"#dcbe22",darkModeColor:"#6d5c00"},textColorOrange:{lightModeColor:"#de6a19",darkModeColor:"#d3610c"},textColorRed:{lightModeColor:"#c82613",darkModeColor:"#ff6847"},textColorPurple:{lightModeColor:"#763e9b",darkModeColor:"#d394f9"},textColorDarkBlue:{lightModeColor:"#174e86",darkModeColor:"#93b8f9"},textColorDarkGreen:{lightModeColor:"#0f5c1a",darkModeColor:"#7fc57b"},textColorDarkYellow:{lightModeColor:"#c3971d",darkModeColor:"#946f00"},textColorDarkOrange:{lightModeColor:"#be5b17",darkModeColor:"#de7633"},textColorDarkRed:{lightModeColor:"#861106",darkModeColor:"#ff9b7c"},textColorDarkPurple:{lightModeColor:"#5e327c",darkModeColor:"#dea9fd"},textColorDarkerBlue:{lightModeColor:"#002451",darkModeColor:"#cedbff"},textColorDarkerGreen:{lightModeColor:"#06400c",darkModeColor:"#a3da9b"},textColorDarkerYellow:{lightModeColor:"#a37519",darkModeColor:"#b5852a"},textColorDarkerOrange:{lightModeColor:"#934511",darkModeColor:"#ef935c"},textColorDarkerRed:{lightModeColor:"#570606",darkModeColor:"#ffc0b1"},textColorDarkerPurple:{lightModeColor:"#3b204d",darkModeColor:"#eecaff"},textColorWhite:{lightModeColor:"#ffffff",darkModeColor:"#333333"},textColorLightGray:{lightModeColor:"#cccccc",darkModeColor:"#535353"},textColorGray:{lightModeColor:"#999999",darkModeColor:"#777777"},textColorDarkGray:{lightModeColor:"#666666",darkModeColor:"#a0a0a0"},textColorDarkerGray:{lightModeColor:"#333333",darkModeColor:"#cfcfcf"},textColorBlack:{lightModeColor:"#000000",darkModeColor:"#ffffff"}};t.TextColors=a;var l={backgroundColorCyan:{lightModeColor:"#00ffff",darkModeColor:"#005357"},backgroundColorGreen:{lightModeColor:"#00ff00",darkModeColor:"#005e00"},backgroundColorYellow:{lightModeColor:"#ffff00",darkModeColor:"#383e00"},backgroundColorOrange:{lightModeColor:"#ff8000",darkModeColor:"#bf4c00"},backgroundColorRed:{lightModeColor:"#ff0000",darkModeColor:"#ff2711"},backgroundColorMagenta:{lightModeColor:"#ff00ff",darkModeColor:"#e700e8"},backgroundColorLightCyan:{lightModeColor:"#80ffff",darkModeColor:"#004c4f"},backgroundColorLightGreen:{lightModeColor:"#80ff80",darkModeColor:"#005400"},backgroundColorLightYellow:{lightModeColor:"#ffff80",darkModeColor:"#343c00"},backgroundColorLightOrange:{lightModeColor:"#ffc080",darkModeColor:"#77480b"},backgroundColorLightRed:{lightModeColor:"#ff8080",darkModeColor:"#bc454a"},backgroundColorLightMagenta:{lightModeColor:"#ff80ff",darkModeColor:"#aa2bad"},backgroundColorWhite:{lightModeColor:"#ffffff",darkModeColor:"#333333"},backgroundColorLightGray:{lightModeColor:"#cccccc",darkModeColor:"#535353"},backgroundColorGray:{lightModeColor:"#999999",darkModeColor:"#777777"},backgroundColorDarkGray:{lightModeColor:"#666666",darkModeColor:"#a0a0a0"},backgroundColorDarkerGray:{lightModeColor:"#333333",darkModeColor:"#cfcfcf"},backgroundColorBlack:{lightModeColor:"#000000",darkModeColor:"#ffffff"}};t.BackgroundColors=l;var u=r(r({},a),l);t.getColorPickerDropDown=function(e){return{items:e,itemClassName:i.colorMenuItem,allowLivePreview:!0,itemRender:function(e,t){var o=e.key,r=u[o].lightModeColor;return n.createElement("button",{onClick:function(o){return t(o,e)},title:e.text},n.createElement("div",{className:i.colorSquare+" "+("textColorWhite"==o||"backgroundColorWhite"==o?i.colorSquareBorderWhite:i.colorSquareBorder),style:{backgroundColor:r}}))},commandBarSubMenuProperties:{className:i.colorPickerContainer}}}},function(e,t,o){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),n=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||r(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),n(o(6),t),n(o(7),t),n(o(10),t)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalizedString=void 0;var r=o(3);Object.defineProperty(t,"getLocalizedString",{enumerable:!0,get:function(){return r.default}})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createUpdateContentPlugin=t.Rooster=void 0;var r=o(8);Object.defineProperty(t,"Rooster",{enumerable:!0,get:function(){return r.default}});var n=o(9);Object.defineProperty(t,"createUpdateContentPlugin",{enumerable:!0,get:function(){return n.default}})},function(e,t,o){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),i=o(1),a=o(0);function l(e,t){return new a.Editor(e,t)}t.default=function(e){var t=n.useRef(null),o=n.useRef(null),a=e.focusOnInit,u=e.editorCreator,c=e.zoomScale,d=e.inDarkMode;n.useEffect((function(){return o.current=(u||l)(t.current,e),a&&o.current.focus(),function(){o.current&&(o.current.dispose(),o.current=null)}}),[u]),n.useEffect((function(){o.current.setDarkModeState(!!d)}),[d]),n.useEffect((function(){o.current.setZoomScale(c)}),[c]);var s=(0,i.getNativeProps)(e,i.divProperties);return n.createElement("div",r({ref:t,tabIndex:0},s||{}))}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var o=this;this.updateMode=e,this.onUpdate=t,this.onBlur=function(){o.update(16)}}return e.prototype.getName=function(){return"UpdateContent"},e.prototype.initialize=function(e){this.editor=e,this.disposer=this.editor.addDomEventHandler("blur",this.onBlur)},e.prototype.dispose=function(){var e;null===(e=this.disposer)||void 0===e||e.call(this),this.disposer=null,this.editor=null},e.prototype.onPluginEvent=function(e){switch(e.eventType){case 11:this.update(1);break;case 12:this.update(2);break;case 7:this.update(8);break;case 3:this.update(4)}},e.prototype.forceUpdate=function(){this.update(0)},e.prototype.update=function(e){if(this.editor&&(0==e||((this.updateMode||0)&e)==e)&&this.onUpdate){var t=this.editor.getContent();this.onUpdate(t,e)}},e}();t.default=function(e,t){return new r(e,t)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createRibbonPlugin=t.AllButtonKeys=t.getButtons=t.Ribbon=void 0;var r=o(11);Object.defineProperty(t,"Ribbon",{enumerable:!0,get:function(){return r.default}});var n=o(12);Object.defineProperty(t,"getButtons",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"AllButtonKeys",{enumerable:!0,get:function(){return n.AllButtonKeys}});var i=o(45);Object.defineProperty(t,"createRibbonPlugin",{enumerable:!0,get:function(){return i.default}})},function(e,t,o){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),i=o(3),a=o(1),l=o(1),u=(0,o(1).mergeStyles)({"& .ms-CommandBar":{padding:"0px"}});t.default=function(e){var t=e.plugin,o=e.buttons,c=e.strings,d=e.dir,s=n.useState(null),f=s[0],m=s[1],g="rtl"==d,C=n.useCallback((function(e,o){null==t||t.onButtonClick(o.data,o.key,c)}),[t,c]),h=n.useCallback((function(e,o){t.startLivePreview(e,o,c)}),[t,c]),k=n.useCallback((function(){t.stopLivePreview()}),[t]),p=n.useMemo((function(){return o.map((function(e){var t,o,a,u,d=f&&(null===(o=null===(t=e.dropDownMenu)||void 0===t?void 0:t.getSelectedItemKey)||void 0===o?void 0:o.call(t,f)),s=e.dropDownMenu,m=r({key:e.key,data:e,iconProps:{iconName:e.iconName},iconOnly:!0,text:(0,i.default)(c,e.key,e.unlocalizedText),canCheck:!0,checked:f&&(null===(a=e.isChecked)||void 0===a?void 0:a.call(e,f))||!1,disabled:f&&(null===(u=e.isDisabled)||void 0===u?void 0:u.call(e,f))||!1},e.commandBarProperties||{});return s?m.subMenuProps=r({shouldFocusOnMount:!0,focusZoneProps:{direction:l.FocusZoneDirection.bidirectional},onDismiss:k,onItemClick:C,onRenderContextualMenuItem:s.allowLivePreview?function(t,o){return n.createElement("div",{onMouseOver:function(o){return h(e,t.key)}},o(t))}:void 0,items:Object.keys(s.items).map((function(t){return{key:t,text:(0,i.default)(c,t,s.items[t]),data:e,canCheck:!!s.getSelectedItemKey,checked:d==t||!1,className:s.itemClassName,onRender:s.itemRender?function(e){return s.itemRender(e,C)}:void 0}}))},s.commandBarSubMenuProperties||{}):m.onClick=C,m}))}),[o,f,g,c,C,k,h]);return n.useEffect((function(){var e=null==t?void 0:t.registerFormatChangedCallback(m);return function(){null==e||e()}}),[t]),n.createElement(a.CommandBar,r({items:p},e,{className:u+" "+((null==e?void 0:e.className)||"")}))}},function(e,t,o){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AllButtonKeys=void 0;var n=o(13),i=o(14),a=o(15),l=o(16),u=o(17),c=o(18),d=o(19),s=o(20),f=o(21),m=o(22),g=o(23),C=o(24),h=o(25),k=o(26),p=o(27),y=o(28),b=o(29),v=o(31),M=o(32),x=o(33),N=o(34),S=o(35),P=o(36),D=o(37),L=o(38),_=o(39),O=o(40),w=o(41),T=o(42),I=o(43),B=o(44),z=((r={})[0]=u.bold,r[1]=M.italic,r[2]=I.underline,r[3]=g.font,r[4]=C.fontSize,r[5]=k.increaseFontSize,r[6]=f.decreaseFontSize,r[7]=T.textColor,r[8]=l.backgroundColor,r[9]=c.bulletedList,r[10]=N.numberedList,r[11]=m.decreaseIndent,r[12]=p.increaseIndent,r[13]=S.quote,r[14]=i.alignLeft,r[15]=n.alignCenter,r[16]=a.alignRight,r[17]=b.insertLink,r[18]=D.removeLink,r[19]=v.insertTable,r[20]=y.insertImage,r[21]=w.superscript,r[22]=O.subscript,r[23]=_.strikethrough,r[24]=h.header,r[25]=s.code,r[26]=x.ltr,r[27]=L.rtl,r[28]=B.undo,r[29]=P.redo,r[30]=d.clearFormat,r);t.AllButtonKeys=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],t.default=function(e){return void 0===e&&(e=t.AllButtonKeys),e.map((function(e){return"number"==typeof e?z[e]:e}))}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.alignCenter=void 0;var r=o(0);t.alignCenter={key:"buttonNameAlignCenter",unlocalizedText:"Align center",iconName:"AlignCenter",onClick:function(e){(0,r.setAlignment)(e,1)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.alignLeft=void 0;var r=o(0);t.alignLeft={key:"buttonNameAlignLeft",unlocalizedText:"Align left",iconName:"AlignLeft",onClick:function(e){(0,r.setAlignment)(e,0)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.alignRight=void 0;var r=o(0);t.alignRight={key:"buttonNameAlignRight",unlocalizedText:"Align right",iconName:"AlignRight",onClick:function(e){(0,r.setAlignment)(e,2)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.backgroundColor=void 0;var r=o(4),n=o(0);t.backgroundColor={dropDownMenu:(0,r.getColorPickerDropDown)({backgroundColorCyan:"Cyan",backgroundColorGreen:"Green",backgroundColorYellow:"Yellow",backgroundColorOrange:"Orange",backgroundColorRed:"Red",backgroundColorMagenta:"Magenta",backgroundColorLightCyan:"Light cyan",backgroundColorLightGreen:"Light green",backgroundColorLightYellow:"Light yellow",backgroundColorLightOrange:"Light orange",backgroundColorLightRed:"Light red",backgroundColorLightMagenta:"Light magenta",backgroundColorWhite:"White",backgroundColorLightGray:"Light gray",backgroundColorGray:"Gray",backgroundColorDarkGray:"Dark gray",backgroundColorDarkerGray:"Darker gray",backgroundColorBlack:"Black"}),key:"buttonNameBackgroundColor",unlocalizedText:"Background color",iconName:"FabricTextHighlight",onClick:function(e,t){(0,n.setBackgroundColor)(e,r.BackgroundColors[t])}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bold=void 0;var r=o(0);t.bold={key:"buttonNameBold",unlocalizedText:"Bold",iconName:"Bold",isChecked:function(e){return e.isBold},onClick:function(e){return(0,r.toggleBold)(e),!0}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bulletedList=void 0;var r=o(0);t.bulletedList={key:"buttonNameBulletedList",unlocalizedText:"Bulleted list",iconName:"BulletedList",isChecked:function(e){return e.isBullet},onClick:function(e){return(0,r.toggleBullet)(e),!0}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearFormat=void 0;var r=o(0);t.clearFormat={key:"buttonNameClearFormat",unlocalizedText:"Clear format",iconName:"ClearFormatting",onClick:function(e){(0,r.clearFormat)(e)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.code=void 0;var r=o(0);t.code={key:"buttonNameCode",unlocalizedText:"Code",iconName:"Code",onClick:function(e){(0,r.toggleCodeBlock)(e)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decreaseFontSize=void 0;var r=o(0);t.decreaseFontSize={key:"buttonNameDecreaseFontSize",unlocalizedText:"Decrease font size",iconName:"FontDecrease",onClick:function(e){(0,r.changeFontSize)(e,1)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decreaseIndent=void 0;var r=o(0);t.decreaseIndent={key:"buttonNameDecreaseIntent",unlocalizedText:"Decrease indent",iconName:"DecreaseIndentLegacy",onClick:function(e){(0,r.setIndentation)(e,1)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.font=void 0;var r=o(0),n=[{name:"Arial",family:"Arial,Helvetica,sans-serif"},{name:"Arial Black",family:"'Arial Black',Arial,sans-serif"},{name:"Calibri",family:"Calibri,Helvetica,sans-serif"},{name:"Calibri Light",family:"'Calibri Light','Helvetica Light',sans-serif"},{name:"Cambria",family:"Cambria,Georgia,serif"},{name:"Candara",family:"Candara,Optima,sans-serif"},{name:"Century Gothic",family:"'Century Gothic',sans-serif"},{name:"Comic Sans MS",family:"'Comic Sans MS',Chalkboard,cursive"},{name:"Consolas",family:"Consolas,Courier,monospace"},{name:"Constantia",family:"Constantia,'Hoefler Text',serif"},{name:"Corbel",family:"Corbel,Skia,sans-serif"},{name:"Courier New",family:"'Courier New',monospace"},{name:"Franklin Gothic Book",family:"'Franklin Gothic Book','Avenir Next Condensed',sans-serif"},{name:"Franklin Gothic Demi",family:"'Franklin Gothic Demi','Avenir Next Condensed Demi Bold',sans-serif"},{name:"Franklin Gothic Medium",family:"'Franklin Gothic Medium','Avenir Next Condensed Medium',sans-serif"},{name:"Garamond",family:"Garamond,Georgia,serif"},{name:"Georgia",family:"Georgia,serif"},{name:"Impact",family:"Impact,Charcoal,sans-serif"},{name:"Lucida Console",family:"'Lucida Console',Monaco,monospace"},{name:"Lucida Handwriting",family:"'Lucida Handwriting','Apple Chancery',cursive"},{name:"Lucida Sans Unicode",family:"'Lucida Sans Unicode','Lucida Grande',sans-serif"},{name:"Palatino Linotype",family:"'Palatino Linotype','Book Antiqua',Palatino,serif"},{name:"Segoe UI",family:"'Segoe UI', 'Segoe UI Web (West European)', 'Helvetica Neue', sans-serif"},{name:"Sitka Heading",family:"'Sitka Heading',Cochin,serif"},{name:"Sitka Text",family:"'Sitka Text',Cochin,serif"},{name:"Tahoma",family:"Tahoma,Geneva,sans-serif"},{name:"Times",family:"Times,'Times New Roman',serif"},{name:"Times New Roman",family:"'Times New Roman',Times,serif"},{name:"Trebuchet MS",family:"'Trebuchet MS',Trebuchet,sans-serif"},{name:"TW Cen MT",family:"'TW Cen MT','Century Gothic',sans-serif"},{name:"Verdana",family:"Verdana,Geneva,sans-serif"},{name:"-",family:"FontDivider0"},{name:"Microsoft YaHei",family:"'Microsoft YaHei','微软雅黑',STHeiti,sans-serif",localizedName:"微软雅黑"},{name:"SimHei",family:"SimHei,'黑体',STHeiti,sans-serif",localizedName:"黑体"},{name:"NSimSun",family:"NSimSun,'新宋体',SimSun,'宋体',SimSun-ExtB,'宋体-ExtB',STSong,serif",localizedName:"新宋体"},{name:"FangSong",family:"FangSong,'仿宋',STFangsong,serif",localizedName:"仿宋"},{name:"SimLi",family:"SimLi,'隶书','Baoli SC',serif",localizedName:"隶书"},{name:"KaiTi",family:"KaiTi,'楷体',STKaiti,serif",localizedName:"楷体"},{name:"-",family:"FontDivider1"},{name:"Microsoft JhengHei",family:"'Microsoft JhengHei','微軟正黑體','Apple LiGothic',sans-serif",localizedName:"微軟正黑體"},{name:"PMingLiU",family:"PMingLiU,'新細明體',PMingLiU-ExtB,'新細明體-ExtB','Apple LiSung',serif",localizedName:"新細明體"},{name:"DFKai-SB",family:"DFKai-SB,'標楷體','BiauKai',serif",localizedName:"標楷體"},{name:"-",family:"FontDivider2"},{name:"Meiryo",family:"Meiryo,'メイリオ','Hiragino Sans',sans-serif",localizedName:"メイリオ"},{name:"MS PGothic",family:"'MS PGothic','ＭＳ Ｐゴシック','MS Gothic','ＭＳ ゴシック','Hiragino Kaku Gothic ProN',sans-serif",localizedName:"ＭＳ Ｐゴシック"},{name:"MS PMincho",family:"'MS PMincho','ＭＳ Ｐ明朝','MS Mincho','ＭＳ 明朝','Hiragino Mincho ProN',serif",localizedName:"ＭＳ Ｐ明朝"},{name:"Yu Gothic",family:"'Yu Gothic','游ゴシック','YuGothic',sans-serif",localizedName:"游ゴシック"},{name:"Yu Mincho",family:"'Yu Mincho','游明朝','YuMincho',serif",localizedName:"游明朝"},{name:"-",family:"FontDivider3"},{name:"Malgun Gothic",family:"'Malgun Gothic','맑은 고딕',AppleGothic,sans-serif",localizedName:"맑은 고딕"},{name:"Gulim",family:"Gulim,'굴림','Nanum Gothic',sans-serif",localizedName:"굴림"},{name:"Dotum",family:"Dotum,'돋움',AppleGothic,sans-serif",localizedName:"돋움"},{name:"Batang",family:"Batang,'바탕',AppleMyungjo,serif",localizedName:"바탕"},{name:"BatangChe",family:"BatangChe,'바탕체',AppleMyungjo,serif",localizedName:"바탕체"},{name:"Gungsuh",family:"Gungsuh,'궁서',GungSeo,serif",localizedName:"궁서"},{name:"-",family:"FontDivider4"},{name:"Leelawadee UI",family:"'Leelawadee UI',Thonburi,sans-serif"},{name:"Angsana New",family:"'Angsana New','Leelawadee UI',Sathu,serif"},{name:"Cordia New",family:"'Cordia New','Leelawadee UI',Silom,sans-serif"},{name:"DaunPenh",family:"DaunPenh,'Leelawadee UI','Khmer MN',sans-serif"},{name:"-",family:"FontDivider5"},{name:"Nirmala UI",family:"'Nirmala UI',sans-serif"},{name:"Gautami",family:"Gautami,'Nirmala UI','Telugu MN',sans-serif"},{name:"Iskoola Pota",family:"'Iskoola Pota','Nirmala UI','Sinhala MN',sans-serif"},{name:"Kalinga",family:"Kalinga,'Nirmala UI','Oriya MN',sans-serif"},{name:"Kartika",family:"Kartika,'Nirmala UI','Malayalam MN',sans-serif"},{name:"Latha",family:"Latha,'Nirmala UI','Tamil MN',sans-serif"},{name:"Mangal",family:"Mangal,'Nirmala UI','Devanagari Sangam MN',sans-serif"},{name:"Raavi",family:"Raavi,'Nirmala UI','Gurmukhi MN',sans-serif"},{name:"Shruti",family:"Shruti,'Nirmala UI','Gujarati Sangam MN',sans-serif"},{name:"Tunga",family:"Tunga,'Nirmala UI','Kannada MN',sans-serif"},{name:"Vrinda",family:"Vrinda,'Nirmala UI','Bangla MN',sans-serif"},{name:"-",family:"FontDivider6"},{name:"Nyala",family:"Nyala,Kefa,sans-serif"},{name:"Sylfaen",family:"Sylfaen,Mshtakan,Menlo,serif"}],i=n.reduce((function(e,t){return e[t.family]=t.localizedName||t.name,e}),{}),a=n.reduce((function(e,t){return e[t.name.toLowerCase()]=t.family,e}),{}),l=/^['"]?([^'",]+)/i;t.font={key:"buttonNameFont",unlocalizedText:"Font",iconName:"Font",dropDownMenu:{items:i,getSelectedItemKey:function(e){var t,o,r=null===(t=e.fontName)||void 0===t?void 0:t.match(l),n=null===(o=null==r?void 0:r[1])||void 0===o?void 0:o.toLowerCase();return n&&a[n]||""},allowLivePreview:!0},onClick:function(e,t){(0,r.setFontName)(e,t)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fontSize=void 0;var r=o(0);t.fontSize={key:"buttonNameFontSize",unlocalizedText:"Font size",iconName:"FontSize",dropDownMenu:{items:r.FONT_SIZES.reduce((function(e,t){return e[t+"pt"]=t.toString(),e}),{}),getSelectedItemKey:function(e){return e.fontSize},allowLivePreview:!0},onClick:function(e,t){(0,r.setFontSize)(e,t)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.header=void 0;var r=o(0),n={header1:"Header 1",header2:"Header 2",header3:"Header 3",header4:"Header 4",header5:"Header 5",header6:"Header 6",headerDivider:"-",noHeader:"No header"};t.header={key:"buttonNameHeader",unlocalizedText:"Header",iconName:"Header1",dropDownMenu:{items:n,getSelectedItemKey:function(e){return e.headerLevel>0?"header"+e.headerLevel:"noHeader"}},onClick:function(e,t){var o=Object.keys(n).indexOf(t)+1;o>6?(0,r.toggleHeader)(e,0):o>0&&(0,r.toggleHeader)(e,o)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.increaseFontSize=void 0;var r=o(0);t.increaseFontSize={key:"buttonNameIncreaseFontSize",unlocalizedText:"Increase font size",iconName:"FontIncrease",onClick:function(e){(0,r.changeFontSize)(e,0)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.increaseIndent=void 0;var r=o(0);t.increaseIndent={key:"buttonNameIncreaseIndent",unlocalizedText:"Increase indent",iconName:"IncreaseIndentLegacy",onClick:function(e){(0,r.setIndentation)(e,0)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertImage=void 0;var r=o(0),n=o(0),i={tag:"input",attributes:{type:"file",accept:"image/*",display:"none"}};t.insertImage={key:"buttonNameInsertImage",unlocalizedText:"Insert image",iconName:"Photo2",onClick:function(e){var t=e.getDocument(),o=(0,r.createElement)(i,t);t.body.appendChild(o),o.addEventListener("change",(function(){for(var t=0;t<o.files.length;t++)(0,n.insertImage)(e,o.files[t])}));try{o.click()}finally{t.body.removeChild(o)}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertLink=void 0;var r=o(2),n=o(30),i=o(3),a=o(0),l=o(1),u=o(1),c=o(1),d=o(1);t.insertLink={key:"buttonNameInsertLink",unlocalizedText:"Insert link",iconName:"Link",onClick:function(e,t,o){var i,a=e.getDocument(),l=a.createElement("div");a.body.appendChild(l);var u=e.queryElements("a[href]",1)[0],c=(null==u?void 0:u.href)||"",d=(null==u?void 0:u.textContent)||(null===(i=e.getSelectionRange())||void 0===i?void 0:i.toString())||"";n.render(r.createElement(f,{editor:e,onDismiss:function(){n.unmountComponentAtNode(l),a.body.removeChild(l),l=null},initUrl:c,initDisplayText:d,strings:o}),l)}};var s=(0,c.mergeStyleSets)({linkInput:{width:"100%",minWidth:"250px",height:"32px",margin:"5px 0",border:"1px solid black",borderRadius:"2px",padding:"0 0 0 5px"}});function f(e){var t=e.editor,o=e.onDismiss,n=e.initUrl,c=e.initDisplayText,f=e.strings,m=r.useState(n),g=m[0],C=m[1],h=r.useState(c),k=h[0],p=h[1],y=r.useState(!1),b=y[0],v=y[1],M=r.useRef(),x=r.useRef(),N={type:u.DialogType.normal,title:(0,i.default)(f,"insertLinkTitle","Insert link")},S=r.useCallback((function(){o(),t.focus(),b&&g&&k&&(0,a.createLink)(t,g,g,k)}),[o,g,k,b]),P=r.useCallback((function(){o()}),[o]),D=r.useCallback((function(){p(x.current.value),v(!0)}),[x,v]),L=r.useCallback((function(){g==k&&p(M.current.value),C(M.current.value),v(!0)}),[C,g,k,p,v]),_=r.useCallback((function(e){13==e.which&&S()}),[S]);return r.createElement(d.WindowProvider,{window:t.getDocument().defaultView},r.createElement(u.Dialog,{dialogContentProps:N,hidden:!1,onDismiss:P},r.createElement("div",null,r.createElement("div",null,r.createElement("label",{htmlFor:"linkInput"},"Web address (URL)"),r.createElement("input",{id:"linkInput",ref:M,role:"textbox",type:"text",className:s.linkInput,value:g,onChange:L,onKeyPress:_,autoFocus:!0})),r.createElement("div",null,r.createElement("label",{htmlFor:"displayTextInput"},"Display as"),r.createElement("input",{id:"displayTextInput",ref:x,role:"textbox",type:"text",className:s.linkInput,value:k,onChange:D,onKeyPress:_}))),r.createElement(u.DialogFooter,null,r.createElement(l.PrimaryButton,{text:(0,i.default)(f,"buttonNameOK","OK"),onClick:S}),r.createElement(l.DefaultButton,{text:(0,i.default)(f,"buttonNameCancel","Cancel"),onClick:P}))))}},function(e,t){e.exports=ReactDOM},function(e,t,o){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.insertTable=void 0;var n=o(2),i=o(1),a=o(0),l=o(1),u=o(0),c=(0,l.mergeStyleSets)({tableButton:{width:"15px",height:"15px",margin:"1px 1px 0 0",border:"solid 1px #a19f9d",display:"inline-block",cursor:"pointer",backgroundColor:"transparent"},hovered:{border:"solid 1px #DB626C"},tablePane:{width:"160px",minWidth:"auto",padding:"4px"},tablePaneInner:{lineHeight:"12px"},title:{margin:"5px 0"}});function d(e){var t=e.item,o=e.onClick,a=n.useState(1),l=a[0],d=a[1],m=n.useState(1),g=m[0],C=m[1],h=n.useCallback((function(e){if((0,u.safeInstanceOf)(e,"HTMLElement")){var t=parseInt(e.dataset.col),o=parseInt(e.dataset.row);t>0&&t<=10&&o>0&&o<=10&&(d(t),C(o))}}),[d,C]),k=n.useCallback((function(e){h(e.target)}),[h]),p=n.useCallback((function(e){o(e,r(r({},t),{key:f(g,l)}))}),[g,l,o]),y=n.useMemo((function(){for(var e=[],o=1;o<=10;o++){for(var r=[],n=1;n<=10;n++)r[n]=s(t.text,o,n);e[o]=r}return e}),[t.text]),b=n.useMemo((function(){for(var e=[],t=1;t<=10;t++)for(var o=1;o<=10;o++){var r="cell_"+t+"_"+o,i=o<=l&&t<=g;e.push(n.createElement("button",{className:c.tableButton+" "+(i?c.hovered:""),onClick:p,key:r,id:r,"data-col":o,"data-row":t,"data-is-focusable":!0,onMouseEnter:k,"aria-label":y[t][o]}))}return e}),[l,g]),v=s(t.text,g,l);return n.createElement("div",{className:c.tablePaneInner},n.createElement("div",{className:c.title},v),n.createElement(i.FocusZone,{defaultActiveElement:"cell_1_1",direction:i.FocusZoneDirection.bidirectional,onActiveElementChanged:h},b))}function s(e,t,o){return e.replace("{0}",o.toString()).replace("{1}",t.toString())}function f(e,t){return e+","+t}t.insertTable={key:"buttonNameInsertTable",unlocalizedText:"Insert table",iconName:"Table",onClick:function(e,t){var o=function(e){var t=e.split(","),o=t[0],r=t[1];return{row:parseInt(o),col:parseInt(r)}}(t),r=o.row,n=o.col;(0,a.insertTable)(e,n,r)},dropDownMenu:{items:{insertTablePane:"{0} x {1} table"},itemRender:function(e,t){return n.createElement(d,{item:e,onClick:t})},commandBarSubMenuProperties:{className:c.tablePane}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.italic=void 0;var r=o(0);t.italic={key:"buttonNameItalic",unlocalizedText:"Italic",iconName:"Italic",isChecked:function(e){return e.isItalic},onClick:function(e){return(0,r.toggleItalic)(e),!0}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ltr=void 0;var r=o(0);t.ltr={key:"buttonNameLtr",unlocalizedText:"Left to right",iconName:"BidiLtr",onClick:function(e){(0,r.setDirection)(e,0)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numberedList=void 0;var r=o(0);t.numberedList={key:"buttonNameNumberedList",unlocalizedText:"Numbered list",iconName:"NumberedList",isChecked:function(e){return e.isNumbering},onClick:function(e){return(0,r.toggleNumbering)(e),!0}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.quote=void 0;var r=o(0);t.quote={key:"buttonNameQuote",unlocalizedText:"Quote",iconName:"RightDoubleQuote",isChecked:function(e){return e.isBlockQuote},onClick:function(e){return(0,r.toggleBlockQuote)(e),!0}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.redo=void 0,t.redo={key:"buttonNameRedo",unlocalizedText:"Redo",iconName:"Redo",isDisabled:function(e){return!e.canRedo},onClick:function(e){return e.redo(),!0}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeLink=void 0;var r=o(0);t.removeLink={key:"buttonNameRemoveLink",unlocalizedText:"Remove link",iconName:"RemoveLink",isDisabled:function(e){return!e.canUnlink},onClick:function(e){(0,r.removeLink)(e)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rtl=void 0;var r=o(0);t.rtl={key:"buttonNameRtl",unlocalizedText:"Right to left",iconName:"BidiRtl",onClick:function(e){(0,r.setDirection)(e,1)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.strikethrough=void 0;var r=o(0);t.strikethrough={key:"buttonNameStrikethrough",unlocalizedText:"Strikethrough",iconName:"Strikethrough",isChecked:function(e){return e.isStrikeThrough},onClick:function(e){return(0,r.toggleStrikethrough)(e),!0}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.subscript=void 0;var r=o(0);t.subscript={key:"buttonNameSubscript",unlocalizedText:"Subscript",iconName:"Subscript",isChecked:function(e){return e.isSubscript},onClick:function(e){return(0,r.toggleSubscript)(e),!0}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.superscript=void 0;var r=o(0);t.superscript={key:"buttonNameSuperscript",unlocalizedText:"Superscript",iconName:"Superscript",isChecked:function(e){return e.isSuperscript},onClick:function(e){return(0,r.toggleSuperscript)(e),!0}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.textColor=void 0;var r=o(4),n=o(0);t.textColor={dropDownMenu:(0,r.getColorPickerDropDown)({textColorLightBlue:"Light blue",textColorLightGreen:"Light green",textColorLightYellow:"Light yellow",textColorLightOrange:"Light orange",textColorLightRed:"Light red",textColorLightPurple:"Light purple",textColorBlue:"Blue",textColorGreen:"Green",textColorYellow:"Yellow",textColorOrange:"Orange",textColorRed:"Red",textColorPurple:"Purple",textColorDarkBlue:"Dark blue",textColorDarkGreen:"Dark green",textColorDarkYellow:"Dark yellow",textColorDarkOrange:"Dark orange",textColorDarkRed:"Dark red",textColorDarkPurple:"Dark purple",textColorDarkerBlue:"Darker blue",textColorDarkerGreen:"Darker green",textColorDarkerYellow:"Darker yellow",textColorDarkerOrange:"Darker orange",textColorDarkerRed:"Darker red",textColorDarkerPurple:"Darker purple",textColorWhite:"White",textColorLightGray:"Light gray",textColorGray:"Gray",textColorDarkGray:"Dark gray",textColorDarkerGray:"Darker gray",textColorBlack:"Black"}),key:"buttonNameTextColor",unlocalizedText:"Text color",iconName:"FontColor",onClick:function(e,t){(0,n.setTextColor)(e,r.TextColors[t])}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.underline=void 0;var r=o(0);t.underline={key:"buttonNameUnderline",unlocalizedText:"Underline",iconName:"Underline",isChecked:function(e){return e.isUnderline},onClick:function(e){return(0,r.toggleUnderline)(e),!0}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.undo=void 0,t.undo={key:"buttonNameUndo",unlocalizedText:"Undo",iconName:"undo",isDisabled:function(e){return!e.canUndo},onClick:function(e){return e.undo(),!0}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),n=function(){function e(e){void 0===e&&(e=200),this.delayUpdateTime=e,this.timer=0}return e.prototype.getName=function(){return"Ribbon"},e.prototype.initialize=function(e){this.editor=e},e.prototype.dispose=function(){this.editor=null},e.prototype.onPluginEvent=function(e){switch(e.eventType){case 11:case 7:case 21:this.updateFormat();break;case 0:case 5:this.delayUpdate()}},e.prototype.registerFormatChangedCallback=function(e){var t=this;return this.onFormatChanged=e,function(){t.onFormatChanged=null}},e.prototype.onButtonClick=function(e,t,o){var r;this.editor&&(this.editor.stopShadowEdit(),e.onClick(this.editor,t,o),(e.isChecked||e.isDisabled||(null===(r=e.dropDownMenu)||void 0===r?void 0:r.getSelectedItemKey))&&this.updateFormat())},e.prototype.startLivePreview=function(e,t,o){if(this.editor){var r=this.editor.isInShadowEdit(),n=!r&&this.editor.getSelectionRangeEx();(r||n&&!n.areAllCollapsed)&&(this.editor.startShadowEdit(),e.onClick(this.editor,t,o))}},e.prototype.stopLivePreview=function(){var e;null===(e=this.editor)||void 0===e||e.stopShadowEdit()},e.prototype.delayUpdate=function(){var e=this,t=this.editor.getDocument().defaultView;this.timer&&t.clearTimeout(this.timer),this.timer=t.setTimeout((function(){var t;e.timer=0,null===(t=e.updateFormat)||void 0===t||t.call(e)}),this.delayUpdateTime)},e.prototype.updateFormat=function(){var e=this;if(this.editor&&this.onFormatChanged){var t=(0,r.getFormatState)(this.editor);this.formatState&&!Object.keys(t).some((function(o){return t[o]!=e.formatState[o]}))||(this.formatState=t,this.onFormatChanged(t))}},e}();t.default=function(e){return new n(e)}}]);
//# sourceMappingURL=rooster-react-min.js.map